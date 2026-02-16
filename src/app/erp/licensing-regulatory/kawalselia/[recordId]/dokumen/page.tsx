import ProcessPanel from "../../../_components/process-panel";

export default function KawalseliaDokumenPage() {
  return (
    <ProcessPanel
      title="Dokumen Kawalselia"
      description="Dokumen bukti pemeriksaan, notis dan surat tindakan susulan."
      checkpoints={[
        "Muat naik laporan pemeriksaan.",
        "Padankan dokumen dengan nombor rujukan rekod.",
        "Simpan versi dokumen untuk tujuan audit.",
      ]}
    />
  );
}
