import DataTable from "../_components/data-table";
import { parseRecordFilters } from "../_lib/filters";
import { filterRecords, getRecordsBySubmodule, statusOptions } from "../_lib/records";

type PermitPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function PermitPage({ searchParams }: Readonly<PermitPageProps>) {
  const params = await searchParams;
  const filters = parseRecordFilters(params);
  const records = filterRecords(getRecordsBySubmodule("permit"), filters);

  return (
    <DataTable
      title="Listing Permit"
      description="Integrasi proses permit import/eksport/pengangkutan dengan tindakan pantas di peringkat rekod."
      filterPath="/erp/licensing-regulatory/permit"
      records={records}
      emptyLabel="Tiada rekod permit ditemui."
      statusOptions={statusOptions}
      currentFilters={{
        status: filters.status,
        from: filters.from,
        to: filters.to,
      }}
    />
  );
}
