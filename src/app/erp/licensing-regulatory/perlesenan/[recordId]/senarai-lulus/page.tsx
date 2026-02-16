import ProcessPanel from "../../../_components/process-panel";

export default function PerlesenanSenaraiLulusPage() {
  return (
    <ProcessPanel
      title="Senarai Lulus"
      description="Pengesahan status kelulusan beserta slip keputusan rasmi."
      checkpoints={[
        "Semak keputusan panel penilai.",
        "Jana slip lulus/gagal untuk rekod pemohon.",
        "Kemas kini status akhir dalam pangkalan data lesen.",
      ]}
    />
  );
}
