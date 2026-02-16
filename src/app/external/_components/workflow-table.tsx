import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { formatDateLabel } from "@/lib/utils";
import {
  workflowStatusLabelMap,
  type ExternalWorkflowRecord,
  type WorkflowStatus,
} from "../_lib/common";

function statusTone(status: WorkflowStatus): "success" | "warning" | "danger" | "muted" | "default" {
  if (status === "approved") {
    return "success";
  }

  if (status === "query") {
    return "warning";
  }

  if (status === "rejected") {
    return "danger";
  }

  if (status === "new") {
    return "muted";
  }

  return "default";
}

type WorkflowTableProps = {
  title: string;
  description: string;
  filterPath: string;
  records: ExternalWorkflowRecord[];
  statusOptions: Array<{ value: WorkflowStatus; label: string }>;
  currentFilters: {
    status?: string;
    from?: string;
    to?: string;
  };
  emptyLabel: string;
};

export default function WorkflowTable({
  title,
  description,
  filterPath,
  records,
  statusOptions,
  currentFilters,
  emptyLabel,
}: Readonly<WorkflowTableProps>) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form className="grid gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3 md:grid-cols-[1.2fr_1fr_1fr_auto_auto]" method="get" action={filterPath}>
          <label className="space-y-1 text-xs font-semibold text-slate-700">
            Status Permohonan
            <Select name="status" defaultValue={currentFilters.status ?? ""}>
              <option value="">Semua Status</option>
              {statusOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
          </label>

          <label className="space-y-1 text-xs font-semibold text-slate-700">
            Tarikh Dari
            <Input type="date" name="from" defaultValue={currentFilters.from ?? ""} />
          </label>

          <label className="space-y-1 text-xs font-semibold text-slate-700">
            Tarikh Hingga
            <Input type="date" name="to" defaultValue={currentFilters.to ?? ""} />
          </label>

          <button
            type="submit"
            className="mt-auto inline-flex items-center justify-center rounded-md bg-indigo-700 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-800"
          >
            Tapis
          </button>

          <Link
            href={filterPath}
            className="mt-auto inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Reset
          </Link>
        </form>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeaderCell>No. Rujukan</TableHeaderCell>
                <TableHeaderCell>Pemohon</TableHeaderCell>
                <TableHeaderCell>Perkhidmatan</TableHeaderCell>
                <TableHeaderCell>Status</TableHeaderCell>
                <TableHeaderCell>Tarikh</TableHeaderCell>
                <TableHeaderCell>Tindakan</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {records.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="py-8 text-center text-sm text-slate-500">
                    {emptyLabel}
                  </TableCell>
                </TableRow>
              ) : (
                records.map((record) => {
                  const firstProcess = record.processTabs.find((tab) => tab.slug);
                  const detailHref = `${filterPath}/${record.recordId}`;

                  return (
                    <TableRow key={record.recordId}>
                      <TableCell className="font-semibold text-slate-900">{record.recordId}</TableCell>
                      <TableCell>
                        <p className="font-semibold text-slate-900">{record.applicantName}</p>
                        <p className="text-xs text-slate-500">{record.organization}</p>
                      </TableCell>
                      <TableCell>{record.serviceType}</TableCell>
                      <TableCell>
                        <Badge tone={statusTone(record.status)}>{workflowStatusLabelMap[record.status]}</Badge>
                      </TableCell>
                      <TableCell>
                        <p className="text-sm text-slate-700">{formatDateLabel(record.submittedAt)}</p>
                        <p className="text-xs text-slate-500">Kemaskini: {formatDateLabel(record.updatedAt)}</p>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-2">
                          <Link
                            href={detailHref}
                            className="inline-flex rounded-md border border-slate-300 px-2 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                          >
                            Detail
                          </Link>
                          {firstProcess ? (
                            <Link
                              href={`${detailHref}/${firstProcess.slug}`}
                              className="inline-flex rounded-md border border-indigo-300 bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-800 hover:bg-indigo-100"
                            >
                              {firstProcess.label}
                            </Link>
                          ) : null}
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}
