import { notFound } from "next/navigation";
import RecordDetailShell from "../../_components/record-detail-shell";
import { getRecordById, getSubmoduleTitle } from "../../_lib/records";

type PerlesenanRecordLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ recordId: string }>;
};

export default async function PerlesenanRecordLayout({
  children,
  params,
}: Readonly<PerlesenanRecordLayoutProps>) {
  const { recordId } = await params;
  const record = getRecordById("perlesenan", recordId);

  if (!record) {
    notFound();
  }

  return (
    <RecordDetailShell
      record={record}
      submoduleTitle={getSubmoduleTitle("perlesenan")}
      tabs={record.processTabs}
    >
      {children}
    </RecordDetailShell>
  );
}
