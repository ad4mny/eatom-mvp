import { unifiedSchema, type LicensingStatus } from "./schema";

export type SubModuleSlug = "perlesenan" | "kawalselia" | "permit" | "peperiksaan";

export type StatusKey = LicensingStatus["status"];

export const statusLabelMap: Record<StatusKey, string> = {
  new: "Baharu",
  review: "Dalam Semakan",
  query: "Perlu Tindakan",
  approved: "Diluluskan",
  rejected: "Ditolak",
};

export const statusOptions: Array<{ value: StatusKey; label: string }> = [
  { value: "new", label: statusLabelMap.new },
  { value: "review", label: statusLabelMap.review },
  { value: "query", label: statusLabelMap.query },
  { value: "approved", label: statusLabelMap.approved },
  { value: "rejected", label: statusLabelMap.rejected },
];

export type ProcessTab = {
  slug: string;
  label: string;
};

export type WorkflowRecord = {
  recordId: string;
  workerId: string;
  workerName: string;
  employer: string;
  serviceType: string;
  status: StatusKey;
  applicationDate: string;
  updatedAt: string;
  subModule: SubModuleSlug;
  processTabs: ProcessTab[];
};

const tabMap: Record<SubModuleSlug, ProcessTab[]> = {
  perlesenan: [
    { slug: "", label: "Ringkasan" },
    { slug: "invois-fee", label: "Invois Fee" },
    { slug: "senarai-lulus", label: "Senarai Lulus" },
    { slug: "semakan-dokumen", label: "Semakan Dokumen" },
    { slug: "audit-trail", label: "Audit Trail" },
  ],
  kawalselia: [
    { slug: "", label: "Ringkasan" },
    { slug: "tindakan", label: "Tindakan" },
    { slug: "dokumen", label: "Dokumen" },
  ],
  permit: [
    { slug: "", label: "Ringkasan" },
    { slug: "invois", label: "Invois" },
    { slug: "keputusan", label: "Keputusan" },
  ],
  peperiksaan: [
    { slug: "", label: "Ringkasan" },
    { slug: "jadual", label: "Jadual" },
    { slug: "keputusan", label: "Keputusan" },
  ],
};

const subModuleTitleMap: Record<SubModuleSlug, string> = {
  perlesenan: "Perlesenan",
  kawalselia: "Kawalselia",
  permit: "Permit",
  peperiksaan: "Peperiksaan & Pensijilan",
};

export function getSubmoduleTitle(subModule: SubModuleSlug) {
  return subModuleTitleMap[subModule];
}

function toRecord(item: LicensingStatus): WorkflowRecord {
  const worker = unifiedSchema.workers.find((entry) => entry.workerId === item.workerId);

  return {
    recordId: item.referenceNo,
    workerId: item.workerId,
    workerName: worker?.fullName ?? "Tidak Diketahui",
    employer: worker?.employer ?? "Tidak Diketahui",
    serviceType: item.serviceType,
    status: item.status,
    applicationDate: item.submittedAt,
    updatedAt: item.updatedAt,
    subModule: item.subModule,
    processTabs: tabMap[item.subModule],
  };
}

const records = unifiedSchema.licensingStatuses.map(toRecord);

export function getRecordsBySubmodule(subModule: SubModuleSlug) {
  return records.filter((record) => record.subModule === subModule);
}

export function getRecordById(subModule: SubModuleSlug, recordId: string) {
  return records.find((record) => record.subModule === subModule && record.recordId === recordId);
}

export type RecordFilters = {
  status?: StatusKey;
  from?: string;
  to?: string;
};

export function filterRecords(data: WorkflowRecord[], filters: RecordFilters) {
  return data.filter((record) => {
    if (filters.status && record.status !== filters.status) {
      return false;
    }

    if (filters.from && record.applicationDate < filters.from) {
      return false;
    }

    if (filters.to && record.applicationDate > filters.to) {
      return false;
    }

    return true;
  });
}

export function getQuickProcessLinks(subModule: SubModuleSlug) {
  return getRecordsBySubmodule(subModule)
    .slice(0, 2)
    .flatMap((record) =>
      record.processTabs
        .filter((tab) => tab.slug)
        .slice(0, 2)
        .map((tab) => ({
          label: `${tab.label} (${record.recordId})`,
          href: `/erp/licensing-regulatory/${subModule}/${record.recordId}/${tab.slug}`,
        })),
    );
}
