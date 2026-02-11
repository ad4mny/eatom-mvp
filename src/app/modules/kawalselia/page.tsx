import Link from "next/link";
import { kawalseliaSubmodules } from "./data";

export default function KawalseliaOverviewPage() {
  return (
    <div className="space-y-6">
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Jumlah Sub-Modul</p>
          <p className="mt-2 text-3xl font-bold text-slate-900">18</p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Status MVP</p>
          <p className="mt-2 text-3xl font-bold text-slate-900">Aktif</p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Sumber Data</p>
          <p className="mt-2 text-3xl font-bold text-slate-900">Mock</p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Kitaran</p>
          <p className="mt-2 text-3xl font-bold text-slate-900">v0</p>
        </article>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {kawalseliaSubmodules.map((submodule) => (
          <article
            key={submodule.slug}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <p className="text-xs font-semibold tracking-wide text-emerald-700">
              SUB-MODUL {submodule.number}
            </p>
            <h2 className="mt-1 text-lg font-bold text-slate-900">{submodule.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{submodule.description}</p>
            <div className="mt-3 rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-600">
              {submodule.processes.length} proses kerja
            </div>
            <Link
              href={`/modules/kawalselia/${submodule.slug}`}
              className="mt-4 inline-flex rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Buka Sub-Modul
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}
