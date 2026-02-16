export type WorkflowStatus = "new" | "review" | "query" | "approved" | "rejected";

export const workflowStatusLabelMap: Record<WorkflowStatus, string> = {
  new: "Baharu",
  review: "Dalam Semakan",
  query: "Perlu Tindakan",
  approved: "Diluluskan",
  rejected: "Ditolak",
};

export const workflowStatusOptions: Array<{ value: WorkflowStatus; label: string }> = [
  { value: "new", label: workflowStatusLabelMap.new },
  { value: "review", label: workflowStatusLabelMap.review },
  { value: "query", label: workflowStatusLabelMap.query },
  { value: "approved", label: workflowStatusLabelMap.approved },
  { value: "rejected", label: workflowStatusLabelMap.rejected },
];

export type ProcessTab = {
  slug: string;
  label: string;
};

export const defaultProcessTabs: ProcessTab[] = [
  { slug: "", label: "Ringkasan" },
  { slug: "semakan", label: "Semakan" },
  { slug: "dokumen", label: "Dokumen" },
  { slug: "status", label: "Status" },
];

export type RecordFilters = {
  status?: WorkflowStatus;
  from?: string;
  to?: string;
};

export type ExternalWorkflowRecord = {
  recordId: string;
  applicantName: string;
  organization: string;
  serviceType: string;
  status: WorkflowStatus;
  submittedAt: string;
  updatedAt: string;
  processTabs: ProcessTab[];
};

export function filterRecords(records: ExternalWorkflowRecord[], filters: RecordFilters) {
  return records.filter((record) => {
    if (filters.status && record.status !== filters.status) {
      return false;
    }

    if (filters.from && record.submittedAt < filters.from) {
      return false;
    }

    if (filters.to && record.submittedAt > filters.to) {
      return false;
    }

    return true;
  });
}
