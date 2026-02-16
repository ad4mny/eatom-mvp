import ProcessPanel from "../../../_components/process-panel";

export default function PerlesenanAuditTrailPage() {
  return (
    <ProcessPanel
      title="Audit Trail"
      description="Jejak kronologi tindakan pegawai dan sistem untuk tujuan pematuhan audit."
      checkpoints={[
        "Catat setiap perubahan status rekod permohonan.",
        "Simpan sejarah tindakan Approve, Reject, dan Query.",
        "Sediakan jejak eksport untuk semakan audit tahunan.",
      ]}
    />
  );
}
