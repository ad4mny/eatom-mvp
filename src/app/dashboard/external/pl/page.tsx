import Link from "next/link";
import DashboardGreeting from "@/components/dashboard/dashboard-greeting";
import {
  BarChartCard,
  DonutChartCard,
  LineChartCard,
} from "@/components/dashboard/mock-charts";

export default function ExternalPlDashboardPage() {
  const metrics = [
    { label: "Syarikat Aktif", value: "246", note: "Pemegang lesen berstatus aktif" },
    { label: "Permohonan Berjalan", value: "372", note: "Lesen, pendaftaran, kebenaran" },
    { label: "Maklumbalas Tertunggak", value: "58", note: "Perlu kemaskini pemohon" },
    { label: "Kadar Selesai", value: "87.6%", note: "30 hari terakhir" },
  ];

  const trendPoints = [
    { label: "Isn", value: 42 },
    { label: "Sel", value: 47 },
    { label: "Rab", value: 39 },
    { label: "Kha", value: 51 },
    { label: "Jum", value: 56 },
    { label: "Sab", value: 22 },
    { label: "Ahd", value: 19 },
  ];

  const moduleMix = [
    { label: "Lesen", value: 108 },
    { label: "Pengiktirafan", value: 64 },
    { label: "Pendaftaran", value: 58 },
    { label: "Kebenaran", value: 51 },
    { label: "Maklumbalas", value: 74 },
    { label: "Radiologi", value: 45 },
  ];

  const responseStatus = [
    { label: "Selesai", value: 186, color: "#16a34a" },
    { label: "Dalam Semakan", value: 112, color: "#2563eb" },
    { label: "Perlu Maklumbalas", value: 58, color: "#f59e0b" },
    { label: "Ditolak/Batal", value: 16, color: "#dc2626" },
  ];

  const realtimeRows = [
    { perkara: "Permohonan Lesen Baharu", status: "Dalam Semakan", masa: "11 Feb 2026, 10:15" },
    { perkara: "Maklumbalas Pelupusan Bahan", status: "Perlu Kemaskini", masa: "11 Feb 2026, 09:40" },
    { perkara: "Pendaftaran Model Bekas", status: "Selesai", masa: "10 Feb 2026, 17:10" },
    { perkara: "Program Perlindungan Sinaran", status: "Menunggu Pengesahan", masa: "10 Feb 2026, 14:25" },
  ];

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-[var(--module-content-width)] space-y-6">
        <DashboardGreeting
          title="Dashboard Pemegang Lesen"
          description="Ringkasan modul PL meliputi pendaftaran pengguna baharu, pemegang lesen, manual pengguna, dan aliran semasa."
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
            title="Trend Permohonan PL (7 Hari)"
            subtitle="Jumlah transaksi permohonan dan kemaskini oleh pemegang lesen."
            points={trendPoints}
            strokeColor="#15803d"
            fillColor="rgba(21,128,61,0.16)"
          />
          <DonutChartCard
            title="Status Maklumbalas & Kemaskini"
            subtitle="Pecahan status semasa aliran maklumbalas pemegang lesen."
            segments={responseStatus}
          />
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.2fr_1.8fr]">
          <BarChartCard
            title="Volum Mengikut Modul PL"
            subtitle="Agihan kes aktif merentasi modul pemegang lesen."
            data={moduleMix}
            barColor="#059669"
          />

          <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">Realtime Monitoring Snapshot</h2>
            <p className="mt-1 text-sm text-slate-600">
              Ringkasan aktiviti terbaru pemegang lesen (mock realtime feed).
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
                  {realtimeRows.map((row) => (
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
          <h2 className="text-lg font-bold text-slate-900">Navigasi Pantas Pemegang Lesen</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link
              href="/pengguna-luar"
              className="rounded-lg bg-emerald-700 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-800"
            >
              Buka Modul PL & Awam
            </Link>
            <Link
              href="/pengguna-luar/pendaftaran-pengguna-baharu"
              className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Pendaftaran Pengguna Baharu
            </Link>
            <Link
              href="/pengguna-luar/pemegang-lesen/permohonan"
              className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Permohonan
            </Link>
            <Link
              href="/pengguna-luar/manual-pengguna"
              className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Manual Pengguna
            </Link>
            <Link
              href="/pengguna-luar/pemegang-lesen/maklumbalas-kemaskini"
              className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Maklumbalas & Kemaskini
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
