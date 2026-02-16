import ProcessPanel from "../../../_components/process-panel";

export default function PermitKeputusanPage() {
  return (
    <ProcessPanel
      title="Keputusan Permit"
      description="Keputusan akhir permit bersama justifikasi dan catatan pematuhan."
      checkpoints={[
        "Sahkan syarat permit sebelum kelulusan.",
        "Jana surat keputusan rasmi.",
        "Maklumkan keputusan kepada pemohon dan pihak berkaitan.",
      ]}
    />
  );
}
