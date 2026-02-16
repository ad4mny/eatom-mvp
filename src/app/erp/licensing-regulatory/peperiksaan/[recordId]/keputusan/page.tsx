import ProcessPanel from "../../../_components/process-panel";

export default function PeperiksaanKeputusanPage() {
  return (
    <ProcessPanel
      title="Keputusan Peperiksaan"
      description="Pengesahan keputusan peperiksaan dan pengeluaran status pensijilan."
      checkpoints={[
        "Sahkan markah akhir dan verifikasi panel.",
        "Jana keputusan lulus/gagal untuk calon.",
        "Kemas kini status pensijilan ke profil pekerja.",
      ]}
    />
  );
}
