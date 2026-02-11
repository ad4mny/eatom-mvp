import Link from "next/link";

export default function KewanganPage() {
  const permohonanLesenItems = [
    "Invois Fee Permohonan",
    "Invois Fee Lesen",
    "Kemaskini Pembayaran (Peg.Proses)",
    "Pengesahan Pembayaran (Peg.Pengesah)",
    "Status Semua Pembayaran Fee",
    "Senarai Permohonan Lesen",
  ];

  const pengiktirafanPekerjaItems = [
    "Invois Fee Kad",
    "Kemaskini Pembayaran (Peg.Proses)",
    "Pengesahan Pembayaran (Peg.Pengesah)",
    "Status Pembayaran Fee Kad",
  ];

  const peperiksaanItems = [
    "Invois Fee Peperiksaan",
    "Kemaskini Pembayaran (Peg.Proses)",
    "Pengesahan Pembayaran (Peg.Pengesah)",
    "Status Pembayaran Fee",
  ];

  const extraItems = ["Pop-up Message Untuk Bayaran", "Online Banking"];

  const records = [
    {
      refNo: "KWG-2026-001",
      kategori: "Permohonan Lesen",
      perkara: "Invois Fee Permohonan",
      status: "Menunggu Pengesahan",
      updatedAt: "11 Feb 2026",
    },
    {
      refNo: "KWG-2026-002",
      kategori: "Pengiktirafan Pekerja",
      perkara: "Invois Fee Kad",
      status: "Disahkan",
      updatedAt: "10 Feb 2026",
    },
    {
      refNo: "KWG-2026-003",
      kategori: "Peperiksaan",
      perkara: "Invois Fee Peperiksaan",
      status: "Dalam Proses",
      updatedAt: "09 Feb 2026",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-[var(--module-content-width)] space-y-6">
        <section className="rounded-2xl bg-[linear-gradient(120deg,#7c2d12,#b45309)] p-7 text-amber-50">
          <p className="text-xs font-semibold tracking-[0.16em] text-amber-200">SISTEM</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">Kewangan</h1>
          <p className="mt-2 text-sm text-amber-100">
            MVP mock data untuk aliran pembayaran Permohonan Lesen, Pengiktirafan Pekerja, dan Peperiksaan.
          </p>
          <Link
            href="/modules"
            className="mt-4 inline-flex rounded-lg border border-white/40 px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
          >
            Kembali Ke Senarai
          </Link>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">1) Permohonan Lesen</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {permohonanLesenItems.map((item) => (
                <li key={item} className="rounded-md border border-slate-100 bg-slate-50 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">2) Pengiktirafan Pekerja</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {pengiktirafanPekerjaItems.map((item) => (
                <li key={item} className="rounded-md border border-slate-100 bg-slate-50 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">3) Peperiksaan</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {peperiksaanItems.map((item) => (
                <li key={item} className="rounded-md border border-slate-100 bg-slate-50 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">4) & 5) Ciri Tambahan</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {extraItems.map((item) => (
                <li key={item} className="rounded-md border border-slate-100 bg-slate-50 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </section>

        <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">Status Semua Pembayaran Fee (Mock)</h2>
            <button className="rounded-lg bg-amber-700 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-800">
              Jana Invois
            </button>
          </div>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-left text-slate-500">
                  <th className="px-2 py-2 font-semibold">No. Rujukan</th>
                  <th className="px-2 py-2 font-semibold">Kategori</th>
                  <th className="px-2 py-2 font-semibold">Perkara</th>
                  <th className="px-2 py-2 font-semibold">Status</th>
                  <th className="px-2 py-2 font-semibold">Kemaskini</th>
                </tr>
              </thead>
              <tbody>
                {records.map((record) => (
                  <tr key={record.refNo} className="border-b border-slate-100">
                    <td className="px-2 py-3 font-semibold text-slate-900">{record.refNo}</td>
                    <td className="px-2 py-3 text-slate-700">{record.kategori}</td>
                    <td className="px-2 py-3 text-slate-700">{record.perkara}</td>
                    <td className="px-2 py-3 text-slate-700">{record.status}</td>
                    <td className="px-2 py-3 text-slate-500">{record.updatedAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>
      </div>
    </main>
  );
}
