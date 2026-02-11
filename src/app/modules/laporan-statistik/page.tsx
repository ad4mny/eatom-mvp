import Link from "next/link";

export default function LaporanStatistikPage() {
  const piagamPermohonanItems = [
    "Permohonan Lesen",
    "Permohonan Kebenaran",
    "Pengiktirafan Pekerja",
    "Pendaftaran",
  ];

  const piagamPelangganItems = [
    "Program Perlindungan Sinaran",
    "Pelan Kecemasan",
    "Pelan Sekuriti",
  ];

  const spesifikasiOutputItems = [
    "Permohonan Lesen",
    "Permohonan Kebenaran",
    "Pengiktirafan Pekerja",
    "Pendaftaran",
    "Penguatkuasaan",
    "Peperiksaan",
    "Kewangan",
    "Umum",
    "Pentadbir",
    "Siasatan & Pendakwaan",
  ];

  const statistikItems = [
    "Permohonan & Pemegang Lesen",
    "Permohonan Kebenaran",
    "Pengiktirafan Pekerja",
    "Pendaftaran",
    "Aduan dan Pemeriksaan",
    "Bahan Radioaktif",
    "Bahan Nuklear",
    "Radas Penyinaran",
    "Tugasan Pegawai Perlesenan",
  ];

  const peperiksaanItems = [
    "Pegawai Perlindungan Sinaran",
    "Pengendali Ujian Kebocoran",
    "Pengendali Reaktor",
  ];

  const labelSuratItems = [
    "Senarai Syarikat (Bentuk Jadual)",
    "Senarai Syarikat (Bentuk Label)",
    "Senarai Syarikat Agensi Perunding",
    "Senarai Email Pekerja (Berkhidmat)",
  ];

  const extraItems = [
    "Data SPTN-MyATOM",
    "Data Umum (Audit)",
    "Template Syarat Lesen",
    "Prestasi Penilai",
  ];

  const records = [
    {
      refNo: "RPT-2026-001",
      kategori: "Statistik",
      perkara: "Permohonan & Pemegang Lesen",
      status: "Siap Dijana",
      updatedAt: "11 Feb 2026",
    },
    {
      refNo: "RPT-2026-002",
      kategori: "Label & Surat",
      perkara: "Senarai Syarikat (Bentuk Label)",
      status: "Dalam Proses",
      updatedAt: "10 Feb 2026",
    },
    {
      refNo: "RPT-2026-003",
      kategori: "Prestasi Penilai",
      perkara: "Analitik Bulanan Penilai",
      status: "Diterbitkan",
      updatedAt: "09 Feb 2026",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-[var(--module-content-width)] space-y-6">
        <section className="rounded-2xl bg-[linear-gradient(120deg,#581c87,#7e22ce)] p-7 text-purple-50">
          <p className="text-xs font-semibold tracking-[0.16em] text-purple-200">SISTEM</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">Laporan dan Statistik</h1>
          <p className="mt-2 text-sm text-purple-100">
            MVP mock data untuk piagam, statistik, spesifikasi output, peperiksaan, label/surat, audit dan prestasi penilai.
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
            <h2 className="text-lg font-bold text-slate-900">1) Piagam Permohonan</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {piagamPermohonanItems.map((item) => (
                <li key={item} className="rounded-md border border-slate-100 bg-slate-50 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">2) Piagam Pelanggan</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {piagamPelangganItems.map((item) => (
                <li key={item} className="rounded-md border border-slate-100 bg-slate-50 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">3) Spesifikasi Output</h2>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {spesifikasiOutputItems.map((item) => (
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
            <h2 className="text-lg font-bold text-slate-900">4) Statistik</h2>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {statistikItems.map((item) => (
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
            <h2 className="text-lg font-bold text-slate-900">5) Peperiksaan</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {peperiksaanItems.map((item) => (
                <li key={item} className="rounded-md border border-slate-100 bg-slate-50 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">6) Label & Surat</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {labelSuratItems.map((item) => (
                <li key={item} className="rounded-md border border-slate-100 bg-slate-50 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm lg:col-span-2">
            <h2 className="text-lg font-bold text-slate-900">7) - 10) Lain-Lain Output</h2>
            <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {extraItems.map((item) => (
                <p
                  key={item}
                  className="rounded-md border border-slate-100 bg-slate-50 px-3 py-2 text-sm text-slate-700"
                >
                  {item}
                </p>
              ))}
            </div>
          </article>
        </section>

        <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">Output Laporan (Mock)</h2>
            <button className="rounded-lg bg-purple-700 px-4 py-2 text-sm font-semibold text-white hover:bg-purple-800">
              Jana Laporan
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
