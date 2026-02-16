import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { formatDateLabel } from "@/lib/utils";
import { workflowStatusLabelMap, type ExternalWorkflowRecord } from "../_lib/common";

type StickyRecordHeaderProps = {
  userTypeTitle: string;
  submoduleTitle: string;
  submoduleHref: string;
  record: ExternalWorkflowRecord;
};

export default function StickyRecordHeader({
  userTypeTitle,
  submoduleTitle,
  submoduleHref,
  record,
}: Readonly<StickyRecordHeaderProps>) {
  return (
    <div className="sticky top-4 z-20">
      <Card className="border-indigo-100 shadow-lg">
        <CardContent className="space-y-4 px-5 py-4">
          <Breadcrumb
            items={[
              { label: "Portal External", href: "/external/dashboard" },
              { label: userTypeTitle },
              { label: submoduleTitle, href: submoduleHref },
              { label: record.recordId },
            ]}
          />

          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-xl font-bold text-slate-900">{record.recordId}</h1>
                <Badge>{workflowStatusLabelMap[record.status]}</Badge>
              </div>
              <p className="mt-1 text-sm text-slate-700">{record.serviceType} · {record.applicantName}</p>
              <p className="mt-0.5 text-xs text-slate-500">
                Tarikh Permohonan: {formatDateLabel(record.submittedAt)}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <button className="rounded-md bg-emerald-700 px-3 py-1.5 text-xs font-semibold text-white hover:bg-emerald-800">
                Hantar Dokumen
              </button>
              <button className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50">
                Kemaskini Permohonan
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
