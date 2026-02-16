import ProcessPanel from "../../../_components/process-panel";

export default function PeperiksaanJadualPage() {
  return (
    <ProcessPanel
      title="Jadual Peperiksaan"
      description="Penjadualan sesi peperiksaan bagi calon dan pusat latihan terlibat."
      checkpoints={[
        "Pilih slot masa dan lokasi peperiksaan.",
        "Semak kapasiti pusat latihan.",
        "Edarkan notifikasi jadual kepada calon.",
      ]}
    />
  );
}
