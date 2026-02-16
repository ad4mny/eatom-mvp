import ProcessPanel from "../../_components/process-panel";

export default function PermitRecordPage() {
  return (
    <ProcessPanel
      title="Ringkasan Rekod Permit"
      description="Status permit import, eksport, atau pengangkutan bahan radioaktif."
      checkpoints={[
        "Semak jenis permit dan laluan logistik.",
        "Sahkan dokumen sokongan kastam/angkutan.",
        "Semak tarikh kuat kuasa permit.",
      ]}
    />
  );
}
