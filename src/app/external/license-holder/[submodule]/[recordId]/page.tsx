import ProcessPanel from "../../../_components/process-panel";

export default function LicenseHolderRecordPage() {
  return (
    <ProcessPanel
      title="Ringkasan Rekod Pemegang Lesen"
      description="Ringkasan transaksi untuk semakan awal pemohon sebelum tindakan lanjut."
      checkpoints={[
        "Semak butiran pemohon dan syarikat.",
        "Sahkan jenis perkhidmatan yang dimohon.",
        "Pantau status terkini serta sejarah kemaskini.",
      ]}
    />
  );
}
