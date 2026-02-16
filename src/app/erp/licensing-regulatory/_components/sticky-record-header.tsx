import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { formatDateLabel } from "@/lib/utils";
import { statusLabelMap, type WorkflowRecord } from "../_lib/records";

type StickyRecordHeaderProps = {
  record: WorkflowRecord;
  submoduleTitle: string;
};

export default function StickyRecordHeader({
  record,
  submoduleTitle,
}: Readonly<StickyRecordHeaderProps>) {
  return (
    <div className="sticky top-4 z-20">
      <Card className="border-teal-100 shadow-lg">
        <CardContent className="space-y-4 px-5 py-4">
          <Breadcrumb
            items={[
              { label: "Sistem Perlesenan dan Kawalselia", href: "/erp/licensing-regulatory" },
              { label: submoduleTitle, href: `/erp/licensing-regulatory/${record.subModule}` },
              { label: record.recordId },
            ]}
          />

          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-xl font-bold text-slate-900">{record.recordId}</h1>
                <Badge>{statusLabelMap[record.status]}</Badge>
              </div>
              <p className="mt-1 text-sm text-slate-700">{record.serviceType} · {record.workerName}</p>
              <p className="mt-0.5 text-xs text-slate-500">
                Tarikh Permohonan: {formatDateLabel(record.applicationDate)}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button size="sm">Approve</Button>
              <Button size="sm" variant="danger">
                Reject
              </Button>
              <Button size="sm" variant="outline">
                Query
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
