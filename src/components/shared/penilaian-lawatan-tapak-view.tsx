import Link from "next/link";

type PenilaianLawatanTapakViewProps = {
  audience: "internal" | "external_public";
  backHref: string;
  backLabel: string;
  mode?: "standalone" | "embedded";
};

export default function PenilaianLawatanTapakView({
  audience,
  backHref,
  backLabel,
  mode = "standalone",
}: Readonly<PenilaianLawatanTapakViewProps>) {
  const targetGroups = ["Pemegang Lesen (PL)", "Orang Awam"];

  const records = [
    {
      refNo: "LWT-2026-001",
      kategori: "Pemegang Lesen (PL)",
      lokasi: "Fasiliti Industri Timur",
      status: "Jadual Lawatan",
      updatedAt: "11 Feb 2026",
    },
    {
      refNo: "LWT-2026-002",
      kategori: "Orang Awam",
      lokasi: "Tapak Aduan Komuniti",
      status: "Dalam Penilaian",
      updatedAt: "10 Feb 2026",
    },
    {
      refNo: "LWT-2026-003",
      kategori: "Pemegang Lesen (PL)",
      lokasi: "Makmal Diagnostik Utara",
      status: "Selesai",
      updatedAt: "09 Feb 2026",
    },
  ];

  const description =
    audience === "internal"
      ? "MVP mock data untuk penilaian lawatan tapak bagi Pemegang Lesen (PL) dan Orang Awam."
      : "MVP mock data untuk permohonan penilaian lawatan tapak (Awam - BPP).";

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
          <section className="rounded-2xl bg-[linear-gradient(120deg,#1e3a8a,#2563eb)] p-7 text-blue-50">
            <p className="text-xs font-semibold tracking-[0.16em] text-blue-200">
              MODUL BERKONGSI
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight">Penilaian Lawatan Tapak</h1>
            <p className="mt-2 text-sm text-blue-100">{description}</p>
            <Link
              href={backHref}
              className="mt-4 inline-flex rounded-lg border border-white/40 px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
            >
              {backLabel}
            </Link>
          </section>
        ) : (
          <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h1 className="text-2xl font-bold text-slate-900">Penilaian Lawatan Tapak</h1>
            <p className="mt-2 text-sm text-slate-600">{description}</p>
            <Link
              href={backHref}
              className="mt-4 inline-flex rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              {backLabel}
            </Link>
          </section>
        )}

        <section className="grid gap-4 sm:grid-cols-2">
          {targetGroups.map((group) => (
            <article key={group} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900">{group}</h2>
              <p className="mt-2 text-sm text-slate-600">
                Aliran penilaian lawatan tapak dengan rekod mock untuk semakan operasi.
              </p>
            </article>
          ))}
        </section>

        <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">Senarai Lawatan (Mock)</h2>
            <button className="rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800">
              Lawatan Baru
            </button>
          </div>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-left text-slate-500">
                  <th className="px-2 py-2 font-semibold">No. Rujukan</th>
                  <th className="px-2 py-2 font-semibold">Kategori</th>
                  <th className="px-2 py-2 font-semibold">Lokasi</th>
                  <th className="px-2 py-2 font-semibold">Status</th>
                  <th className="px-2 py-2 font-semibold">Kemaskini</th>
                </tr>
              </thead>
              <tbody>
                {records.map((record) => (
                  <tr key={record.refNo} className="border-b border-slate-100">
                    <td className="px-2 py-3 font-semibold text-slate-900">{record.refNo}</td>
                    <td className="px-2 py-3 text-slate-700">{record.kategori}</td>
                    <td className="px-2 py-3 text-slate-700">{record.lokasi}</td>
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
