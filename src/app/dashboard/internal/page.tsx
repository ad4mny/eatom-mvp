import Link from "next/link";
import ErpAnalyticsGrid from "@/components/dashboard/erp-analytics-grid";
import DashboardSectionList from "@/components/internal-modules/dashboard-section-list";
import { getDashboardSections } from "@/lib/internal-modules/catalog";

export default function InternalDashboardPage() {
  const sections = getDashboardSections();

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-[var(--module-content-width)] space-y-6">
        <section className="rounded-2xl bg-[linear-gradient(120deg,#0f172a,#1e3a8a)] p-7 text-slate-50">
          <p className="text-xs font-semibold tracking-[0.16em] text-slate-300">eATOM</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="mt-2 text-sm text-slate-200">
            Susun atur modul dalaman mengikut kategori operasi utama.
          </p>
          <Link
            href="/modules"
            className="mt-4 inline-flex rounded-lg border border-white/40 px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
          >
            Paparan Kategori
          </Link>
        </section>

        <ErpAnalyticsGrid />

        <DashboardSectionList sections={sections} />
      </div>
    </main>
  );
}
