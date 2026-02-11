import Link from "next/link";
import DashboardGreeting from "@/components/dashboard/dashboard-greeting";

export default function ExternalDashboardEntryPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-[var(--module-content-width)] space-y-6">
        <DashboardGreeting
          title="Dashboard PL & Awam"
          description="Pilih jenis dashboard mengikut akses PL atau Orang Awam."
        />

        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">Pilih Dashboard</h2>
          <p className="mt-2 text-sm text-slate-600">
            Gunakan pautan di bawah untuk masuk ke dashboard mengikut jenis pengguna.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/dashboard/external/pl"
              className="rounded-lg bg-emerald-700 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-800"
            >
              Dashboard Pemegang Lesen
            </Link>
            <Link
              href="/dashboard/external/awam"
              className="rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800"
            >
              Dashboard Orang Awam
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
