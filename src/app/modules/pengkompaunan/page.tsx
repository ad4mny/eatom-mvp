import Link from "next/link";

export default function SubModulPengkompaunanPage() {
  const processList = ["Pengkompaunan", "Semakan Kompaun", "Status Kompaun"];

  const records = [
    {
      refNo: "KMP-2026-001",
      pegawai: "Pegawai Kompaun 1",
      perkara: "Kompaun Aktiviti Tanpa Kebenaran",
      status: "Dalam Semakan",
      updatedAt: "11 Feb 2026",
    },
    {
      refNo: "KMP-2026-002",
      pegawai: "Pegawai Kompaun 2",
      perkara: "Kompaun Ketidakpatuhan SOP",
      status: "Menunggu Bayaran",
      updatedAt: "10 Feb 2026",
    },
    {
      refNo: "KMP-2026-003",
      pegawai: "Pegawai Kompaun 3",
      perkara: "Kompaun Kelewatan Pelaporan",
      status: "Selesai",
      updatedAt: "09 Feb 2026",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-[var(--module-content-width)] space-y-6">
        <section className="rounded-2xl bg-[linear-gradient(120deg,#9f1239,#e11d48)] p-7 text-rose-50">
          <p className="text-xs font-semibold tracking-[0.16em] text-rose-200">SISTEM</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">Pengkompaunan</h1>
          <p className="mt-2 text-sm text-rose-100">
            MVP dengan mock data untuk pengurusan rekod pengkompaunan.
          </p>
          <Link
            href="/modules"
            className="mt-4 inline-flex rounded-lg border border-white/40 px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
          >
            Kembali Ke Senarai
          </Link>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_1.9fr]">
          <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">Proses Kerja</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {processList.map((process) => (
                <li
                  key={process}
                  className="rounded-md border border-slate-100 bg-slate-50 px-3 py-2"
                >
                  {process}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-900">Senarai Rekod (Mock)</h2>
              <button className="rounded-lg bg-rose-700 px-4 py-2 text-sm font-semibold text-white hover:bg-rose-800">
                Rekod Baru
              </button>
            </div>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[740px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-left text-slate-500">
                    <th className="px-2 py-2 font-semibold">No. Rujukan</th>
                    <th className="px-2 py-2 font-semibold">Pegawai</th>
                    <th className="px-2 py-2 font-semibold">Perkara</th>
                    <th className="px-2 py-2 font-semibold">Status</th>
                    <th className="px-2 py-2 font-semibold">Kemaskini</th>
                  </tr>
                </thead>
                <tbody>
                  {records.map((record) => (
                    <tr key={record.refNo} className="border-b border-slate-100">
                      <td className="px-2 py-3 font-semibold text-slate-900">{record.refNo}</td>
                      <td className="px-2 py-3 text-slate-700">{record.pegawai}</td>
                      <td className="px-2 py-3 text-slate-700">{record.perkara}</td>
                      <td className="px-2 py-3 text-slate-700">{record.status}</td>
                      <td className="px-2 py-3 text-slate-500">{record.updatedAt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
