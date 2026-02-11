import Link from "next/link";

export default function SubModulSiasatanPendakwaanPage() {
  const siasatanProcessList = [
    "Siasatan (IO)",
    "Siasatan (Ketua Seksyen)",
    "Siasatan (Pengarah)",
    "Mesyuarat Perlesenan",
    "Siasatan (PUU)",
    "Keputusan",
    "Ringkasan IO",
    "Laporan",
    "Inventori Barang Kes",
    "Upload Dokumen (IP)",
  ];

  const pendakwaanProcessList = [
    "Pendakwaan",
    "Semakan Dokumen Pendakwaan",
    "Status Tindakan Pendakwaan",
  ];

  const siasatanRecords = [
    {
      refNo: "SST-2026-001",
      pegawai: "IO 1",
      perkara: "Siasatan Kes 1",
      status: "Siasatan (Ketua Seksyen)",
      updatedAt: "11 Feb 2026",
    },
    {
      refNo: "SST-2026-002",
      pegawai: "IO 2",
      perkara: "Siasatan Kes 2",
      status: "Mesyuarat Perlesenan",
      updatedAt: "10 Feb 2026",
    },
    {
      refNo: "SST-2026-003",
      pegawai: "IO 3",
      perkara: "Siasatan Kes 3",
      status: "Keputusan",
      updatedAt: "09 Feb 2026",
    },
  ];

  const pendakwaanRecords = [
    {
      refNo: "PDK-2026-001",
      pegawai: "Pegawai Pendakwaan 1",
      perkara: "Pendakwaan Kes 1",
      status: "Semakan Dokumen",
      updatedAt: "11 Feb 2026",
    },
    {
      refNo: "PDK-2026-002",
      pegawai: "Pegawai Pendakwaan 2",
      perkara: "Pendakwaan Kes 2",
      status: "Dalam Tindakan",
      updatedAt: "10 Feb 2026",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-[var(--module-content-width)] space-y-6">
        <section className="rounded-2xl bg-[linear-gradient(120deg,#881337,#e11d48)] p-7 text-rose-50">
          <p className="text-xs font-semibold tracking-[0.16em] text-rose-200">MODUL BERASINGAN</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">Siasatan & Pendakwaan</h1>
          <p className="mt-2 text-sm text-rose-100">
            MVP dengan mock data untuk dua aliran berasingan: Siasatan dan Pendakwaan.
          </p>
          <Link
            href="/modules"
            className="mt-4 inline-flex rounded-lg border border-white/40 px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
          >
            Kembali Ke Senarai Modul
          </Link>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">1) Siasatan</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {siasatanProcessList.map((process) => (
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
            <h2 className="text-lg font-bold text-slate-900">2) Pendakwaan</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {pendakwaanProcessList.map((process) => (
                <li
                  key={process}
                  className="rounded-md border border-slate-100 bg-slate-50 px-3 py-2"
                >
                  {process}
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900">Rekod Siasatan (Mock)</h3>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[620px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-left text-slate-500">
                    <th className="px-2 py-2 font-semibold">No. Rujukan</th>
                    <th className="px-2 py-2 font-semibold">Pegawai</th>
                    <th className="px-2 py-2 font-semibold">Perkara</th>
                    <th className="px-2 py-2 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {siasatanRecords.map((record) => (
                    <tr key={record.refNo} className="border-b border-slate-100">
                      <td className="px-2 py-3 font-semibold text-slate-900">{record.refNo}</td>
                      <td className="px-2 py-3 text-slate-700">{record.pegawai}</td>
                      <td className="px-2 py-3 text-slate-700">{record.perkara}</td>
                      <td className="px-2 py-3 text-slate-700">{record.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900">Rekod Pendakwaan (Mock)</h3>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[620px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-left text-slate-500">
                    <th className="px-2 py-2 font-semibold">No. Rujukan</th>
                    <th className="px-2 py-2 font-semibold">Pegawai</th>
                    <th className="px-2 py-2 font-semibold">Perkara</th>
                    <th className="px-2 py-2 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {pendakwaanRecords.map((record) => (
                    <tr key={record.refNo} className="border-b border-slate-100">
                      <td className="px-2 py-3 font-semibold text-slate-900">{record.refNo}</td>
                      <td className="px-2 py-3 text-slate-700">{record.pegawai}</td>
                      <td className="px-2 py-3 text-slate-700">{record.perkara}</td>
                      <td className="px-2 py-3 text-slate-700">{record.status}</td>
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
