"use client";

import { useMemo, useState } from "react";
import type { MockFormDefinition } from "@/lib/internal-modules/types";

type FormState = Record<string, string>;

function buildInitialState(form: MockFormDefinition) {
  return form.fields.reduce<FormState>((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {});
}

export default function MockFormRenderer({
  form,
}: Readonly<{
  form: MockFormDefinition;
}>) {
  const [values, setValues] = useState<FormState>(() => buildInitialState(form));
  const [submitted, setSubmitted] = useState(false);

  const requiredMissing = useMemo(() => {
    return form.fields
      .filter((field) => field.required)
      .some((field) => values[field.name].trim().length === 0);
  }, [form.fields, values]);

  const onChange = (name: string, value: string) => {
    setValues((current) => ({ ...current, [name]: value }));
    setSubmitted(false);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (requiredMissing) {
      return;
    }
    setSubmitted(true);
  };

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-bold text-slate-900">{form.title}</h2>
      <p className="mt-1 text-sm text-slate-600">{form.description}</p>

      <form className="mt-4 grid gap-4" onSubmit={onSubmit}>
        {form.fields.map((field) => (
          <label key={field.name} className="grid gap-1 text-sm text-slate-700">
            <span className="font-semibold">
              {field.label}
              {field.required ? " *" : ""}
            </span>

            {field.type === "textarea" ? (
              <textarea
                value={values[field.name]}
                onChange={(event) => onChange(field.name, event.target.value)}
                className="min-h-28 rounded-lg border border-slate-300 px-3 py-2 outline-none ring-blue-500 focus:ring-2"
                placeholder={field.placeholder}
              />
            ) : field.type === "select" ? (
              <select
                value={values[field.name]}
                onChange={(event) => onChange(field.name, event.target.value)}
                className="rounded-lg border border-slate-300 px-3 py-2 outline-none ring-blue-500 focus:ring-2"
              >
                <option value="">Sila pilih</option>
                {(field.options ?? []).map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                value={values[field.name]}
                onChange={(event) => onChange(field.name, event.target.value)}
                className="rounded-lg border border-slate-300 px-3 py-2 outline-none ring-blue-500 focus:ring-2"
                placeholder={field.placeholder}
              />
            )}
          </label>
        ))}

        {requiredMissing ? (
          <p className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800">
            Sila lengkapkan semua medan wajib sebelum hantar.
          </p>
        ) : null}

        {submitted ? (
          <p className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-800">
            Borang mock berjaya dihantar.
          </p>
        ) : null}

        <button
          type="submit"
          className="w-fit rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800"
        >
          {form.submitLabel}
        </button>
      </form>
    </section>
  );
}
