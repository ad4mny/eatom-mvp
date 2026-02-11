export type PenguatkuasaanSubmodule = {
  number: number;
  slug: string;
  title: string;
  description: string;
  processes: string[];
  mockFocus: string;
};

export const penguatkuasaanSubmodules: PenguatkuasaanSubmodule[] = [
  {
    number: 1,
    slug: "pengkompaunan",
    title: "Pengkompaunan",
    description:
      "Pengurusan modul pengkompaunan untuk semakan kompaun dan status tindakan.",
    processes: ["Pengkompaunan", "Semakan Kompaun", "Status Kompaun"],
    mockFocus: "Kompaun",
  },
  {
    number: 2,
    slug: "penggeledahan",
    title: "Penggeledahan",
    description:
      "Pengurusan rekod penggeledahan merangkumi tindakan terus hingga peringkat kelulusan.",
    processes: [
      "Penggeledahan",
      "Tindakan Terus",
      "Ketua Unit",
      "Pengarah",
      "Semua Penggeledahan",
    ],
    mockFocus: "Penggeledahan",
  },
  {
    number: 3,
    slug: "siasatan-pendakwaan",
    title: "Siasatan & Pendakwaan",
    description:
      "Pengurusan aliran siasatan dan pendakwaan termasuk dokumen, keputusan, dan inventori barang kes.",
    processes: [
      "Siasatan (IO)",
      "Siasatan (Ketua Seksyen)",
      "Siasatan (Pengarah)",
      "Mesyuarat Perlesenan",
      "Siasatan (PUU)",
      "Keputusan",
      "Ringkasan IO",
      "Laporan",
      "Inventori Barang Kes",
      "Upload Dokumen (IP)",
      "Pendakwaan",
    ],
    mockFocus: "Siasatan",
  },
  {
    number: 4,
    slug: "pengurusan-tindakbalas-nuklear-sptn",
    title: "Pengurusan Tindakbalas Nuklear - SPTN",
    description:
      "Pengurusan aktiviti, output, pelaporan, dan pasukan tindakbalas nuklear (SPTN).",
    processes: [
      "Aktiviti SPTN",
      "Output SPTN",
      "Output Aduan",
      "Senarai Pasukan Tindakbalas Nuklear",
      "Kemaskini Syarikat",
      "Permohonan Pengujian Pelan Kecemasan",
      "Laporan Pengujian",
      "Laporan Kemalangan",
      "Laporan Pengesanan",
    ],
    mockFocus: "SPTN",
  },
];

export function getPenguatkuasaanSubmoduleBySlug(slug: string) {
  return penguatkuasaanSubmodules.find((submodule) => submodule.slug === slug);
}
