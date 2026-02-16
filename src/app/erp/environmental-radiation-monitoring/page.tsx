import ModulePlaceholder from "@/components/erp/module-placeholder";

export default function EnvironmentalRadiationMonitoringPage() {
  return (
    <ModulePlaceholder
      title="Sistem Pemantauan Radiasi Persekitaran"
      subtitle="Pemantauan data persekitaran, amaran trend, dan analitik pematuhan had radiasi kebangsaan."
      highlights={[
        "Sub-modul: Stesen Pemantauan, Analitik Trend, Insiden, Laporan Pematuhan.",
        "Sink data automatik untuk dashboard pemantauan masa nyata.",
        "Cross-link ke rekod tindakan kawalselia apabila ambang melebihi had.",
      ]}
    />
  );
}
