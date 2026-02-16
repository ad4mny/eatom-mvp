import DataTable from "../_components/data-table";
import { parseRecordFilters } from "../_lib/filters";
import { filterRecords, getRecordsBySubmodule, statusOptions } from "../_lib/records";

type PeperiksaanPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function PeperiksaanPage({ searchParams }: Readonly<PeperiksaanPageProps>) {
  const params = await searchParams;
  const filters = parseRecordFilters(params);
  const records = filterRecords(getRecordsBySubmodule("peperiksaan"), filters);

  return (
    <DataTable
      title="Listing Peperiksaan & Pensijilan"
      description="Rekod PPS/PUK/PR/CEP dengan status semakan, keputusan, dan audit latihan."
      filterPath="/erp/licensing-regulatory/peperiksaan"
      records={records}
      emptyLabel="Tiada rekod peperiksaan untuk filter ini."
      statusOptions={statusOptions}
      currentFilters={{
        status: filters.status,
        from: filters.from,
        to: filters.to,
      }}
    />
  );
}
