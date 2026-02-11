import Link from "next/link";
import { perlesenanSubmodules } from "./data";

export default function PerlesenanOverviewPage() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {perlesenanSubmodules.map((submodule) => (
        <article
          key={submodule.slug}
          className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
        >
          <div className="flex items-start justify-between gap-3">
            <h2 className="text-lg font-bold text-slate-900">{submodule.title}</h2>
            <span
              className={`rounded-full px-2 py-1 text-xs font-semibold ${
                submodule.isMvpReady
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-amber-100 text-amber-700"
              }`}
            >
              {submodule.isMvpReady ? "MVP Ready" : "Coming Soon"}
            </span>
          </div>
          <p className="mt-2 text-sm text-slate-600">{submodule.description}</p>
          <Link
            href={`/modules/perlesenan/${submodule.slug}`}
            className="mt-4 inline-flex rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Buka
          </Link>
        </article>
      ))}
    </div>
  );
}
