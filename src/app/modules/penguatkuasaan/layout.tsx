import Link from "next/link";
import { penguatkuasaanSubmodules } from "./data";

export default function PenguatkuasaanLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-[var(--module-content-width)]">
        <section className="rounded-2xl bg-[linear-gradient(120deg,#7f1d1d,#be123c)] p-7 text-rose-50">
          <p className="text-xs font-semibold tracking-[0.16em] text-rose-200">MODUL</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">Penguatkuasaan</h1>
          <p className="mt-2 max-w-3xl text-sm text-rose-100">
            MVP berasaskan App Router untuk Pengkompaunan, Penggeledahan, Siasatan & Pendakwaan, dan SPTN dengan mock data.
          </p>
        </section>

        <nav className="mt-5 overflow-x-auto rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
          <ul className="flex min-w-max gap-2">
            <li>
              <Link
                href="/modules/penguatkuasaan"
                className="inline-flex rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
              >
                Ringkasan
              </Link>
            </li>
            {penguatkuasaanSubmodules.map((submodule) => (
              <li key={submodule.slug}>
                <Link
                  href={`/modules/penguatkuasaan/${submodule.slug}`}
                  className="inline-flex rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  {submodule.number}. {submodule.title}
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
