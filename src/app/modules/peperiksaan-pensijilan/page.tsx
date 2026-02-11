import Link from "next/link";

export default function PeperiksaanPensijilanPage() {
  const peperiksaanItems = [
    "Pegawai Perlindungan Sinaran (PPS)",
    "Pengendali Ujian Kebocoran (PUK)",
    "Pengendali Reaktor (PR)",
    "Katalaluan",
    "DATA ENTRY",
    "AUDIT TRAIL IEXAM",
  ];

  const cepItems = ["CEP"]; // mock placeholder
  const auditItems = ["Audit Pematuhan Pusat Latihan"];

  const records = [
    {
      refNo: "EXM-2026-001",
      kategori: "PPS",
      perkara: "Peperiksaan PPS Siri 1",
      status: "Dalam Semakan",
      updatedAt: "11 Feb 2026",
    },
    {
      refNo: "EXM-2026-002",
      kategori: "CEP",
      perkara: "Pembaharuan CEP Suku 1",
      status: "Diluluskan",
      updatedAt: "10 Feb 2026",
    },
    {
      refNo: "EXM-2026-003",
      kategori: "Audit",
      perkara: "Audit Pematuhan Pusat Latihan A",
      status: "Dalam Tindakan",
      updatedAt: "09 Feb 2026",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-[var(--module-content-width)] space-y-6">
        <section className="rounded-2xl bg-[linear-gradient(120deg,#7c2d12,#ea580c)] p-7 text-orange-50">
          <p className="text-xs font-semibold tracking-[0.16em] text-orange-200">MODUL BERASINGAN</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">Peperiksaan & Pensijilan</h1>
          <p className="mt-2 text-sm text-orange-100">
            MVP mock data untuk Peperiksaan, CEP, dan Audit Pematuhan Pusat Latihan.
          </p>
          <Link
            href="/modules"
            className="mt-4 inline-flex rounded-lg border border-white/40 px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
          >
            Kembali Ke Senarai Modul
          </Link>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">1) Peperiksaan</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {peperiksaanItems.map((item) => (
                <li key={item} className="rounded-md border border-slate-100 bg-slate-50 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">2) CEP</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {cepItems.map((item) => (
                <li key={item} className="rounded-md border border-slate-100 bg-slate-50 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">3) Audit Pematuhan Pusat Latihan</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {auditItems.map((item) => (
                <li key={item} className="rounded-md border border-slate-100 bg-slate-50 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </section>

        <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">Senarai Rekod (Mock)</h2>
            <button className="rounded-lg bg-orange-700 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-800">
              Rekod Baru
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
