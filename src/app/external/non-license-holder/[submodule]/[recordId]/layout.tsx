import { notFound } from "next/navigation";
import RecordDetailShell from "../../../_components/record-detail-shell";
import {
  getNonLicenseRecordById,
  getNonLicenseSubmoduleBySlug,
  type NonLicenseSubmoduleSlug,
} from "../../../_lib/non-license-holder";

type NonLicenseRecordLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ submodule: string; recordId: string }>;
};

export default async function NonLicenseRecordLayout({
  children,
  params,
}: Readonly<NonLicenseRecordLayoutProps>) {
  const { submodule, recordId } = await params;
  const selectedSubmodule = getNonLicenseSubmoduleBySlug(submodule);

  if (!selectedSubmodule) {
    notFound();
  }

  const record = getNonLicenseRecordById(
    selectedSubmodule.slug as NonLicenseSubmoduleSlug,
    recordId,
  );

  if (!record) {
    notFound();
  }

  const baseHref = `/external/non-license-holder/${selectedSubmodule.slug}/${record.recordId}`;

  return (
    <RecordDetailShell
      userTypeTitle="Bukan Pemegang Lesen"
      submoduleTitle={selectedSubmodule.title}
      submoduleHref={`/external/non-license-holder/${selectedSubmodule.slug}`}
      baseHref={baseHref}
      record={record}
      tabs={record.processTabs}
    >
      {children}
    </RecordDetailShell>
  );
}
