import ModuleHeader from "@/components/erp/module-header";

export default function EnvironmentalRadiationMonitoringLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="space-y-4">
      <ModuleHeader
        title="Sistem Pemantauan Radiasi Persekitaran"
        subtitle="Pemantauan data radiasi persekitaran, insiden, dan laporan berkala mengikut proses kerja modul."
      />
      {children}
    </div>
  );
}
