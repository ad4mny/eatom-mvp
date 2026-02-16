import Link from "next/link";
import ModuleHeader from "@/components/erp/module-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ExternalDashboardPage() {
  return (
    <div className="space-y-4">
      <ModuleHeader
        title="Dashboard External Users"
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

      <Card>
        <CardHeader>
          <CardTitle>Pilih Portal</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3 md:grid-cols-2">
          <Link
            href="/external/license-holder"
            className="rounded-lg border border-slate-200 bg-slate-50 p-4 hover:border-indigo-300 hover:bg-indigo-50"
          >
            <div className="flex items-start justify-between">
              <p className="text-sm font-semibold text-slate-900">Portal Pemegang Lesen</p>
              <Badge>PL</Badge>
            </div>
            <p className="mt-1 text-xs text-slate-600">
              Permohonan lesen, maklumbalas, pemantauan radiologi dan akaun pengguna.
            </p>
          </Link>

          <Link
            href="/external/non-license-holder"
            className="rounded-lg border border-slate-200 bg-slate-50 p-4 hover:border-indigo-300 hover:bg-indigo-50"
          >
            <div className="flex items-start justify-between">
              <p className="text-sm font-semibold text-slate-900">Portal Bukan Pemegang Lesen</p>
              <Badge tone="muted">Awam</Badge>
            </div>
            <p className="mt-1 text-xs text-slate-600">
              Perkhidmatan awam seperti pelupusan, outreach, penceramah dan lawatan tapak.
            </p>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
