import { type RecordFilters, type WorkflowStatus } from "./common";

const validStatuses: WorkflowStatus[] = ["new", "review", "query", "approved", "rejected"];

function pickFirst(value: string | string[] | undefined) {
  if (!value) {
    return undefined;
  }

  return Array.isArray(value) ? value[0] : value;
}

export function parseRecordFilters(
  searchParams: Record<string, string | string[] | undefined>,
): RecordFilters {
  const status = pickFirst(searchParams.status);
  const from = pickFirst(searchParams.from);
  const to = pickFirst(searchParams.to);

  return {
    status: status && validStatuses.includes(status as WorkflowStatus) ? (status as WorkflowStatus) : undefined,
    from: from || undefined,
    to: to || undefined,
  };
}
