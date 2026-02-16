import ProcessPanel from "../../../_components/process-panel";

export default function KawalseliaTindakanPage() {
  return (
    <ProcessPanel
      title="Tindakan Kawalselia"
      description="Pelaksanaan tindakan susulan berdasarkan keputusan semakan pegawai."
      checkpoints={[
        "Tetapkan tindakan pembetulan kepada pemohon.",
        "Jadualkan lawatan atau verifikasi lapangan jika perlu.",
        "Pantau SLA penyelesaian sehingga status ditutup.",
      ]}
    />
  );
}
