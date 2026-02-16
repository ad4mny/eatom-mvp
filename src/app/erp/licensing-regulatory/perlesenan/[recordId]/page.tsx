import ProcessPanel from "../../_components/process-panel";

export default function PerlesenanRecordPage() {
  return (
    <ProcessPanel
      title="Ringkasan Rekod Perlesenan"
      description="Paparan ringkas untuk semakan awal pegawai sebelum keputusan diproses."
      checkpoints={[
        "Semak kesahihan dokumen sokongan pemohon.",
        "Pastikan profil pekerja dipadankan dengan data dos semasa.",
        "Sahkan kategori lesen dan kelas aktiviti operasi.",
      ]}
    />
  );
}
