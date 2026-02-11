import type { InstalasiNuklearSubmodule } from "../data";

type MockRecord = {
  refNo: string;
  entiti: string;
  perkara: string;
  status: string;
  updatedAt: string;
};

function buildMockRecords(submodule: InstalasiNuklearSubmodule): MockRecord[] {
  const baseCode = `INK-${String(submodule.number).padStart(2, "0")}`;

  return [
    {
      refNo: `${baseCode}-001`,
      entiti: "Fasiliti Nuklear Serantau",
      perkara: `${submodule.mockFocus} - Rekod 1`,
      status: "Dalam Semakan",
      updatedAt: "11 Feb 2026",
    },
    {
      refNo: `${baseCode}-002`,
      entiti: "Operator Reaktor Demo",
      perkara: `${submodule.mockFocus} - Rekod 2`,
      status: "Menunggu Pengesahan",
      updatedAt: "10 Feb 2026",
    },
    {
      refNo: `${baseCode}-003`,
      entiti: "Makmal Perlindungan Bahan",
      perkara: `${submodule.mockFocus} - Rekod 3`,
      status: "Diluluskan",
      updatedAt: "09 Feb 2026",
    },
    {
      refNo: `${baseCode}-004`,
      entiti: "Unit Sokongan Operasi",
      perkara: `${submodule.mockFocus} - Rekod 4`,
      status: "Perlu Tindakan",
      updatedAt: "08 Feb 2026",
    },
  ];
}

export default function SubmoduleMvp({
  submodule,
}: Readonly<{ submodule: InstalasiNuklearSubmodule }>) {
  const records = buildMockRecords(submodule);
  const jumlah = records.length;
  const lulus = records.filter((record) => record.status === "Diluluskan").length;
  const tindakan = records.filter((record) => record.status === "Perlu Tindakan").length;

  return (
    <div className="space-y-6">
      <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-xs font-semibold tracking-wide text-amber-700">
          MODUL {submodule.number}
        </p>
        <h2 className="mt-1 text-2xl font-bold text-slate-900">{submodule.title}</h2>
        <p className="mt-2 text-sm text-slate-600">{submodule.description}</p>
        {submodule.note ? (
          <p className="mt-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-xs font-medium text-amber-800">
            Nota: {submodule.note}
          </p>
        ) : null}
      </article>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Jumlah Rekod</p>
          <p className="mt-2 text-3xl font-bold text-slate-900">{jumlah}</p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Diluluskan</p>
          <p className="mt-2 text-3xl font-bold text-slate-900">{lulus}</p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Perlu Tindakan</p>
          <p className="mt-2 text-3xl font-bold text-slate-900">{tindakan}</p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Sumber Data</p>
          <p className="mt-2 text-3xl font-bold text-slate-900">Mock</p>
        </article>
      </section>

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
            <button className="rounded-lg bg-amber-700 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-800">
              Rekod Baru
            </button>
          </div>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-left text-slate-500">
                  <th className="px-2 py-2 font-semibold">No. Rujukan</th>
                  <th className="px-2 py-2 font-semibold">Entiti</th>
                  <th className="px-2 py-2 font-semibold">Perkara</th>
                  <th className="px-2 py-2 font-semibold">Status</th>
                  <th className="px-2 py-2 font-semibold">Kemaskini</th>
                </tr>
              </thead>
              <tbody>
                {records.map((record) => (
                  <tr key={record.refNo} className="border-b border-slate-100">
                    <td className="px-2 py-3 font-semibold text-slate-900">{record.refNo}</td>
                    <td className="px-2 py-3 text-slate-700">{record.entiti}</td>
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
