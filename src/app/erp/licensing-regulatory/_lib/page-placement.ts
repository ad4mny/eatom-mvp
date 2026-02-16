export type UiPlacement = {
  item: string;
  placement: "modal" | "full-page";
  reason: string;
};

export const pagePlacement: UiPlacement[] = [
  {
    item: "Tukar Kata Laluan",
    placement: "modal",
    reason: "Aksi ringkas berisiko rendah, tidak memerlukan konteks halaman penuh.",
  },
  {
    item: "Terima Aduan Ringkas",
    placement: "modal",
    reason: "Input cepat dari mana-mana halaman dengan data minimum.",
  },
  {
    item: "Query Dokumen Tambahan",
    placement: "modal",
    reason: "Aksi contextual pada rekod tanpa meninggalkan halaman semasa.",
  },
  {
    item: "Laporan Tahunan",
    placement: "full-page",
    reason: "Memerlukan penapisan, visualisasi dan eksport dokumen bersaiz besar.",
  },
  {
    item: "Laporan Statistik Prestasi",
    placement: "full-page",
    reason: "Paparan analitik kompleks dan perbandingan tempoh masa.",
  },
  {
    item: "Audit Trail Rekod",
    placement: "full-page",
    reason: "Memerlukan jejak kronologi panjang serta penelusuran mendalam.",
  },
];
