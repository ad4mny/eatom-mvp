"use client";

import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { cn } from "@/lib/utils";

const steps = ["Maklumat Pemohon", "Maklumat Lesen", "Semakan & Hantar"];

type FormState = {
  applicantName: string;
  workerId: string;
  employer: string;
  licenseType: string;
  activityClass: string;
  submissionDate: string;
};

const initialState: FormState = {
  applicantName: "",
  workerId: "",
  employer: "",
  licenseType: "",
  activityClass: "",
  submissionDate: "",
};

export default function StepperForm() {
  const [activeStep, setActiveStep] = useState(0);
  const [state, setState] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const canContinue = useMemo(() => {
    if (activeStep === 0) {
      return Boolean(state.applicantName && state.workerId && state.employer);
    }

    if (activeStep === 1) {
      return Boolean(state.licenseType && state.activityClass && state.submissionDate);
    }

    return true;
  }, [activeStep, state]);

  const updateField = (key: keyof FormState, value: string) => {
    setState((current) => ({ ...current, [key]: value }));
  };

  const onSubmit = () => {
    setSubmitted(true);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>StepperForm: Permohonan Lesen Baharu</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="grid gap-2 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step}
              className={cn(
                "rounded-lg border px-3 py-3",
                index === activeStep
                  ? "border-teal-300 bg-teal-50"
                  : index < activeStep
                    ? "border-emerald-200 bg-emerald-50"
                    : "border-slate-200 bg-white",
              )}
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Langkah {index + 1}</p>
              <p className="mt-1 text-sm font-semibold text-slate-900">{step}</p>
            </div>
          ))}
        </div>

        {activeStep === 0 ? (
          <div className="grid gap-3 md:grid-cols-2">
            <label className="space-y-1 text-xs font-semibold text-slate-700">
              Nama Pemohon
              <Input
                value={state.applicantName}
                onChange={(event) => updateField("applicantName", event.target.value)}
                placeholder="Contoh: Nur Aisyah Binti Hamzah"
              />
            </label>
            <label className="space-y-1 text-xs font-semibold text-slate-700">
              Worker ID
              <Input
                value={state.workerId}
                onChange={(event) => updateField("workerId", event.target.value)}
                placeholder="Contoh: WK-001"
              />
            </label>
            <label className="space-y-1 text-xs font-semibold text-slate-700 md:col-span-2">
              Organisasi / Syarikat
              <Input
                value={state.employer}
                onChange={(event) => updateField("employer", event.target.value)}
                placeholder="Contoh: Radiotech Solutions Sdn Bhd"
              />
            </label>
          </div>
        ) : null}

        {activeStep === 1 ? (
          <div className="grid gap-3 md:grid-cols-2">
            <label className="space-y-1 text-xs font-semibold text-slate-700">
              Jenis Lesen
              <Select
                value={state.licenseType}
                onChange={(event) => updateField("licenseType", event.target.value)}
              >
                <option value="">Pilih Jenis Lesen</option>
                <option value="lesen-baharu">Lesen Baharu</option>
                <option value="pembaharuan">Pembaharuan Lesen</option>
                <option value="pindaan">Pindaan Syarat Lesen</option>
              </Select>
            </label>

            <label className="space-y-1 text-xs font-semibold text-slate-700">
              Kelas Aktiviti
              <Select
                value={state.activityClass}
                onChange={(event) => updateField("activityClass", event.target.value)}
              >
                <option value="">Pilih Kelas Aktiviti</option>
                <option value="perubatan">Perubatan</option>
                <option value="industri">Industri</option>
                <option value="penyelidikan">Penyelidikan</option>
              </Select>
            </label>

            <label className="space-y-1 text-xs font-semibold text-slate-700">
              Tarikh Hantar
              <Input
                type="date"
                value={state.submissionDate}
                onChange={(event) => updateField("submissionDate", event.target.value)}
              />
            </label>
          </div>
        ) : null}

        {activeStep === 2 ? (
          <div className="space-y-3 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-900">Semakan Akhir</p>
            <div className="grid gap-2 text-sm text-slate-700 md:grid-cols-2">
              <p>Nama: {state.applicantName || "-"}</p>
              <p>Worker ID: {state.workerId || "-"}</p>
              <p>Syarikat: {state.employer || "-"}</p>
              <p>Jenis Lesen: {state.licenseType || "-"}</p>
              <p>Kelas Aktiviti: {state.activityClass || "-"}</p>
              <p>Tarikh Hantar: {state.submissionDate || "-"}</p>
            </div>
            {submitted ? <Badge tone="success">Permohonan Berjaya Dihantar (Mock)</Badge> : null}
          </div>
        ) : null}

        <div className="flex items-center justify-between gap-2">
          <Button
            variant="outline"
            disabled={activeStep === 0}
            onClick={() => setActiveStep((step) => Math.max(0, step - 1))}
          >
            Sebelum
          </Button>

          <div className="flex items-center gap-2">
            {activeStep < steps.length - 1 ? (
              <Button
                disabled={!canContinue}
                onClick={() => setActiveStep((step) => Math.min(steps.length - 1, step + 1))}
              >
                Seterusnya
              </Button>
            ) : (
              <Button onClick={onSubmit}>Hantar Permohonan</Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
