import InternalModulePlaceholderView from "@/components/shared/internal-module-placeholder-view";

export default function TerimaAduanPage() {
  return (
    <InternalModulePlaceholderView
      title="Terima Aduan"
      description="Penerimaan aduan baharu dan agihan tindakan kepada pegawai."
      backHref="/modules/pentadbiran-sistem"
      backLabel="Kembali Ke Pentadbiran Sistem"
      ctaHref="/modules/kawalselia/aduan"
      ctaLabel="Buka Aliran Aduan Kawalselia"
      notes={[
        "Pendaftaran aduan baharu melalui borang dalaman.",
        "Agihan pegawai bertugas/bertindak balas.",
        "Pemantauan status aduan sehingga selesai.",
      ]}
    />
  );
}
