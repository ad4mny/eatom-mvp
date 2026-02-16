import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  getPengurusanSumberManusiaWorkflowLanes,
  pengurusanSumberManusiaSubmodules,
} from "./data";

export default function PengurusanSumberManusiaOverviewPage() {
  const totalProses = pengurusanSumberManusiaSubmodules.reduce(
    (sum, submodule) => sum + submodule.processes.length,
    0,
  );
  const workflowTersuai = pengurusanSumberManusiaSubmodules.filter((submodule) => {
    const lanes = getPengurusanSumberManusiaWorkflowLanes(submodule);
    return lanes[0]?.actor !== "Aliran Kerja";
  }).length;
  const submoduleDenganBanyakProses = pengurusanSumberManusiaSubmodules.filter(
    (submodule) => submodule.processes.length >= 4,
  ).length;

  return (
    <div className="space-y-6">
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Jumlah Submodul
          </p>
          <p className="mt-2 text-3xl font-bold text-slate-900">
            {pengurusanSumberManusiaSubmodules.length}
          </p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Jumlah Proses
          </p>
          <p className="mt-2 text-3xl font-bold text-slate-900">{totalProses}</p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Workflow Tersuai
          </p>
          <p className="mt-2 text-3xl font-bold text-slate-900">{workflowTersuai}</p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Submodul Operasi
          </p>
          <p className="mt-2 text-3xl font-bold text-slate-900">{submoduleDenganBanyakProses}</p>
        </article>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Quick Process Launcher (Two-Click Access)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {pengurusanSumberManusiaSubmodules.map((submodule) => {
            const lanes = getPengurusanSumberManusiaWorkflowLanes(submodule);
            const quickLinks = submodule.processes.slice(0, 3).map((process) => ({
              label: process,
              href: `/erp/hr-management/${submodule.slug}?${new URLSearchParams({
                process,
              }).toString()}`,
            }));

            return (
              <div
                key={submodule.slug}
                className="rounded-lg border border-slate-200 bg-slate-50 p-3"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {submodule.title}
                    </p>
                    <p className="text-xs text-slate-600">{submodule.description}</p>
                    <p className="mt-1 text-xs text-slate-500">
                      {submodule.processes.length} proses, {lanes.length} workflow lane
                    </p>
                  </div>
                  <Link
                    href={`/erp/hr-management/${submodule.slug}`}
                    className="inline-flex rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100"
                  >
                    Buka Sub-Module
                  </Link>
                </div>

                <div className="mt-2 flex flex-wrap gap-2">
                  {quickLinks.map((link) => (
                    <Link
                      key={`${submodule.slug}-${link.label}`}
                      href={link.href}
                      className="inline-flex rounded-md border border-teal-300 bg-teal-50 px-3 py-1.5 text-xs font-semibold text-teal-800 hover:bg-teal-100"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
}
