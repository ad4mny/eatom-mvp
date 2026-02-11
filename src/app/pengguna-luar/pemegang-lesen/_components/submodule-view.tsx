import type { PemegangLesenSubmodule } from "../data";

type MockRecord = {
  refNo: string;
  perkara: string;
  status: string;
  updatedAt: string;
};

function buildMockRecords(submodule: PemegangLesenSubmodule): MockRecord[] {
  const code = submodule.slug.slice(0, 3).toUpperCase();

  return [
    {
      refNo: `PL-${code}-001`,
      perkara: `${submodule.title} - Rekod 1`,
      status: "Dalam Semakan",
      updatedAt: "11 Feb 2026",
    },
    {
      refNo: `PL-${code}-002`,
      perkara: `${submodule.title} - Rekod 2`,
      status: "Menunggu Maklumbalas",
      updatedAt: "10 Feb 2026",
    },
    {
      refNo: `PL-${code}-003`,
      perkara: `${submodule.title} - Rekod 3`,
      status: "Selesai",
      updatedAt: "09 Feb 2026",
    },
  ];
}

export default function SubmoduleView({
  submodule,
}: Readonly<{ submodule: PemegangLesenSubmodule }>) {
  const records = buildMockRecords(submodule);

  return (
    <div className="space-y-6">
      <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">{submodule.title}</h2>
        <p className="mt-2 text-sm text-slate-600">{submodule.description}</p>
      </article>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_1.8fr]">
        <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900">Proses Kerja</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            {submodule.processes.map((process) => (
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
            <h3 className="text-lg font-bold text-slate-900">Senarai Rekod (Mock)</h3>
            <button className="rounded-lg bg-emerald-700 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-800">
              Rekod Baru
            </button>
          </div>

          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-left text-slate-500">
                  <th className="px-2 py-2 font-semibold">No. Rujukan</th>
                  <th className="px-2 py-2 font-semibold">Perkara</th>
                  <th className="px-2 py-2 font-semibold">Status</th>
                  <th className="px-2 py-2 font-semibold">Kemaskini</th>
                </tr>
              </thead>
              <tbody>
                {records.map((record) => (
                  <tr key={record.refNo} className="border-b border-slate-100">
                    <td className="px-2 py-3 font-semibold text-slate-900">{record.refNo}</td>
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
  );
}
