import Link from "next/link";

type ManualPenggunaViewProps = {
  audience: "internal" | "external_pl";
  backHref: string;
  backLabel: string;
  mode?: "standalone" | "embedded";
};

export default function ManualPenggunaView({
  audience,
  backHref,
  backLabel,
  mode = "standalone",
}: Readonly<ManualPenggunaViewProps>) {
  const guideSections = [
    "Pendaftaran & Log Masuk",
    "Permohonan & Semakan",
    "Pembayaran dan Pengesahan",
    "Laporan dan Statistik",
    "Pentadbir Dalaman",
  ];

  const records = [
    {
      docId: "MNL-001",
      tajuk: "Panduan Asas eATOM",
      kategori: "Umum",
      status: "Diterbitkan",
      updatedAt: "11 Feb 2026",
    },
    {
      docId: "MNL-002",
      tajuk: "Panduan Proses Perlesenan",
      kategori: "Perlesenan",
      status: "Dikemaskini",
      updatedAt: "10 Feb 2026",
    },
    {
      docId: "MNL-003",
      tajuk: "Panduan Laporan & Statistik",
      kategori: "Laporan",
      status: "Draf",
      updatedAt: "09 Feb 2026",
    },
  ];

  const audienceText =
    audience === "internal"
      ? "Panduan kepada kakitangan Atom Malaysia untuk menggunakan sistem eATOM."
      : "Panduan kepada pemegang lesen (PL) untuk menggunakan sistem eATOM.";

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
          <section className="rounded-2xl bg-[linear-gradient(120deg,#064e3b,#059669)] p-7 text-emerald-50">
            <p className="text-xs font-semibold tracking-[0.16em] text-emerald-200">
              MODUL BERKONGSI
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight">Manual Pengguna</h1>
            <p className="mt-2 text-sm text-emerald-100">{audienceText}</p>
            <Link
              href={backHref}
              className="mt-4 inline-flex rounded-lg border border-white/40 px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
            >
              {backLabel}
            </Link>
          </section>
        ) : (
          <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h1 className="text-2xl font-bold text-slate-900">Manual Pengguna</h1>
            <p className="mt-2 text-sm text-slate-600">{audienceText}</p>
            <Link
              href={backHref}
              className="mt-4 inline-flex rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              {backLabel}
            </Link>
          </section>
        )}

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {guideSections.map((section) => (
            <article
              key={section}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h2 className="text-lg font-bold text-slate-900">{section}</h2>
              <p className="mt-2 text-sm text-slate-600">
                Ringkasan panduan penggunaan modul berkaitan.
              </p>
            </article>
          ))}
        </section>

        <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">Dokumen Manual (Mock)</h2>
            <button className="rounded-lg bg-emerald-700 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-800">
              Dokumen Baru
            </button>
          </div>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-left text-slate-500">
                  <th className="px-2 py-2 font-semibold">ID</th>
                  <th className="px-2 py-2 font-semibold">Tajuk</th>
                  <th className="px-2 py-2 font-semibold">Kategori</th>
                  <th className="px-2 py-2 font-semibold">Status</th>
                  <th className="px-2 py-2 font-semibold">Kemaskini</th>
                </tr>
              </thead>
              <tbody>
                {records.map((record) => (
                  <tr key={record.docId} className="border-b border-slate-100">
                    <td className="px-2 py-3 font-semibold text-slate-900">{record.docId}</td>
                    <td className="px-2 py-3 text-slate-700">{record.tajuk}</td>
                    <td className="px-2 py-3 text-slate-700">{record.kategori}</td>
                    <td className="px-2 py-3 text-slate-700">{record.status}</td>
                    <td className="px-2 py-3 text-slate-500">{record.updatedAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>
      </div>
    </Wrapper>
  );
}
