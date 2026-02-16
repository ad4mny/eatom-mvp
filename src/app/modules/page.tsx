import Link from "next/link";
import DashboardSectionList from "@/components/internal-modules/dashboard-section-list";
import { getDashboardSections } from "@/lib/internal-modules/catalog";

export default function ModulesPage() {
  const sections = getDashboardSections();

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-[var(--module-content-width)] space-y-6">
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-bold text-slate-900">Kategori Modul</h1>
          <p className="mt-2 text-sm text-slate-600">
            Struktur modul dalaman eATOM mengikut kategori operasi.
          </p>
          <p className="mt-2 rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-700">
            Akses Dalaman (Kakitangan)
          </p>
          <Link
            href="/dashboard/internal"
            className="mt-4 inline-flex rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Kembali ke Dashboard
          </Link>
        </section>

        <DashboardSectionList sections={sections} />
      </div>
    </main>
  );
}
