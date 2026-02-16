import ModulePlaceholder from "@/components/erp/module-placeholder";

export default function DocumentManagementPage() {
  return (
    <ModulePlaceholder
      title="Sistem Pengurusan Dokumen"
      subtitle="Pengurusan dokumen rasmi, versi, serta audit trail bagi setiap permohonan dan keputusan operasi."
      highlights={[
        "Sub-modul: Repositori Dokumen, Templat Surat, Audit Trail, Carian Pintar.",
        "Integrasi dokumen wajib mengikut jenis proses kerja.",
        "Sokongan jejak perubahan untuk pematuhan audit dalaman.",
      ]}
    />
  );
}
