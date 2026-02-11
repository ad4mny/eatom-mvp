import Link from "next/link";
import { instalasiNuklearSubmodules } from "./data";

export default function InstalasiNuklearLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-[var(--module-content-width)]">
        <section className="rounded-2xl bg-[linear-gradient(120deg,#7c2d12,#b45309)] p-7 text-amber-50">
          <p className="text-xs font-semibold tracking-[0.16em] text-amber-200">SISTEM</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">Instalasi Nuklear</h1>
          <p className="mt-2 max-w-3xl text-sm text-amber-100">
            MVP berasaskan App Router untuk 10 modul Instalasi Nuklear menggunakan mock data.
          </p>
          <Link
            href="/modules"
            className="mt-4 inline-flex rounded-lg border border-white/40 px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
          >
            Kembali Ke Senarai
          </Link>
        </section>

        <nav className="mt-5 overflow-x-auto rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
          <ul className="flex min-w-max gap-2">
            <li>
              <Link
                href="/modules/instalasi-nuklear"
                className="inline-flex rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
              >
                Ringkasan
              </Link>
            </li>
            {instalasiNuklearSubmodules.map((submodule) => (
              <li key={submodule.slug}>
                <Link
                  href={`/modules/instalasi-nuklear/${submodule.slug}`}
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
