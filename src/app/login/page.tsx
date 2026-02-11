"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { getDefaultDashboardByRole, UserRole, useAuth } from "@/components/auth/auth-provider";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();

  const [role, setRole] = useState<UserRole>("internal");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedName = name.trim();
    if (!trimmedName || !password.trim()) {
      setError("Sila isi nama pengguna dan kata laluan.");
      return;
    }

    login({ role, name: trimmedName });
    router.replace(getDefaultDashboardByRole(role));
  };

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.2fr_1fr]">
        <section className="rounded-2xl bg-[linear-gradient(120deg,#0f172a,#1e3a8a)] p-8 text-slate-100">
          <p className="text-sm font-semibold tracking-[0.14em] text-slate-300">
            MODUL SISTEM PERLESENAN DAN KAWALSELIA
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">Mock Login</h1>
          <p className="mt-3 text-sm text-slate-200">
            Sistem mempunyai akses Dalaman (Kakitangan), PL (Pemegang Lesen), dan Orang Awam (Bukan Pemegang Lesen).
          </p>
          <div className="mt-6 space-y-3">
            <article className="rounded-xl border border-white/20 bg-white/10 p-4">
              <h2 className="text-base font-bold">Akses Dalaman</h2>
              <p className="mt-1 text-sm text-slate-200">
                Akses penuh modul sedia ada untuk operasi dalaman.
              </p>
            </article>
            <article className="rounded-xl border border-white/20 bg-white/10 p-4">
              <h2 className="text-base font-bold">Akses PL</h2>
              <p className="mt-1 text-sm text-slate-200">
                Akses dashboard dan modul pemegang lesen.
              </p>
            </article>
            <article className="rounded-xl border border-white/20 bg-white/10 p-4">
              <h2 className="text-base font-bold">Akses Orang Awam</h2>
              <p className="mt-1 text-sm text-slate-200">
                Akses dashboard dan modul permohonan awam.
              </p>
            </article>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Log Masuk</h2>
          <p className="mt-1 text-sm text-slate-600">UI login minimum dengan role selection.</p>

          <form className="mt-5 space-y-4" onSubmit={onSubmit}>
            <div>
              <p className="mb-2 text-sm font-semibold text-slate-700">Jenis Akses</p>
              <div className="grid gap-2">
                <button
                  type="button"
                  onClick={() => setRole("internal")}
                  className={`rounded-lg border px-3 py-2 text-sm font-semibold ${
                    role === "internal"
                      ? "border-slate-900 bg-slate-900 text-white"
                      : "border-slate-300 text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  Dalaman
                </button>
                <button
                  type="button"
                  onClick={() => setRole("external_pl")}
                  className={`rounded-lg border px-3 py-2 text-sm font-semibold ${
                    role === "external_pl"
                      ? "border-slate-900 bg-slate-900 text-white"
                      : "border-slate-300 text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  PL (Pemegang Lesen)
                </button>
                <button
                  type="button"
                  onClick={() => setRole("external_public")}
                  className={`rounded-lg border px-3 py-2 text-sm font-semibold ${
                    role === "external_public"
                      ? "border-slate-900 bg-slate-900 text-white"
                      : "border-slate-300 text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  Orang Awam (Bukan Pemegang Lesen)
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-700">
                Nama Pengguna
              </label>
              <input
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none ring-blue-500 focus:ring-2"
                placeholder="contoh: adam.z"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-slate-700">
                Kata Laluan
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none ring-blue-500 focus:ring-2"
                placeholder="********"
              />
            </div>

            {error ? (
              <p className="rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">
                {error}
              </p>
            ) : null}

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800"
            >
              Log Masuk
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
