"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@/components/ui/table";
import {
  getPengurusanSumberManusiaFormTemplate,
  getPengurusanSumberManusiaWorkflowLanes,
  pengurusanSumberManusiaStatusOptions,
  type PengurusanSumberManusiaFormTemplate,
  type PengurusanSumberManusiaSubmodule,
} from "../data";

type MockRecord = {
  id: string;
  refNo: string;
  perkara: string;
  process: string;
  unit: string;
  status: string;
  priority: "Rendah" | "Sederhana" | "Tinggi";
  startDate: string;
  updatedAt: string;
};

type ActivityLog = {
  id: string;
  message: string;
  timestamp: string;
};

type FormState = Record<string, string>;

const seedUnits = [
  "Bahagian Pengurusan Sumber Manusia",
  "Urusetia Latihan",
  "Urusetia Ceramah",
  "Pentadbir Sistem",
  "Pejabat Ketua Pengarah",
];

const seedPriorities: Array<MockRecord["priority"]> = ["Rendah", "Sederhana", "Tinggi"];
const seedStatuses = [
  "Dalam Semakan",
  "Menunggu Kelulusan",
  "Diluluskan",
  "Perlu Tindakan",
  "Selesai",
];

function formatDate(value: Date) {
  return new Intl.DateTimeFormat("ms-MY", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(value);
}

function formatDateInput(value: Date) {
  return value.toISOString().slice(0, 10);
}

function createId(prefix: string) {
  return `${prefix}-${Math.random().toString(36).slice(2, 9)}-${Date.now()}`;
}

function createTimestamp() {
  return new Intl.DateTimeFormat("ms-MY", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date());
}

function getNextRefNo(records: MockRecord[], submodule: PengurusanSumberManusiaSubmodule) {
  const basePrefix = `PSM-${String(submodule.number).padStart(2, "0")}-`;
  const maxRef = records.reduce((currentMax, record) => {
    if (!record.refNo.startsWith(basePrefix)) {
      return currentMax;
    }
    const parsed = Number(record.refNo.slice(basePrefix.length));
    if (Number.isNaN(parsed)) {
      return currentMax;
    }
    return Math.max(currentMax, parsed);
  }, 0);
  return `${basePrefix}${String(maxRef + 1).padStart(3, "0")}`;
}

function buildInitialFormState(formTemplate: PengurusanSumberManusiaFormTemplate) {
  return formTemplate.fields.reduce<FormState>((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {});
}

function derivePriority(content: string) {
  const text = content.toLowerCase();
  if (text.includes("urgent") || text.includes("segera") || text.includes("kritikal")) {
    return "Tinggi";
  }
  if (text.includes("semakan") || text.includes("kelulusan")) {
    return "Sederhana";
  }
  return "Rendah";
}

function pickFirstFilled(formValues: FormState, keys: string[], fallback: string) {
  for (const key of keys) {
    const value = formValues[key];
    if (value && value.trim().length > 0) {
      return value.trim();
    }
  }
  return fallback;
}

function buildMockRecords(submodule: PengurusanSumberManusiaSubmodule): MockRecord[] {
  const baseCode = `PSM-${String(submodule.number).padStart(2, "0")}`;
  const processes = submodule.processes.length > 0 ? submodule.processes : [submodule.mockFocus];
  const targetSize = Math.min(8, Math.max(5, processes.length + 1));

  return Array.from({ length: targetSize }, (_, index) => {
    const date = new Date(2026, 1, 16 - index);
    const process = processes[index % processes.length] ?? submodule.mockFocus;

    return {
      id: `${baseCode}-${String(index + 1).padStart(3, "0")}`,
      refNo: `${baseCode}-${String(index + 1).padStart(3, "0")}`,
      perkara: `${submodule.mockFocus} - ${process}`,
      process,
      unit: seedUnits[index % seedUnits.length] ?? seedUnits[0] ?? "Urusetia",
      status: seedStatuses[index % seedStatuses.length] ?? "Dalam Semakan",
      priority: seedPriorities[index % seedPriorities.length] ?? "Rendah",
      startDate: formatDateInput(date),
      updatedAt: formatDate(date),
    };
  });
}

function toCsv(records: MockRecord[]) {
  const headers = [
    "No. Rujukan",
    "Proses",
    "Perkara",
    "Unit",
    "Status",
    "Prioriti",
    "Tarikh Mula",
    "Kemaskini",
  ];

  const rows = records.map((record) => [
    record.refNo,
    record.process,
    record.perkara,
    record.unit,
    record.status,
    record.priority,
    record.startDate,
    record.updatedAt,
  ]);

  return [headers, ...rows]
    .map((columns) =>
      columns.map((column) => `"${column.replaceAll('"', '""')}"`).join(","),
    )
    .join("\n");
}

function getPriorityTone(priority: MockRecord["priority"]) {
  if (priority === "Tinggi") {
    return "danger";
  }
  if (priority === "Sederhana") {
    return "warning";
  }
  return "muted";
}

function getStatusTone(status: string) {
  const normalized = status.toLowerCase();
  if (normalized.includes("lulus") || normalized.includes("selesai")) {
    return "success";
  }
  if (normalized.includes("tolak") || normalized.includes("gagal")) {
    return "danger";
  }
  if (normalized.includes("tindakan") || normalized.includes("semakan")) {
    return "warning";
  }
  return "default";
}

export default function SubmoduleMvp({
  submodule,
}: Readonly<{ submodule: PengurusanSumberManusiaSubmodule }>) {
  const searchParams = useSearchParams();
  const formTemplate = getPengurusanSumberManusiaFormTemplate(submodule);
  const workflowLanes = getPengurusanSumberManusiaWorkflowLanes(submodule);
  const initialRecords = useMemo(() => buildMockRecords(submodule), [submodule]);
  const processQuery = searchParams.get("process");
  const defaultProcessFilter =
    processQuery && submodule.processes.includes(processQuery) ? processQuery : "Semua";
  const [records, setRecords] = useState<MockRecord[]>(initialRecords);
  const [formValues, setFormValues] = useState<FormState>(() =>
    buildInitialFormState(formTemplate),
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("Semua");
  const [processFilter, setProcessFilter] = useState(defaultProcessFilter);
  const [activityLogs, setActivityLogs] = useState<ActivityLog[]>([
    {
      id: "act-seed",
      message: `${initialRecords.length} rekod mock dimuatkan untuk ${submodule.title}.`,
      timestamp: "Seed Data",
    },
  ]);

  useEffect(() => {
    setProcessFilter(defaultProcessFilter);
  }, [defaultProcessFilter]);

  const statusOptions = useMemo(() => {
    return Array.from(
      new Set([...pengurusanSumberManusiaStatusOptions, ...records.map((record) => record.status)]),
    );
  }, [records]);

  const processOptions = useMemo(() => {
    return Array.from(new Set([...submodule.processes, ...records.map((record) => record.process)]));
  }, [records, submodule.processes]);

  const missingRequiredFields = useMemo(() => {
    return formTemplate.fields
      .filter((field) => field.required)
      .filter((field) => !formValues[field.name] || formValues[field.name].trim().length === 0)
      .map((field) => field.label);
  }, [formTemplate.fields, formValues]);

  const filteredRecords = useMemo(() => {
    return records.filter((record) => {
      const matchesSearch =
        searchTerm.trim().length === 0 ||
        record.refNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        record.perkara.toLowerCase().includes(searchTerm.toLowerCase()) ||
        record.unit.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === "Semua" || record.status === statusFilter;
      const matchesProcess = processFilter === "Semua" || record.process === processFilter;
      return matchesSearch && matchesStatus && matchesProcess;
    });
  }, [records, searchTerm, statusFilter, processFilter]);

  const jumlah = records.length;
  const selesai = records.filter((record) => {
    const status = record.status.toLowerCase();
    return status.includes("selesai") || status.includes("diluluskan");
  }).length;
  const tindakan = records.filter((record) => record.status.toLowerCase().includes("tindakan")).length;
  const prioritiTinggi = records.filter((record) => record.priority === "Tinggi").length;

  const appendActivity = (message: string) => {
    setActivityLogs((current) => [
      {
        id: createId("act"),
        message,
        timestamp: createTimestamp(),
      },
      ...current,
    ].slice(0, 8));
  };

  const onFormFieldChange = (name: string, value: string) => {
    setFormValues((current) => ({ ...current, [name]: value }));
    setSuccessMessage(null);
    setErrorMessage(null);
  };

  const onSubmitRecord = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (missingRequiredFields.length > 0) {
      setErrorMessage(
        `Sila lengkapkan medan wajib: ${missingRequiredFields.join(", ")}.`,
      );
      setSuccessMessage(null);
      return;
    }

    const perkara = pickFirstFilled(
      formValues,
      ["perkara", "tajukDokumen", "tajukLatihan", "topikCeramah", "subModul"],
      `${submodule.mockFocus} - Rekod Baharu`,
    );
    const process = pickFirstFilled(
      formValues,
      ["proses", "kategoriLatihan", "jenisTindakan", "kategori"],
      submodule.processes[0] ?? "Rujukan Umum",
    );
    const unit = pickFirstFilled(
      formValues,
      ["unit", "penganjur", "organisasi", "pegawaiBertugas", "namaPemohon"],
      "Urusetia Modul",
    );
    const status = pickFirstFilled(formValues, ["status", "statusPembayaran"], "Dalam Semakan");
    const startDate = pickFirstFilled(
      formValues,
      ["tarikhMula", "tarikhCadangan", "tarikhTerbit"],
      formatDateInput(new Date()),
    );
    const priority = derivePriority(`${perkara} ${formValues.catatan ?? ""}`);

    const newRecord: MockRecord = {
      id: createId(submodule.slug),
      refNo: getNextRefNo(records, submodule),
      perkara,
      process,
      unit,
      status,
      priority,
      startDate,
      updatedAt: formatDate(new Date()),
    };

    setRecords((current) => [newRecord, ...current]);
    setFormValues(buildInitialFormState(formTemplate));
    setSuccessMessage("Rekod mock berjaya ditambah.");
    setErrorMessage(null);
    appendActivity(`Rekod ${newRecord.refNo} ditambah melalui borang mock.`);
  };

  const updateStatus = (recordId: string, nextStatus: string) => {
    setRecords((current) =>
      current.map((record) =>
        record.id === recordId
          ? {
              ...record,
              status: nextStatus,
              updatedAt: formatDate(new Date()),
            }
          : record,
      ),
    );
    appendActivity(`Status rekod dikemaskini ke "${nextStatus}".`);
  };

  const cycleUnit = (recordId: string) => {
    setRecords((current) =>
      current.map((record) => {
        if (record.id !== recordId) {
          return record;
        }
        const currentIndex = seedUnits.findIndex((unit) => unit === record.unit);
        const nextIndex = currentIndex >= 0 ? (currentIndex + 1) % seedUnits.length : 0;
        const nextUnit = seedUnits[nextIndex] ?? seedUnits[0] ?? record.unit;
        return {
          ...record,
          unit: nextUnit,
          updatedAt: formatDate(new Date()),
        };
      }),
    );
    appendActivity("PIC rekod ditukar kepada unit seterusnya.");
  };

  const cyclePriority = (recordId: string) => {
    setRecords((current) =>
      current.map((record) => {
        if (record.id !== recordId) {
          return record;
        }
        const currentIndex = seedPriorities.findIndex((priority) => priority === record.priority);
        const nextIndex = currentIndex >= 0 ? (currentIndex + 1) % seedPriorities.length : 0;
        const nextPriority = seedPriorities[nextIndex] ?? "Rendah";
        return {
          ...record,
          priority: nextPriority,
          updatedAt: formatDate(new Date()),
        };
      }),
    );
    appendActivity("Tahap prioriti rekod dikemaskini.");
  };

  const deleteRecord = (recordId: string) => {
    const removedRefNo = records.find((record) => record.id === recordId)?.refNo ?? recordId;
    setRecords((current) => current.filter((record) => record.id !== recordId));
    appendActivity(`Rekod ${removedRefNo} dipadam daripada senarai mock.`);
  };

  const resetMockData = () => {
    const resetRecords = buildMockRecords(submodule);
    setRecords(resetRecords);
    setFormValues(buildInitialFormState(formTemplate));
    setSearchTerm("");
    setStatusFilter("Semua");
    setProcessFilter("Semua");
    setSuccessMessage("Data mock dipulihkan ke set asal.");
    setErrorMessage(null);
    appendActivity(`Data mock untuk ${submodule.title} dipulihkan.`);
  };

  const exportCsv = () => {
    const csv = toCsv(filteredRecords);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${submodule.slug}-mock-records.csv`;
    document.body.append(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    appendActivity(`Eksport CSV dijana (${filteredRecords.length} rekod).`);
  };

  return (
    <div className="space-y-6">
      <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h2 className="mt-1 text-2xl font-bold text-slate-900">{submodule.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{submodule.description}</p>
          </div>
          <div className="flex gap-2">
            <Badge tone="default">Mock Data</Badge>
            <Badge tone="muted">Form + Table + Management</Badge>
          </div>
        </div>
      </article>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Jumlah Rekod</p>
          <p className="mt-2 text-3xl font-bold text-slate-900">{jumlah}</p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Selesai/Lulus</p>
          <p className="mt-2 text-3xl font-bold text-slate-900">{selesai}</p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Perlu Tindakan</p>
          <p className="mt-2 text-3xl font-bold text-slate-900">{tindakan}</p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Prioriti Tinggi
          </p>
          <p className="mt-2 text-3xl font-bold text-slate-900">{prioritiTinggi}</p>
        </article>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.3fr_1fr]">
        <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900">Aliran Kerja & Submodul</h3>
          <div className="mt-4 space-y-4">
            {workflowLanes.map((lane) => (
              <section key={lane.actor} className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                <h4 className="text-sm font-semibold text-slate-900">{lane.actor}</h4>
                <ul className="mt-2 space-y-1 text-sm text-slate-700">
                  {lane.tasks.map((task) => (
                    <li key={`${lane.actor}-${task}`}>{task}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" onClick={resetMockData}>
              Reset Data Mock
            </Button>
            <Button variant="secondary" size="sm" onClick={exportCsv}>
              Eksport CSV
            </Button>
          </div>

          <h3 className="mt-4 text-lg font-bold text-slate-900">Log Aktiviti Mock</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {activityLogs.map((log) => (
              <li key={log.id} className="rounded-md border border-slate-100 bg-slate-50 px-3 py-2">
                <p className="font-medium text-slate-800">{log.message}</p>
                <p className="mt-1 text-xs text-slate-500">{log.timestamp}</p>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="grid items-start gap-6 2xl:grid-cols-[minmax(22rem,0.95fr)_minmax(0,1.65fr)]">
        <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm 2xl:sticky 2xl:top-24">
          <h3 className="text-lg font-bold text-slate-900">{formTemplate.title}</h3>
          <p className="mt-1 text-sm text-slate-600">{formTemplate.description}</p>

          <form className="mt-4 space-y-4" onSubmit={onSubmitRecord}>
            {formTemplate.fields.map((field) => (
              <label key={field.name} className="grid gap-1 text-sm">
                <span className="font-semibold text-slate-800">
                  {field.label}
                  {field.required ? " *" : ""}
                </span>

                {field.type === "textarea" ? (
                  <textarea
                    className="min-h-28 rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none ring-teal-600 focus:ring-2"
                    value={formValues[field.name] ?? ""}
                    onChange={(event) => onFormFieldChange(field.name, event.target.value)}
                    placeholder={field.placeholder}
                  />
                ) : field.type === "select" ? (
                  <Select
                    value={formValues[field.name] ?? ""}
                    onChange={(event) => onFormFieldChange(field.name, event.target.value)}
                  >
                    <option value="">Sila pilih</option>
                    {(field.options ?? []).map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </Select>
                ) : (
                  <Input
                    type={field.type}
                    value={formValues[field.name] ?? ""}
                    onChange={(event) => onFormFieldChange(field.name, event.target.value)}
                    placeholder={field.placeholder}
                  />
                )}
              </label>
            ))}

            {errorMessage ? (
              <p className="rounded-md border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-800">
                {errorMessage}
              </p>
            ) : null}

            {successMessage ? (
              <p className="rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-800">
                {successMessage}
              </p>
            ) : null}

            <Button type="submit">{formTemplate.submitLabel}</Button>
          </form>
        </article>

        <article className="min-w-0 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_minmax(10rem,12rem)_minmax(12rem,14rem)_auto] md:items-end">
            <label className="grid min-w-0 gap-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
              Carian
              <Input
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Cari no. rujukan, perkara, unit..."
              />
            </label>
            <label className="grid min-w-0 gap-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
              Status
              <Select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)}>
                <option value="Semua">Semua</option>
                {statusOptions.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </Select>
            </label>
            <label className="grid min-w-0 gap-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
              Proses
              <Select value={processFilter} onChange={(event) => setProcessFilter(event.target.value)}>
                <option value="Semua">Semua</option>
                {processOptions.map((process) => (
                  <option key={process} value={process}>
                    {process}
                  </option>
                ))}
              </Select>
            </label>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSearchTerm("");
                setStatusFilter("Semua");
                setProcessFilter("Semua");
              }}
              className="w-full md:w-auto"
            >
              Kosongkan Penapis
            </Button>
          </div>

          <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
            {filteredRecords.length} daripada {records.length} rekod dipaparkan
          </p>

          <TableContainer className="mt-4 max-w-full">
            <Table className="min-w-[980px]">
              <TableHead>
                <TableRow className="border-b border-slate-200">
                  <TableHeaderCell>No. Rujukan</TableHeaderCell>
                  <TableHeaderCell>Proses</TableHeaderCell>
                  <TableHeaderCell>Perkara</TableHeaderCell>
                  <TableHeaderCell>Unit</TableHeaderCell>
                  <TableHeaderCell>Status</TableHeaderCell>
                  <TableHeaderCell>Prioriti</TableHeaderCell>
                  <TableHeaderCell>Tarikh Mula</TableHeaderCell>
                  <TableHeaderCell>Kemaskini</TableHeaderCell>
                  <TableHeaderCell>Tindakan</TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredRecords.length > 0 ? (
                  filteredRecords.map((record) => (
                    <TableRow key={record.id}>
                      <TableCell className="font-semibold text-slate-900">{record.refNo}</TableCell>
                      <TableCell className="max-w-[16rem]">{record.process}</TableCell>
                      <TableCell className="max-w-[22rem]">{record.perkara}</TableCell>
                      <TableCell>{record.unit}</TableCell>
                      <TableCell>
                        <div className="flex min-w-[12rem] flex-col gap-2">
                          <Badge tone={getStatusTone(record.status)}>{record.status}</Badge>
                          <Select
                            className="h-8 min-w-0 text-xs"
                            value={record.status}
                            onChange={(event) => updateStatus(record.id, event.target.value)}
                          >
                            {statusOptions.map((status) => (
                              <option key={`${record.id}-${status}`} value={status}>
                                {status}
                              </option>
                            ))}
                          </Select>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge tone={getPriorityTone(record.priority)}>{record.priority}</Badge>
                      </TableCell>
                      <TableCell>{record.startDate}</TableCell>
                      <TableCell>{record.updatedAt}</TableCell>
                      <TableCell>
                        <div className="flex min-w-[15rem] flex-wrap gap-1.5">
                          <Button variant="outline" size="sm" onClick={() => cycleUnit(record.id)}>
                            Tukar PIC
                          </Button>
                          <Button variant="secondary" size="sm" onClick={() => cyclePriority(record.id)}>
                            Prioriti
                          </Button>
                          <Button variant="danger" size="sm" onClick={() => deleteRecord(record.id)}>
                            Padam
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell className="py-8 text-center text-sm text-slate-500" colSpan={9}>
                      Tiada rekod untuk penapis semasa.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </article>
      </section>
    </div>
  );
}
