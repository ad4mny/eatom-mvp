import ProcessPanel from "../../_components/process-panel";

export default function KawalseliaRecordPage() {
  return (
    <ProcessPanel
      title="Ringkasan Rekod Kawalselia"
      description="Ringkasan tindakan kawalselia termasuk pemeriksaan, notis, dan kebenaran operasi."
      checkpoints={[
        "Semak risiko operasi dan keperluan tapak.",
        "Sahkan jadual pemeriksaan yang berkaitan.",
        "Pastikan tindakan kawalselia mematuhi SOP semasa.",
      ]}
    />
  );
}
