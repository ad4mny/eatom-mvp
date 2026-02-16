import { notFound } from "next/navigation";
import RecordDetailShell from "../../../_components/record-detail-shell";
import {
  getLicenseHolderRecordById,
  getLicenseHolderSubmoduleBySlug,
  type LicenseHolderSubmoduleSlug,
} from "../../../_lib/license-holder";

type LicenseHolderRecordLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ submodule: string; recordId: string }>;
};

export default async function LicenseHolderRecordLayout({
  children,
  params,
}: Readonly<LicenseHolderRecordLayoutProps>) {
  const { submodule, recordId } = await params;
  const selectedSubmodule = getLicenseHolderSubmoduleBySlug(submodule);

  if (!selectedSubmodule) {
    notFound();
  }

  const record = getLicenseHolderRecordById(
    selectedSubmodule.slug as LicenseHolderSubmoduleSlug,
    recordId,
  );

  if (!record) {
    notFound();
  }

  const baseHref = `/external/license-holder/${selectedSubmodule.slug}/${record.recordId}`;

  return (
    <RecordDetailShell
      userTypeTitle="Pemegang Lesen"
      submoduleTitle={selectedSubmodule.title}
      submoduleHref={`/external/license-holder/${selectedSubmodule.slug}`}
      baseHref={baseHref}
      record={record}
      tabs={record.processTabs}
    >
      {children}
    </RecordDetailShell>
  );
}
