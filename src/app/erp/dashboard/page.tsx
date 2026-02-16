import ErpAnalyticsGrid from "@/components/dashboard/erp-analytics-grid";
import ModuleHeader from "@/components/erp/module-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

      <ErpAnalyticsGrid />
    </div>
  );
}
