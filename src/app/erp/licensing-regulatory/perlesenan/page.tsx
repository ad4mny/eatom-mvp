import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import DataTable from "../_components/data-table";
import { parseRecordFilters } from "../_lib/filters";
import {
  filterRecords,
  getQuickProcessLinks,
  getRecordsBySubmodule,
  statusOptions,
} from "../_lib/records";

type PerlesenanPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function PerlesenanPage({ searchParams }: Readonly<PerlesenanPageProps>) {
  const params = await searchParams;
  const filters = parseRecordFilters(params);
  const records = filterRecords(getRecordsBySubmodule("perlesenan"), filters);
  const quickLinks = getQuickProcessLinks("perlesenan");

  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="flex flex-col gap-3 p-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-900">Sub-Module: Perlesenan</p>
            <p className="text-xs text-slate-600">Proses kerja dipaparkan sebagai tindakan jadual dan tab detail, bukan item menu.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link href="/erp/licensing-regulatory/perlesenan/new">
              <Button>Permohonan Lesen Baru</Button>
            </Link>
            {quickLinks.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex rounded-md border border-teal-300 bg-teal-50 px-3 py-2 text-xs font-semibold text-teal-800 hover:bg-teal-100"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      <DataTable
        title="Listing Permohonan Perlesenan"
        description="Standardized DataTable dengan server-side filtering untuk Status Permohonan dan Tarikh."
        filterPath="/erp/licensing-regulatory/perlesenan"
        records={records}
        emptyLabel="Tiada rekod ditemui untuk kriteria carian ini."
        statusOptions={statusOptions}
        currentFilters={{
          status: filters.status,
          from: filters.from,
          to: filters.to,
        }}
      />
    </div>
  );
}
