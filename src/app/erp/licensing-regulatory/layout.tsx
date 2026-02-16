import ModuleHeader from "@/components/erp/module-header";
import SecondaryTabs from "./_components/secondary-tabs";

export default function LicensingRegulatoryLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="space-y-4">
      <ModuleHeader
        title="Sistem Perlesenan dan Kawalselia"
        subtitle="Struktur ERP berlapis: Main Module di sidebar, Sub-Module di secondary navigation, dan Proses Kerja di dalam tindakan jadual/detail tab."
      />
      <SecondaryTabs />
      {children}
    </div>
  );
}
