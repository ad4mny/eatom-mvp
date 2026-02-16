import Link from "next/link";
import type { InternalModuleDefinition } from "@/lib/internal-modules/types";
import { normalizeUiLabel } from "@/lib/internal-modules/text";

export default function ModuleOverview({
  moduleDef,
}: Readonly<{
  moduleDef: InternalModuleDefinition;
}>) {
  return (
    <div className="space-y-6">
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
              href={`/erp/${moduleDef.routeSlug}/${submodule.slug}`}
              className="mt-4 inline-flex rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Buka
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}
