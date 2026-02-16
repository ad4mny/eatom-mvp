import ModuleHeader from "@/components/erp/module-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ExternalDashboardPage() {
  return (
    <div className="space-y-4">
      <ModuleHeader
        title="Dashboard"
        subtitle="Struktur baharu dari ground-up untuk dua kategori pengguna luar dengan standard navigasi enterprise yang seragam."
      />

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Pengguna Aktif</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-slate-900">1,284</p>
            <p className="mt-1 text-sm text-slate-600">Sesi aktif 24 jam terakhir</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Permohonan Diproses</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-indigo-700">462</p>
            <p className="mt-1 text-sm text-slate-600">Semua saluran external</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Perlu Tindakan</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-amber-700">39</p>
            <p className="mt-1 text-sm text-slate-600">Permohonan berstatus query</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
