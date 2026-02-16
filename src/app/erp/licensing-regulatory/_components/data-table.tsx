import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
import { statusLabelMap, type StatusKey, type WorkflowRecord } from "../_lib/records";

type DataTableProps = {
  title: string;
  description: string;
  filterPath: string;
  records: WorkflowRecord[];
  emptyLabel: string;
  statusOptions: Array<{ value: StatusKey; label: string }>;
  currentFilters: {
    status?: string;
    from?: string;
    to?: string;
  };
};

function statusTone(status: StatusKey): "success" | "warning" | "danger" | "muted" | "default" {
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

export default function DataTable({
  title,
  description,
  filterPath,
  records,
  emptyLabel,
  statusOptions,
  currentFilters,
}: Readonly<DataTableProps>) {
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

          <Button type="submit" className="mt-auto">
            Tapis
          </Button>

          <Link href={filterPath} className="mt-auto inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
            Reset
          </Link>
        </form>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeaderCell>No. Rujukan</TableHeaderCell>
                <TableHeaderCell>Pemohon / Pekerja</TableHeaderCell>
                <TableHeaderCell>Jenis Perkhidmatan</TableHeaderCell>
                <TableHeaderCell>Status Permohonan</TableHeaderCell>
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
                  const detailHref = `/erp/licensing-regulatory/${record.subModule}/${record.recordId}`;

                  return (
                    <TableRow key={record.recordId}>
                      <TableCell className="font-semibold text-slate-900">{record.recordId}</TableCell>
                      <TableCell>
                        <p className="font-semibold text-slate-900">{record.workerName}</p>
                        <p className="text-xs text-slate-500">{record.workerId} · {record.employer}</p>
                      </TableCell>
                      <TableCell>{record.serviceType}</TableCell>
                      <TableCell>
                        <Badge tone={statusTone(record.status)}>{statusLabelMap[record.status]}</Badge>
                      </TableCell>
                      <TableCell>
                        <p className="text-sm text-slate-700">{formatDateLabel(record.applicationDate)}</p>
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
                              className="inline-flex rounded-md border border-teal-300 bg-teal-50 px-2 py-1 text-xs font-semibold text-teal-800 hover:bg-teal-100"
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
