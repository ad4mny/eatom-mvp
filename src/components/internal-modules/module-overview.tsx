import Link from "next/link";
import type { InternalModuleDefinition } from "@/lib/internal-modules/types";
import { normalizeUiLabel } from "@/lib/internal-modules/text";

export default function ModuleOverview({
  moduleDef,
}: Readonly<{
  moduleDef: InternalModuleDefinition;
}>) {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-[var(--module-content-width)] space-y-6">
        <section className="rounded-2xl bg-[linear-gradient(120deg,#0f172a,#1e293b)] p-7 text-slate-50">
          <p className="text-xs font-semibold tracking-[0.16em] text-slate-300">No. {moduleDef.moduleNo}</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">{normalizeUiLabel(moduleDef.title)}</h1>
          <p className="mt-2 text-sm text-slate-200">{moduleDef.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link
              href="/dashboard/internal"
              className="inline-flex rounded-lg border border-white/40 px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
            >
              Kembali ke Dashboard
            </Link>
            <Link
              href="/modules"
              className="inline-flex rounded-lg bg-white px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-100"
            >
              Senarai Modul
            </Link>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {moduleDef.submodules.map((submodule) => (
            <article
              key={submodule.slug}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h2 className="text-lg font-bold text-slate-900">{normalizeUiLabel(submodule.title)}</h2>
              <p className="mt-2 text-sm text-slate-600">{submodule.description}</p>
              <p className="mt-3 rounded-md bg-slate-50 px-3 py-2 text-xs text-slate-600">
                {submodule.processes.length} proses kerja
              </p>
              <Link
                href={`/modules/${moduleDef.routeSlug}/${submodule.slug}`}
                className="mt-4 inline-flex rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Buka
              </Link>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
