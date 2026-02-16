"use client";

import Link from "next/link";
import { FormEvent, useEffect, useMemo, useState } from "react";
import {
  getDefaultDashboardByRole,
  type UserRole,
  useAuth,
} from "@/components/auth/auth-provider";

const roleOptions: Array<{
  role: UserRole;
  title: string;
  description: string;
}> = [
  {
    role: "internal",
    title: "Internal User",
    description: "Pegawai dalaman untuk modul operasi enterprise eATOM.",
  },
  {
    role: "external_pl",
    title: "License Holder",
    description: "Pemegang Lesen untuk permohonan, maklumbalas dan pemantauan radiologi.",
  },
  {
    role: "external_public",
    title: "Non-License Holder",
    description: "Pengguna awam untuk perkhidmatan luar dan permohonan berkaitan.",
  },
];

function sanitizeNextPath(nextPath: string | null) {
  if (!nextPath) {
    return null;
  }

  if (!nextPath.startsWith("/") || nextPath === "/login") {
    return null;
  }

  return nextPath;
}

export default function LoginPage() {
  const { login, session, isReady } = useAuth();

  const [role, setRole] = useState<UserRole>("internal");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const selectedRole = useMemo(
    () => roleOptions.find((item) => item.role === role),
    [role],
  );

  const safeNextPath = useMemo(() => {
    if (typeof window === "undefined") {
      return null;
    }

    const params = new URLSearchParams(window.location.search);
    return sanitizeNextPath(params.get("next"));
  }, []);

  const redirectWithReload = (path: string) => {
    window.location.assign(path);
  };

  useEffect(() => {
    if (!isReady || !session) {
      return;
    }

    redirectWithReload(safeNextPath ?? getDefaultDashboardByRole(session.role));
  }, [isReady, safeNextPath, session]);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedName = name.trim();
    if (!trimmedName || !password.trim()) {
      setError("Sila isi nama pengguna dan kata laluan.");
      return;
    }

    login({ role, name: trimmedName });
    redirectWithReload(safeNextPath ?? getDefaultDashboardByRole(role));
  };

  return (
    <main className="min-h-screen px-4 py-8 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.3fr_1fr]">
        <section className="rounded-2xl border border-slate-200 bg-[linear-gradient(130deg,#111827_0%,#1e1b4b_45%,#0f766e_100%)] p-8 text-slate-100 shadow-lg">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-200">eATOM Unified Platform</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">Secure Access Gateway</h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-200">
            Platform tunggal untuk pengguna dalaman dan external dengan struktur enterprise yang seragam.
          </p>

          <div className="mt-6 grid gap-3">
            {roleOptions.map((option) => (
              <article key={option.role} className="rounded-xl border border-white/20 bg-white/10 p-4">
                <h2 className="text-base font-bold">{option.title}</h2>
                <p className="mt-1 text-sm text-slate-200">{option.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <Link
              href="/"
              className="inline-flex rounded-md border border-white/30 bg-white/10 px-3 py-2 text-xs font-semibold text-white hover:bg-white/20"
            >
              Kembali Ke Landing Page
            </Link>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-700">Login</p>
          <h2 className="mt-1 text-2xl font-bold text-slate-900">Sign In</h2>
          <p className="mt-1 text-sm text-slate-600">Pilih jenis pengguna, kemudian log masuk ke portal berkaitan.</p>

          <form className="mt-5 space-y-4" onSubmit={onSubmit}>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-slate-700">Jenis Pengguna</p>
              <div className="grid gap-2">
                {roleOptions.map((option) => {
                  const isActive = role === option.role;
                  return (
                    <button
                      key={option.role}
                      type="button"
                      onClick={() => setRole(option.role)}
                      className={`rounded-lg border px-3 py-2 text-left ${
                        isActive
                          ? "border-indigo-300 bg-indigo-50"
                          : "border-slate-300 bg-white hover:bg-slate-50"
                      }`}
                    >
                      <p className="text-sm font-semibold text-slate-900">{option.title}</p>
                      <p className="text-xs text-slate-600">{option.description}</p>
                    </button>
                  );
                })}
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
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none ring-indigo-500 focus:ring-2"
                placeholder="Contoh: adam.z"
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
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none ring-indigo-500 focus:ring-2"
                placeholder="********"
              />
            </div>

            {selectedRole ? (
              <p className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-600">
                Portal selepas log masuk:{" "}
                <span className="font-semibold text-slate-900">
                  {safeNextPath ?? getDefaultDashboardByRole(selectedRole.role)}
                </span>
              </p>
            ) : null}

            {error ? (
              <p className="rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">
                {error}
              </p>
            ) : null}

            <button
              type="submit"
              className="w-full rounded-lg bg-indigo-700 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-800"
            >
              Log Masuk
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
