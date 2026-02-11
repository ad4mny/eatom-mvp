export default function PermohonanLesenPage() {
  const processList = [
    "Senarai Permohonan (PS)",
    "Pengesahan Invois (PS)",
    "Kemaskini Syarat Lesen (PS)",
    "Senarai Permohonan (KU)",
    "Pengesahan Invois (KU)",
    "Kemaskini Kategori Kawalan (KU)",
    "Senarai Syarat Lesen (KU)",
    "Senarai Permohonan (P)",
    "Senarai Permohonan (KP)",
    "Dokumentasi Lesen",
    "Senarai Lulus (Sijil Lesen)",
    "Status Semua Permohonan",
    "Senarai Invois (Telah Lengkap)",
    "Jaminan Kewangan",
    "Kutipan Ses (Cess)",
  ];

  const applications = [
    {
      refNo: "PL-2026-0012",
      pemohon: "Hospital Sentral Putra",
      kategori: "Radioterapi",
      peranan: "PS",
      status: "Semakan Invois",
      updatedAt: "11 Feb 2026",
    },
    {
      refNo: "PL-2026-0011",
      pemohon: "Nuklear Meditech Sdn Bhd",
      kategori: "Perubatan Nuklear",
      peranan: "KU",
      status: "Kemaskini Kategori",
      updatedAt: "10 Feb 2026",
    },
    {
      refNo: "PL-2026-0009",
      pemohon: "Indah Isotop Malaysia",
      kategori: "Perindustrian",
      peranan: "P",
      status: "Dalam Penilaian",
      updatedAt: "10 Feb 2026",
    },
    {
      refNo: "PL-2026-0007",
      pemohon: "Makmal Diagnostik Timur",
      kategori: "X-Ray Diagnostik",
      peranan: "KP",
      status: "Lulus",
      updatedAt: "09 Feb 2026",
    },
    {
      refNo: "PL-2026-0006",
      pemohon: "Aero Gamma Services",
      kategori: "Logistik Bahan Radioaktif",
      peranan: "PS",
      status: "Perlu Dokumen Tambahan",
      updatedAt: "08 Feb 2026",
    },
  ];

  const statusSummary = [
    { label: "Jumlah Permohonan", value: "128" },
    { label: "Dalam Semakan", value: "41" },
    { label: "Lulus (Sijil Lesen)", value: "73" },
    { label: "Perlu Tindakan", value: "14" },
  ];

  return (
    <div>
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {statusSummary.map((item) => (
          <article
            key={item.label}
            className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              {item.label}
            </p>
            <p className="mt-2 text-3xl font-bold text-slate-900">{item.value}</p>
          </article>
        ))}
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_1.9fr]">
        <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">Proses Kerja Permohonan Lesen</h2>
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
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-lg font-bold text-slate-900">Senarai Permohonan (MVP)</h2>
            <button className="rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800">
              Permohonan Baru
            </button>
          </div>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-left text-slate-500">
                  <th className="px-2 py-2 font-semibold">No. Rujukan</th>
                  <th className="px-2 py-2 font-semibold">Pemohon</th>
                  <th className="px-2 py-2 font-semibold">Kategori</th>
                  <th className="px-2 py-2 font-semibold">Peranan</th>
                  <th className="px-2 py-2 font-semibold">Status</th>
                  <th className="px-2 py-2 font-semibold">Kemaskini</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((app) => (
                  <tr key={app.refNo} className="border-b border-slate-100">
                    <td className="px-2 py-3 font-semibold text-slate-900">{app.refNo}</td>
                    <td className="px-2 py-3 text-slate-700">{app.pemohon}</td>
                    <td className="px-2 py-3 text-slate-700">{app.kategori}</td>
                    <td className="px-2 py-3">
                      <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">
                        {app.peranan}
                      </span>
                    </td>
                    <td className="px-2 py-3 text-slate-700">{app.status}</td>
                    <td className="px-2 py-3 text-slate-500">{app.updatedAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>
      </section>

      <section className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[
          "Pengesahan Invois",
          "Dokumentasi Lesen",
          "Jaminan Kewangan",
          "Kutipan Ses (Cess)",
        ].map((module) => (
          <article
            key={module}
            className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
          >
            <h3 className="text-base font-bold text-slate-900">{module}</h3>
            <p className="mt-2 text-sm text-slate-600">
              Ruang modul MVP untuk tindakan asas dan jejak audit.
            </p>
            <button className="mt-4 rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
              Buka Modul
            </button>
          </article>
        ))}
      </section>
    </div>
  );
}
