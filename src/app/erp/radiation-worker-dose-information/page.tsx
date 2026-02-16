import ModulePlaceholder from "@/components/erp/module-placeholder";

export default function RadiationWorkerDoseInformationPage() {
  return (
    <ModulePlaceholder
      title="Maklumat Dos Pekerja Sinaran"
      subtitle="Pelaporan dos berkala, penilaian ambang pendedahan, dan pengawasan pematuhan individu pekerja sinaran."
      highlights={[
        "Sub-modul: Laporan Dos, Semakan Ambang, Amaran Pematuhan.",
        "Data dos dihubungkan kepada rekod lesen dan tindakan kawalselia.",
        "Paparan trend suku tahunan dan jejak verifikasi pegawai.",
      ]}
    />
  );
}
