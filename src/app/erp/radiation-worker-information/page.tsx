import ModulePlaceholder from "@/components/erp/module-placeholder";

export default function RadiationWorkerInformationPage() {
  return (
    <ModulePlaceholder
      title="Maklumat Pekerja Sinaran"
      subtitle="Profil menyeluruh pekerja sinaran termasuk kompetensi, peperiksaan, serta jejak penglibatan operasi."
      highlights={[
        "Sub-modul: Profil Pekerja, Pendaftaran Peperiksaan, Sejarah Pensijilan.",
        "Pautan dua hala ke data dos dan status perlesenan.",
        "Rule engine untuk validasi kelayakan sebelum kelulusan lesen.",
      ]}
    />
  );
}
