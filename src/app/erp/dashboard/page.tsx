import Link from "next/link";
import ModuleHeader from "@/components/erp/module-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mainModules } from "@/config/erp-main-modules";

export default function DashboardPage() {
  return (
    <div className="space-y-4">
      <ModuleHeader
        title="Dashboard eATOM"
        subtitle="Pusat kawalan operasi untuk semua modul teras eATOM dengan aliran kerja enterprise dan metrik pematuhan."
      />

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Permohonan Aktif</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-slate-900">148</p>
            <p className="mt-1 text-sm text-slate-600">42 dalam semakan hari ini</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Permohonan Query</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-amber-700">23</p>
            <p className="mt-1 text-sm text-slate-600">Perlu tindakan pemohon</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Risiko Pematuhan</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-rose-700">4</p>
            <p className="mt-1 text-sm text-slate-600">Kes dos melepasi ambang semakan</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Modul Utama</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3 md:grid-cols-2">
          {mainModules.map((module) => (
            <Link
              key={module.id}
              href={module.href}
              className="rounded-lg border border-slate-200 bg-slate-50 p-4 hover:border-teal-300 hover:bg-teal-50"
            >
              <div className="flex items-start justify-between gap-2">
                <p className="text-sm font-semibold text-slate-900">{module.title}</p>
                {module.id === "licensing-regulatory" ? <Badge>Core</Badge> : <Badge tone="muted">Module</Badge>}
              </div>
              <p className="mt-1 text-xs text-slate-600">{module.description}</p>
            </Link>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
