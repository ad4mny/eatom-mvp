import ModulePlaceholder from "@/components/erp/module-placeholder";

export default function HrManagementPage() {
  return (
    <ModulePlaceholder
      title="Sistem Pengurusan Sumber Manusia"
      subtitle="Perancangan kapasiti, kompetensi pegawai, dan pengurusan prestasi berasaskan KPI operasi."
      highlights={[
        "Sub-modul: Perjawatan, Kompetensi, Penilaian Prestasi, Latihan.",
        "Data pekerja diselaraskan dengan modul perlesenan untuk profil pegawai penilai.",
        "Integrasi role matrix untuk kelulusan proses kerja kritikal.",
      ]}
    />
  );
}
