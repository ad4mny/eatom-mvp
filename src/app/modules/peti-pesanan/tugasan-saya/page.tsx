import InternalModulePlaceholderView from "@/components/shared/internal-module-placeholder-view";

export default function TugasanSayaPage() {
  return (
    <InternalModulePlaceholderView
      title="Tugasan Saya"
      description="Senarai tugasan peribadi untuk tindakan harian pegawai."
      backHref="/dashboard/internal"
      backLabel="Kembali Ke Dashboard eATOM"
      ctaHref="/modules/pentadbir-dalaman"
      ctaLabel="Buka Tugasan Sedia Ada"
      notes={[
        "Paparan tugasan aktif, selesai, dan perlu tindakan semula.",
        "Jejak tarikh akhir (SLA) dan keutamaan tugasan.",
        "Pautan terus ke proses kerja modul berkaitan.",
      ]}
    />
  );
}
