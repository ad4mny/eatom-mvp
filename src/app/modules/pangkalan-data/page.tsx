import Link from "next/link";

export default function PangkalanDataPage() {
  const maklumatSyarikatItems = [
    "Pemegang Lesen",
    "Syarikat Tutup Operasi",
    "Semua Syarikat",
    "Syarikat Tiada Syarat Lesen",
    "Alamat",
    "Pekerja Sinaran",
    "Pengamal Perubatan",
    "Program Perlindungan Sinaran",
    "Peralatan Sinaran Dilesen",
    "Bahan Nuklear",
    "Bahan Radioaktif",
    "Radas Penyinaran",
    "Inventori Peralatan Sinaran",
    "Meter Tinjau",
    "Bukan Pemegang Lesen",
    "Pengisytiharan Bahan",
    "Bahan Dilesen",
    "Bahan Dimiliki",
    "Senarai Belum Hantar",
    "Surat Pengisytiharan",
    "Unit Converter",
    "Bank Radas",
    "Bank Radas Seliaan",
    "Bank Model Bekas",
    "Syarikat Dengan Sijil Digital",
    "Syarikat Tamat Tempoh Sah Lesen",
    "Data Dikemaskini Oleh Syarikat",
    "Penukaran Nama Syarikat",
    "Alamat Lain-Lain Premis",
    "Hapus Guna Penstoran",
    "Perkongsian Penstoran Sementara",
    "Semakan/Kemaskini Data DU (Data Backup)",
  ];

  const kemaskiniItems = [
    "Kemaskini Data (Bahagian Penilaian & Perlesenan)",
    "Kemaskini Data Syarikat",
  ];

  const records = [
    {
      refNo: "DB-2026-001",
      entiti: "Syarikat Dengan Sijil Digital",
      tindakan: "Kemaskini Data Syarikat",
      status: "Dalam Semakan",
      updatedAt: "11 Feb 2026",
    },
    {
      refNo: "DB-2026-002",
      entiti: "Bahan Radioaktif",
      tindakan: "Semakan Inventori",
      status: "Selesai",
      updatedAt: "10 Feb 2026",
    },
    {
      refNo: "DB-2026-003",
      entiti: "Perkongsian Penstoran Sementara",
      tindakan: "Pengesahan Rekod",
      status: "Dalam Proses",
      updatedAt: "09 Feb 2026",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-[var(--module-content-width)] space-y-6">
        <section className="rounded-2xl bg-[linear-gradient(120deg,#1d4ed8,#2563eb)] p-7 text-blue-50">
          <p className="text-xs font-semibold tracking-[0.16em] text-blue-200">MODUL BERASINGAN</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">Pangkalan Data</h1>
          <p className="mt-2 text-sm text-blue-100">
            MVP mock data untuk maklumat syarikat serta kemaskini data operasi penilaian dan perlesenan.
          </p>
          <Link
            href="/modules"
            className="mt-4 inline-flex rounded-lg border border-white/40 px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
          >
            Kembali Ke Senarai Modul
          </Link>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
          <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">1) Maklumat Syarikat</h2>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {maklumatSyarikatItems.map((item) => (
                <p
                  key={item}
                  className="rounded-md border border-slate-100 bg-slate-50 px-3 py-2 text-sm text-slate-700"
                >
                  {item}
                </p>
              ))}
            </div>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">2) & 3) Kemaskini Data</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {kemaskiniItems.map((item) => (
                <li key={item} className="rounded-md border border-slate-100 bg-slate-50 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </section>

        <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">Rekod Pangkalan Data (Mock)</h2>
            <button className="rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800">
              Kemaskini Data
            </button>
          </div>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-left text-slate-500">
                  <th className="px-2 py-2 font-semibold">No. Rujukan</th>
                  <th className="px-2 py-2 font-semibold">Entiti</th>
                  <th className="px-2 py-2 font-semibold">Tindakan</th>
                  <th className="px-2 py-2 font-semibold">Status</th>
                  <th className="px-2 py-2 font-semibold">Kemaskini</th>
                </tr>
              </thead>
              <tbody>
                {records.map((record) => (
                  <tr key={record.refNo} className="border-b border-slate-100">
                    <td className="px-2 py-3 font-semibold text-slate-900">{record.refNo}</td>
                    <td className="px-2 py-3 text-slate-700">{record.entiti}</td>
                    <td className="px-2 py-3 text-slate-700">{record.tindakan}</td>
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
