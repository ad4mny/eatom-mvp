import { notFound } from "next/navigation";
import RecordDetailShell from "../../_components/record-detail-shell";
import { getRecordById, getSubmoduleTitle } from "../../_lib/records";

type PeperiksaanRecordLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ recordId: string }>;
};

export default async function PeperiksaanRecordLayout({
  children,
  params,
}: Readonly<PeperiksaanRecordLayoutProps>) {
  const { recordId } = await params;
  const record = getRecordById("peperiksaan", recordId);

  if (!record) {
    notFound();
  }

  return (
    <RecordDetailShell
      record={record}
      submoduleTitle={getSubmoduleTitle("peperiksaan")}
      tabs={record.processTabs}
    >
      {children}
    </RecordDetailShell>
  );
}
