import type { PenguatkuasaanSubmodule } from "../data";

type MockRecord = {
  refNo: string;
  pegawai: string;
  perkara: string;
  status: string;
  updatedAt: string;
};

function buildMockRecords(submodule: PenguatkuasaanSubmodule): MockRecord[] {
  const baseCode = `PKS-${String(submodule.number).padStart(2, "0")}`;

  return [
    {
      refNo: `${baseCode}-001`,
      pegawai: "Pegawai Operasi 1",
      perkara: `${submodule.mockFocus} - Rekod 1`,
      status: "Dalam Tindakan",
      updatedAt: "11 Feb 2026",
    },
    {
      refNo: `${baseCode}-002`,
      pegawai: "Pegawai Operasi 2",
      perkara: `${submodule.mockFocus} - Rekod 2`,
      status: "Semakan Ketua Unit",
      updatedAt: "10 Feb 2026",
    },
    {
      refNo: `${baseCode}-003`,
      pegawai: "Pegawai Operasi 3",
      perkara: `${submodule.mockFocus} - Rekod 3`,
      status: "Selesai",
      updatedAt: "09 Feb 2026",
    },
    {
      refNo: `${baseCode}-004`,
      pegawai: "Pegawai Operasi 4",
      perkara: `${submodule.mockFocus} - Rekod 4`,
      status: "Perlu Maklumbalas",
      updatedAt: "08 Feb 2026",
    },
  ];
}

export default function SubmoduleMvp({
  submodule,
}: Readonly<{ submodule: PenguatkuasaanSubmodule }>) {
  const records = buildMockRecords(submodule);
  const jumlah = records.length;
  const selesai = records.filter((record) => record.status === "Selesai").length;
  const tindakan = records.filter((record) => record.status !== "Selesai").length;

  return (
    <div className="space-y-6">
      <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-xs font-semibold tracking-wide text-rose-700">
          MODUL {submodule.number}
        </p>
        <h2 className="mt-1 text-2xl font-bold text-slate-900">{submodule.title}</h2>
        <p className="mt-2 text-sm text-slate-600">{submodule.description}</p>
      </article>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Jumlah Rekod</p>
          <p className="mt-2 text-3xl font-bold text-slate-900">{jumlah}</p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Selesai</p>
          <p className="mt-2 text-3xl font-bold text-slate-900">{selesai}</p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Dalam Tindakan</p>
          <p className="mt-2 text-3xl font-bold text-slate-900">{tindakan}</p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Sumber</p>
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
            <button className="rounded-lg bg-rose-700 px-4 py-2 text-sm font-semibold text-white hover:bg-rose-800">
              Rekod Baru
            </button>
          </div>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-left text-slate-500">
                  <th className="px-2 py-2 font-semibold">No. Rujukan</th>
                  <th className="px-2 py-2 font-semibold">Pegawai</th>
                  <th className="px-2 py-2 font-semibold">Perkara</th>
                  <th className="px-2 py-2 font-semibold">Status</th>
                  <th className="px-2 py-2 font-semibold">Kemaskini</th>
                </tr>
              </thead>
              <tbody>
                {records.map((record) => (
                  <tr key={record.refNo} className="border-b border-slate-100">
                    <td className="px-2 py-3 font-semibold text-slate-900">{record.refNo}</td>
                    <td className="px-2 py-3 text-slate-700">{record.pegawai}</td>
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
