import Link from "next/link";
import { pemegangLesenSubmodules } from "./data";

export default function PemegangLesenLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-[var(--module-content-width)]">
        <section className="rounded-2xl bg-[linear-gradient(120deg,#14532d,#16a34a)] p-7 text-emerald-50">
          <p className="text-xs font-semibold tracking-[0.16em] text-emerald-200">
            AKSES PENGGUNA LUAR (PEMEGANG LESEN)
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">Pemegang Lesen</h1>
          <p className="mt-2 max-w-3xl text-sm text-emerald-100">
            Ruang utama pemegang lesen meliputi laman utama, permohonan realtime,
            maklumbalas & kemaskini, pemantauan radiologi, dan akaun pengguna.
          </p>
        </section>

        <nav className="mt-5 overflow-x-auto rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
          <ul className="flex min-w-max gap-2">
            <li>
              <Link
                href="/pengguna-luar/pemegang-lesen"
                className="inline-flex rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
              >
                Ringkasan
              </Link>
            </li>
            {pemegangLesenSubmodules.map((submodule) => (
              <li key={submodule.slug}>
                <Link
                  href={`/pengguna-luar/pemegang-lesen/${submodule.slug}`}
                  className="inline-flex rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  {submodule.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <section className="mt-5">{children}</section>
      </div>
    </main>
  );
}
