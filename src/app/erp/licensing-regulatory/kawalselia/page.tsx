import DataTable from "../_components/data-table";
import { parseRecordFilters } from "../_lib/filters";
import { filterRecords, getRecordsBySubmodule, statusOptions } from "../_lib/records";

type KawalseliaPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function KawalseliaPage({ searchParams }: Readonly<KawalseliaPageProps>) {
  const params = await searchParams;
  const filters = parseRecordFilters(params);
  const records = filterRecords(getRecordsBySubmodule("kawalselia"), filters);

  return (
    <DataTable
      title="Listing Kawalselia"
      description="Semakan kebenaran, notis, aduan dan pemeriksaan berdasarkan status permohonan."
      filterPath="/erp/licensing-regulatory/kawalselia"
      records={records}
      emptyLabel="Tiada rekod kawalselia untuk filter semasa."
      statusOptions={statusOptions}
      currentFilters={{
        status: filters.status,
        from: filters.from,
        to: filters.to,
      }}
    />
  );
}
