import ProcessPanel from "../../../_components/process-panel";

export default function NonLicenseRecordPage() {
  return (
    <ProcessPanel
      title="Ringkasan Rekod Bukan Pemegang Lesen"
      description="Ringkasan permohonan awam sebelum pemohon melengkapkan tindakan susulan."
      checkpoints={[
        "Semak identiti pemohon/organisasi.",
        "Sahkan kategori perkhidmatan awam.",
        "Pantau status dan notifikasi semasa.",
      ]}
    />
  );
}
