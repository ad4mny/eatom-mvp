import Link from "next/link";
import type { InternalModuleDefinition, InternalModuleSubmodule } from "@/lib/internal-modules/types";
import { normalizeUiLabel } from "@/lib/internal-modules/text";
import { getFormById } from "@/lib/internal-modules/catalog";

export default function SubmoduleOverview({
  moduleDef,
  submodule,
}: Readonly<{
  moduleDef: InternalModuleDefinition;
  submodule: InternalModuleSubmodule;
}>) {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-[var(--module-content-width)] space-y-6">
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold tracking-[0.16em] text-slate-500">{normalizeUiLabel(moduleDef.title)}</p>
          <h1 className="mt-2 text-2xl font-bold text-slate-900">{normalizeUiLabel(submodule.title)}</h1>
          <p className="mt-2 text-sm text-slate-600">{submodule.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link
              href={`/modules/${moduleDef.routeSlug}`}
              className="inline-flex rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Kembali ke Modul
            </Link>
            <Link
              href="/modules"
              className="inline-flex rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Senarai Modul
            </Link>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {submodule.processes.map((process) => {
            const hasForm = Boolean(getFormById(process.formId));
            return (
              <article key={process.slug} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <h2 className="text-base font-bold text-slate-900">{normalizeUiLabel(process.title)}</h2>
                <p className="mt-2 text-sm text-slate-600">
                  {process.description ?? "Paparan proses kerja berdasarkan skop modul."}
                </p>
                {hasForm ? (
                  <p className="mt-3 rounded-md border border-blue-200 bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-700">
                    Termasuk borang mock
                  </p>
                ) : null}
                <Link
                  href={`/modules/${moduleDef.routeSlug}/${submodule.slug}/${process.slug}`}
                  className="mt-4 inline-flex rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-700"
                >
                  Lihat Proses
                </Link>
              </article>
            );
          })}
        </section>
      </div>
    </main>
  );
}
