import Link from "next/link";
import DashboardGreeting from "@/components/dashboard/dashboard-greeting";
import {
  BarChartCard,
  DonutChartCard,
  LineChartCard,
} from "@/components/dashboard/mock-charts";

export default function InternalDashboardPage() {
  const metrics = [
    { label: "Sistem Aktif", value: "17", note: "Semua sistem dalaman" },
    { label: "Permohonan 30 Hari", value: "1,284", note: "+8.3% vs bulan lepas" },
    { label: "Tugasan SLA Patuh", value: "92.4%", note: "Purata 3.1 hari" },
    { label: "Rekod Perlu Tindakan", value: "146", note: "-12 rekod minggu ini" },
  ];

  const trendPoints = [
    { label: "M1", value: 248 },
    { label: "M2", value: 276 },
    { label: "M3", value: 261 },
    { label: "M4", value: 294 },
    { label: "M5", value: 302 },
    { label: "M6", value: 327 },
  ];

  const moduleLoad = [
    { label: "Perlesenan", value: 412 },
    { label: "Kawalselia", value: 296 },
    { label: "Inst. Nuklear", value: 154 },
    { label: "Penguatkuasaan", value: 132 },
    { label: "Sumber Manusia", value: 118 },
    { label: "Kewangan", value: 168 },
    { label: "Laporan", value: 122 },
  ];

  const statusMix = [
    { label: "Diluluskan", value: 614, color: "#16a34a" },
    { label: "Dalam Semakan", value: 438, color: "#2563eb" },
    { label: "Perlu Tindakan", value: 146, color: "#f59e0b" },
    { label: "Ditolak", value: 86, color: "#dc2626" },
  ];

  const slaRows = [
    { unit: "Unit Perlesenan", piagam: "93.2%", purata: "2.9 hari", trend: "+1.8%" },
    { unit: "Unit Kawalselia", piagam: "91.4%", purata: "3.2 hari", trend: "+0.9%" },
    { unit: "Unit Instalasi Nuklear", piagam: "89.7%", purata: "3.7 hari", trend: "-0.4%" },
    { unit: "Unit Penguatkuasaan", piagam: "95.1%", purata: "2.4 hari", trend: "+2.3%" },
  ];

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-[var(--module-content-width)] space-y-6">
        <DashboardGreeting
          title="Dashboard Dalaman"
          description="Ringkasan akses modul kakitangan termasuk prestasi operasi, status tugasan, dan analitik pematuhan."
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
            title="Trend Permohonan (Mingguan)"
            subtitle="Ringkasan volum permohonan semua modul dalaman (mock)."
            points={trendPoints}
            strokeColor="#1d4ed8"
            fillColor="rgba(29,78,216,0.15)"
          />
          <DonutChartCard
            title="Agihan Status Kes"
            subtitle="Pecahan status semasa semua permohonan/tugasan (mock)."
            segments={statusMix}
          />
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.15fr_1.85fr]">
          <BarChartCard
            title="Permohonan Mengikut Sistem"
            subtitle="Bilangan permohonan aktif mengikut modul utama (mock)."
            data={moduleLoad}
            barColor="#0f766e"
          />

          <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">Analitik Piagam Pelanggan</h2>
            <p className="mt-1 text-sm text-slate-600">
              Prestasi unit berdasarkan pematuhan piagam dan purata masa proses.
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[680px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-left text-slate-500">
                    <th className="px-2 py-2 font-semibold">Unit</th>
                    <th className="px-2 py-2 font-semibold">Pematuhan Piagam</th>
                    <th className="px-2 py-2 font-semibold">Purata Proses</th>
                    <th className="px-2 py-2 font-semibold">Trend</th>
                  </tr>
                </thead>
                <tbody>
                  {slaRows.map((row) => (
                    <tr key={row.unit} className="border-b border-slate-100">
                      <td className="px-2 py-3 font-semibold text-slate-900">{row.unit}</td>
                      <td className="px-2 py-3 text-slate-700">{row.piagam}</td>
                      <td className="px-2 py-3 text-slate-700">{row.purata}</td>
                      <td className="px-2 py-3 text-slate-700">{row.trend}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">Navigasi Pantas</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link
              href="/modules"
              className="rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800"
            >
              Buka Semua
            </Link>
            <Link
              href="/modules/perlesenan"
              className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Perlesenan
            </Link>
            <Link
              href="/modules/kawalselia"
              className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Kawalselia
            </Link>
            <Link
              href="/modules/pengurusan-sumber-manusia"
              className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Pengurusan Sumber Manusia
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
