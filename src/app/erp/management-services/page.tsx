import ModulePlaceholder from "@/components/erp/module-placeholder";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { pagePlacement } from "../licensing-regulatory/_lib/page-placement";

export default function ManagementServicesPage() {
  return (
    <div className="space-y-4">
      <ModulePlaceholder
        title="Sistem Khidmat Pengurusan"
        subtitle="Khidmat pentadbiran merentas modul, termasuk tetapan akaun, pemantauan SLA, dan laporan organisasi."
        highlights={[
          "Sub-modul: Pentadbiran Sistem, Sokongan Pengguna, Laporan Tahunan.",
          "Pusat konfigurasi untuk rule kelulusan dan notifikasi sistem.",
          "Papan pemantauan SLA untuk khidmat dalaman.",
        ]}
      />

      <Card>
        <CardHeader>
          <CardTitle>Page Placement (Modal vs Full Page)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {pagePlacement.map((item) => (
            <div key={item.item} className="flex flex-col gap-1 rounded-md border border-slate-200 bg-slate-50 p-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-900">{item.item}</p>
                <p className="text-xs text-slate-600">{item.reason}</p>
              </div>
              <Badge tone={item.placement === "modal" ? "default" : "muted"}>
                {item.placement === "modal" ? "Modal" : "Full Page"}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
