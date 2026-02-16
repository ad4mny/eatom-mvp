import ProcessPanel from "../../_components/process-panel";

export default function PeperiksaanRecordPage() {
  return (
    <ProcessPanel
      title="Ringkasan Rekod Peperiksaan"
      description="Ringkasan pendaftaran peperiksaan/pensijilan dan status pemohon."
      checkpoints={[
        "Semak syarat kelayakan calon.",
        "Sahkan pembayaran fi peperiksaan.",
        "Tetapkan pusat peperiksaan dan sesi.",
      ]}
    />
  );
}
