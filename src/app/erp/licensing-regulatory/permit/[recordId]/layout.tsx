import { notFound } from "next/navigation";
import RecordDetailShell from "../../_components/record-detail-shell";
import { getRecordById, getSubmoduleTitle } from "../../_lib/records";

type PermitRecordLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ recordId: string }>;
};

export default async function PermitRecordLayout({
  children,
  params,
}: Readonly<PermitRecordLayoutProps>) {
  const { recordId } = await params;
  const record = getRecordById("permit", recordId);

  if (!record) {
    notFound();
  }

  return (
    <RecordDetailShell
      record={record}
      submoduleTitle={getSubmoduleTitle("permit")}
      tabs={record.processTabs}
    >
      {children}
    </RecordDetailShell>
  );
}
