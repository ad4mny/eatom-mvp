"use client";

import Link from "next/link";
import { useAuth } from "@/components/auth/auth-provider";

export default function PenggunaLuarModulePage() {
  const { session } = useAuth();

  const isPemegangLesen = session?.role === "external_pl";
  const dashboardHref = isPemegangLesen
    ? "/dashboard/external/pl"
    : "/dashboard/external/awam";

  const plModules = [
    {
      href: "/pengguna-luar/pendaftaran-pengguna-baharu",
      title: "Pendaftaran Pengguna Baharu",
      description: "Pendaftaran akaun awal sebelum akses penuh modul.",
    },
    {
      href: "/pengguna-luar/pemegang-lesen",
      title: "Pemegang Lesen",
      description: "Permohonan, maklumbalas, pemantauan radiologi, dan akaun pengguna.",
    },
    {
      href: "/pengguna-luar/manual-pengguna",
      title: "Manual Pengguna",
      description: "Panduan penggunaan sistem untuk pemegang lesen (PL).",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-[var(--module-content-width)] space-y-6">
        <section className="rounded-2xl bg-[linear-gradient(120deg,#166534,#22c55e)] p-7 text-emerald-50">
          <p className="text-xs font-semibold tracking-[0.16em] text-emerald-200">
            MODUL SISTEM PERLESENAN DAN KAWALSELIA
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">Modul PL & Awam</h1>
          <p className="mt-2 text-sm text-emerald-100">
            Akses mengikut peranan: Pemegang Lesen (PL) atau Orang Awam (Bukan Pemegang Lesen).
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">
            {isPemegangLesen ? "Modul Pemegang Lesen" : "Modul Orang Awam"}
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            {isPemegangLesen
              ? "Akses PL telah dipisahkan kepada modul Pendaftaran Pengguna Baharu, Pemegang Lesen, dan Manual Pengguna."
              : "Akses awam difokuskan kepada modul permohonan orang awam."}
          </p>

          {isPemegangLesen ? (
            <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {plModules.map((module) => (
                <article
                  key={module.href}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                >
                  <h3 className="text-lg font-bold text-slate-900">{module.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{module.description}</p>
                  <Link
                    href={module.href}
                    className="mt-4 inline-flex rounded-lg bg-emerald-700 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-800"
                  >
                    Buka Modul
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-4 flex flex-wrap gap-2">
              <Link
                href="/pengguna-luar/awam"
                className="rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800"
              >
                Buka Modul Orang Awam
              </Link>
            </div>
          )}

          <div className="mt-4 flex flex-wrap gap-2">
            <Link
              href={dashboardHref}
              className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Kembali Ke Dashboard
            </Link>
            <Link
              href="/login"
              className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Tukar Akses
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
