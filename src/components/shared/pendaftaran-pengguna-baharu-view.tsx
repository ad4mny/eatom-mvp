import Link from "next/link";

type PendaftaranPenggunaBaharuViewProps = {
  backHref: string;
  backLabel: string;
  mode?: "standalone" | "embedded";
};

export default function PendaftaranPenggunaBaharuView({
  backHref,
  backLabel,
  mode = "standalone",
}: Readonly<PendaftaranPenggunaBaharuViewProps>) {
  const steps = [
    "Maklumat Syarikat",
    "Maklumat Wakil Syarikat",
    "Muat Naik Dokumen Sokongan",
    "Pengesahan Emel",
    "Semakan Pentadbir Sistem",
  ];

  const records = [
    {
      refNo: "REG-PL-001",
      syarikat: "Sinar Radiologi Sdn Bhd",
      status: "Menunggu Semakan",
      updatedAt: "11 Feb 2026",
    },
    {
      refNo: "REG-PL-002",
      syarikat: "Nuklear Integriti Sdn Bhd",
      status: "Perlu Dokumen Tambahan",
      updatedAt: "10 Feb 2026",
    },
    {
      refNo: "REG-PL-003",
      syarikat: "Teknologi Gamma Timur",
      status: "Diluluskan",
      updatedAt: "09 Feb 2026",
    },
  ];

  const Wrapper = mode === "standalone" ? "main" : "div";

  return (
    <Wrapper
      className={
        mode === "standalone" ? "min-h-screen bg-slate-50 px-4 py-8 sm:px-8" : undefined
      }
    >
      <div
        className={
          mode === "standalone"
            ? "mx-auto max-w-[var(--module-content-width)] space-y-6"
            : "space-y-6"
        }
      >
        {mode === "standalone" ? (
          <section className="rounded-2xl bg-[linear-gradient(120deg,#166534,#22c55e)] p-7 text-emerald-50">
            <p className="text-xs font-semibold tracking-[0.16em] text-emerald-200">
              AKSES PENGGUNA LUAR (PEMEGANG LESEN)
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight">Pendaftaran Pengguna Baharu</h1>
            <p className="mt-2 text-sm text-emerald-100">
              Aliran pendaftaran awal pengguna pemegang lesen sebelum akses penuh ke modul PL.
            </p>
            <Link
              href={backHref}
              className="mt-4 inline-flex rounded-lg border border-white/40 px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
            >
              {backLabel}
            </Link>
          </section>
        ) : (
          <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h1 className="text-2xl font-bold text-slate-900">Pendaftaran Pengguna Baharu</h1>
            <p className="mt-2 text-sm text-slate-600">
              Aliran pendaftaran awal pengguna pemegang lesen sebelum akses penuh ke modul PL.
            </p>
            <Link
              href={backHref}
              className="mt-4 inline-flex rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              {backLabel}
            </Link>
          </section>
        )}

        <section className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
          <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">Langkah Pendaftaran</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {steps.map((step) => (
                <li key={step} className="rounded-md border border-slate-100 bg-slate-50 px-3 py-2">
                  {step}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-900">Senarai Pendaftaran (Mock)</h2>
              <button className="rounded-lg bg-emerald-700 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-800">
                Daftar Baharu
              </button>
            </div>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[680px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-left text-slate-500">
                    <th className="px-2 py-2 font-semibold">No. Rujukan</th>
                    <th className="px-2 py-2 font-semibold">Syarikat</th>
                    <th className="px-2 py-2 font-semibold">Status</th>
                    <th className="px-2 py-2 font-semibold">Kemaskini</th>
                  </tr>
                </thead>
                <tbody>
                  {records.map((record) => (
                    <tr key={record.refNo} className="border-b border-slate-100">
                      <td className="px-2 py-3 font-semibold text-slate-900">{record.refNo}</td>
                      <td className="px-2 py-3 text-slate-700">{record.syarikat}</td>
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
    </Wrapper>
  );
}
