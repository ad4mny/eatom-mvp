import type {
  InternalModuleDefinition,
  InternalModuleProcess,
  InternalModuleSubmodule,
} from "@/lib/internal-modules/types";
import { normalizeUiLabel } from "@/lib/internal-modules/text";
import { getFormById } from "@/lib/internal-modules/catalog";
import { buildProcessRecords } from "@/lib/internal-modules/mock-records";
import MockFormRenderer from "./mock-form-renderer";

export default function ProcessDetail({
  moduleDef,
  submodule,
  process,
}: Readonly<{
  moduleDef: InternalModuleDefinition;
  submodule: InternalModuleSubmodule;
  process: InternalModuleProcess;
}>) {
  const form = getFormById(process.formId);
  const records = buildProcessRecords(normalizeUiLabel(process.title));

  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-xs font-semibold tracking-[0.16em] text-slate-500">{normalizeUiLabel(moduleDef.title)}</p>
        <h1 className="mt-2 text-2xl font-bold text-slate-900">{normalizeUiLabel(process.title)}</h1>
        <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
          Submodul: {normalizeUiLabel(submodule.title)}
        </p>
        <p className="mt-2 text-sm text-slate-600">
          {process.description ?? "Paparan mock untuk semakan proses kerja mengikut keperluan modul."}
        </p>
        <p className="mt-4 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700">
          Navigasi modul dan submodul tersedia di sidebar.
        </p>
      </section>

      {form ? <MockFormRenderer form={form} /> : null}

      <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-lg font-bold text-slate-900">Rekod Mock</h2>
          <span className="rounded-md bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
            Data demonstrasi
          </span>
        </div>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-left text-slate-500">
                <th className="px-2 py-2 font-semibold">No. Rujukan</th>
                <th className="px-2 py-2 font-semibold">Perkara</th>
                <th className="px-2 py-2 font-semibold">Status</th>
                <th className="px-2 py-2 font-semibold">Pemilik</th>
                <th className="px-2 py-2 font-semibold">Keutamaan</th>
                <th className="px-2 py-2 font-semibold">Kemaskini</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record) => (
                <tr key={record.refNo} className="border-b border-slate-100">
                  <td className="px-2 py-3 font-semibold text-slate-900">{record.refNo}</td>
                  <td className="px-2 py-3 text-slate-700">{record.perkara}</td>
                  <td className="px-2 py-3 text-slate-700">{record.status}</td>
                  <td className="px-2 py-3 text-slate-700">{record.pemilik}</td>
                  <td className="px-2 py-3 text-slate-700">{record.keutamaan}</td>
                  <td className="px-2 py-3 text-slate-500">{record.kemaskini}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
