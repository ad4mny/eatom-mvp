import Link from "next/link";
import DashboardGreeting from "@/components/dashboard/dashboard-greeting";
import {
  BarChartCard,
  DonutChartCard,
  LineChartCard,
} from "@/components/dashboard/mock-charts";

export default function ExternalAwamDashboardPage() {
  const metrics = [
    { label: "Permohonan Aktif", value: "128", note: "Semua permohonan awam terkini" },
    { label: "Permohonan Baharu", value: "36", note: "7 hari terakhir" },
    { label: "Kadar Selesai", value: "84.1%", note: "Penyelesaian dalam SLA" },
    { label: "Kes Perlu Maklumat", value: "22", note: "Menunggu dokumen pemohon" },
  ];

  const trendPoints = [
    { label: "Ming 1", value: 18 },
    { label: "Ming 2", value: 24 },
    { label: "Ming 3", value: 21 },
    { label: "Ming 4", value: 29 },
    { label: "Ming 5", value: 33 },
    { label: "Ming 6", value: 27 },
  ];

  const serviceMix = [
    { label: "Pelupusan", value: 32 },
    { label: "Penceramah", value: 12 },
    { label: "Outreach", value: 19 },
    { label: "Fellowship", value: 16 },
    { label: "Pengecualian", value: 21 },
    { label: "Lesen Perubatan", value: 15 },
    { label: "Lawatan", value: 13 },
  ];

  const serviceStatus = [
    { label: "Selesai", value: 71, color: "#16a34a" },
    { label: "Dalam Semakan", value: 35, color: "#2563eb" },
    { label: "Menunggu Dokumen", value: 22, color: "#f59e0b" },
  ];

  const queueRows = [
    { perkara: "Permohonan Program Outreach", status: "Dalam Semakan", masa: "11 Feb 2026, 09:15" },
    { perkara: "Kebenaran Pelupusan Awam", status: "Menunggu Dokumen", masa: "11 Feb 2026, 08:50" },
    { perkara: "Permohonan Penceramah", status: "Selesai", masa: "10 Feb 2026, 16:20" },
    { perkara: "Lawatan Tapak (Awam)", status: "Dalam Semakan", masa: "10 Feb 2026, 14:05" },
  ];

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-[var(--module-content-width)] space-y-6">
        <DashboardGreeting
          title="Dashboard Orang Awam"
          description="Ringkasan modul permohonan awam termasuk pelupusan, penceramah, outreach, latihan industri, pengecualian Akta 304 dan lawatan tapak."
        />

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((item) => (
            <article
              key={item.label}
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{item.label}</p>
              <p className="mt-2 text-2xl font-bold text-slate-900">{item.value}</p>
              <p className="mt-1 text-xs text-slate-500">{item.note}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.6fr_1fr]">
          <LineChartCard
            title="Trend Permohonan Awam"
            subtitle="Trend penerimaan permohonan awam mengikut minggu (mock)."
            points={trendPoints}
            strokeColor="#1d4ed8"
            fillColor="rgba(37,99,235,0.16)"
          />
          <DonutChartCard
            title="Status Permohonan Awam"
            subtitle="Pecahan status bagi semua perkhidmatan pengguna awam."
            segments={serviceStatus}
          />
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.2fr_1.8fr]">
          <BarChartCard
            title="Permohonan Mengikut Perkhidmatan"
            subtitle="Agihan volum permohonan berdasarkan jenis perkhidmatan awam."
            data={serviceMix}
            barColor="#1d4ed8"
          />

          <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">Analitik Queue Permohonan</h2>
            <p className="mt-1 text-sm text-slate-600">
              Senarai aktiviti terkini untuk semakan pegawai bertugas (mock).
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[680px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-left text-slate-500">
                    <th className="px-2 py-2 font-semibold">Perkara</th>
                    <th className="px-2 py-2 font-semibold">Status</th>
                    <th className="px-2 py-2 font-semibold">Kemaskini</th>
                  </tr>
                </thead>
                <tbody>
                  {queueRows.map((row) => (
                    <tr key={`${row.perkara}-${row.masa}`} className="border-b border-slate-100">
                      <td className="px-2 py-3 font-semibold text-slate-900">{row.perkara}</td>
                      <td className="px-2 py-3 text-slate-700">{row.status}</td>
                      <td className="px-2 py-3 text-slate-500">{row.masa}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">Navigasi Pantas Orang Awam</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link
              href="/pengguna-luar/awam"
              className="rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800"
            >
              Buka Orang Awam
            </Link>
            <Link
              href="/pengguna-luar/awam/permohonan-penilaian-lawatan-tapak-awam"
              className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Penilaian Lawatan Tapak (Awam)
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
