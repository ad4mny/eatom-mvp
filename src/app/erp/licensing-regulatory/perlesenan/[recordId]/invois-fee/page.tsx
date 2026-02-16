import ProcessPanel from "../../../_components/process-panel";

export default function PerlesenanInvoisFeePage() {
  return (
    <ProcessPanel
      title="Invois Fee"
      description="Jana, semak dan sahkan invois fi permohonan lesen bagi rekod semasa."
      checkpoints={[
        "Jana invois berdasarkan jenis lesen dan kelas aktiviti.",
        "Semak status pembayaran serta tarikh matang.",
        "Hantar notifikasi peringatan kepada pemohon jika belum dibayar.",
      ]}
    />
  );
}
