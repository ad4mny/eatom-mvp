import ProcessPanel from "../../../_components/process-panel";

export default function PerlesenanSemakanDokumenPage() {
  return (
    <ProcessPanel
      title="Semakan Dokumen"
      description="Semakan dokumen wajib dan validasi pematuhan mengikut Akta 304."
      checkpoints={[
        "Sahkan format dokumen dan tandatangan digital.",
        "Semak tempoh sah sijil atau pengiktirafan berkaitan.",
        "Tandakan kekurangan sebagai Query untuk tindakan pemohon.",
      ]}
    />
  );
}
