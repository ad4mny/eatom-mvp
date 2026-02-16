import { type RecordFilters, type StatusKey } from "./records";

const validStatuses: StatusKey[] = ["new", "review", "query", "approved", "rejected"];

function getValue(value: string | string[] | undefined) {
  if (!value) {
    return undefined;
  }

  return Array.isArray(value) ? value[0] : value;
}

export function parseRecordFilters(
  searchParams: Record<string, string | string[] | undefined>,
): RecordFilters {
  const status = getValue(searchParams.status);
  const from = getValue(searchParams.from);
  const to = getValue(searchParams.to);

  return {
    status: status && validStatuses.includes(status as StatusKey) ? (status as StatusKey) : undefined,
    from: from || undefined,
    to: to || undefined,
  };
}
