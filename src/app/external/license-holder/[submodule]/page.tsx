import { notFound } from "next/navigation";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import WorkflowTable from "../../_components/workflow-table";
import { filterRecords, workflowStatusOptions } from "../../_lib/common";
import { parseRecordFilters } from "../../_lib/filters";
import {
  getLicenseHolderQuickProcessLinks,
  getLicenseHolderRecordsBySubmodule,
  getLicenseHolderSubmoduleBySlug,
  type LicenseHolderSubmoduleSlug,
} from "../../_lib/license-holder";

type LicenseHolderSubmodulePageProps = {
  params: Promise<{ submodule: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function LicenseHolderSubmodulePage({
  params,
  searchParams,
}: Readonly<LicenseHolderSubmodulePageProps>) {
  const { submodule } = await params;
  const selectedSubmodule = getLicenseHolderSubmoduleBySlug(submodule);

  if (!selectedSubmodule) {
    notFound();
  }

  const submoduleSlug = selectedSubmodule.slug as LicenseHolderSubmoduleSlug;
  const filters = parseRecordFilters(await searchParams);
  const records = filterRecords(getLicenseHolderRecordsBySubmodule(submoduleSlug), filters);
  const filterPath = `/external/license-holder/${submoduleSlug}`;
  const quickLinks = getLicenseHolderQuickProcessLinks(submoduleSlug);

  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="flex flex-col gap-3 p-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-900">Sub-Module: {selectedSubmodule.title}</p>
            <p className="text-xs text-slate-600">Proses kerja tersedia sebagai action list dan detail tabs.</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {quickLinks.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex rounded-md border border-indigo-300 bg-indigo-50 px-3 py-2 text-xs font-semibold text-indigo-800 hover:bg-indigo-100"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      <WorkflowTable
        title={`Listing ${selectedSubmodule.title}`}
        description={selectedSubmodule.description}
        filterPath={filterPath}
        records={records}
        statusOptions={workflowStatusOptions}
        currentFilters={{
          status: filters.status,
          from: filters.from,
          to: filters.to,
        }}
        emptyLabel="Tiada rekod ditemui untuk kriteria ini."
      />
    </div>
  );
}
