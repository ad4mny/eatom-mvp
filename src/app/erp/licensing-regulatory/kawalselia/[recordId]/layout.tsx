import { notFound } from "next/navigation";
import RecordDetailShell from "../../_components/record-detail-shell";
import { getRecordById, getSubmoduleTitle } from "../../_lib/records";

type KawalseliaRecordLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ recordId: string }>;
};

export default async function KawalseliaRecordLayout({
  children,
  params,
}: Readonly<KawalseliaRecordLayoutProps>) {
  const { recordId } = await params;
  const record = getRecordById("kawalselia", recordId);

  if (!record) {
    notFound();
  }

  return (
    <RecordDetailShell
      record={record}
      submoduleTitle={getSubmoduleTitle("kawalselia")}
      tabs={record.processTabs}
    >
      {children}
    </RecordDetailShell>
  );
}
