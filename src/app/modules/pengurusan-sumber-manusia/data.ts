export type PengurusanSumberManusiaSubmodule = {
  number: number;
  slug: string;
  title: string;
  description: string;
  processes: string[];
  mockFocus: string;
};

export const pengurusanSumberManusiaSubmodules: PengurusanSumberManusiaSubmodule[] = [
  {
    number: 1,
    slug: "laman-utama",
    title: "Laman Utama",
    description: "Paparan utama modul pengurusan sumber manusia.",
    processes: ["Laman Utama"],
    mockFocus: "Laman Utama",
  },
  {
    number: 2,
    slug: "mesyuarat",
    title: "Mesyuarat",
    description:
      "Pengurusan mesyuarat lembaga, forum audit, perlesenan, jawatankuasa, dan lain-lain.",
    processes: [
      "Mesyuarat Lembaga",
      "Mesyuarat Forum Audit",
      "Mesyuarat Perlesenan",
      "Mesyuarat Jawatankuasa",
      "Lain-lain Mesyuarat",
    ],
    mockFocus: "Mesyuarat",
  },
  {
    number: 3,
    slug: "proses-perundangan",
    title: "Proses Perundangan",
    description: "Rujukan proses perundangan berkaitan.",
    processes: ["Perundangan Berkaitan"],
    mockFocus: "Perundangan",
  },
  {
    number: 4,
    slug: "dokumen-panduan",
    title: "Dokumen Panduan",
    description:
      "Pengurusan dokumen panduan teknikal, polisi, akta, peraturan, dan SOP.",
    processes: [
      "Edaran Maklumat Teknik (EMT)",
      "Panduan Teknikal (LEM/TEK)",
      "Siri Panduan Pegawai (SPP)",
      "Notis Pemberitahuan (NP)",
      "Akta",
      "Peraturan",
      "Perintah",
      "Polisi",
      "Pemberitahuan",
      "SOP NCNRM",
    ],
    mockFocus: "Dokumen Panduan",
  },
  {
    number: 5,
    slug: "lembaga-jawatankuasa",
    title: "Lembaga/Jawatankuasa",
    description: "Senarai ahli lembaga, jawatankuasa, dan point of contact.",
    processes: [
      "Senarai Ahli Lembaga",
      "Senarai Jawatankuasa",
      "Carian Ahli Jawatankuasa",
      "Senarai Point of Contact (PoC)",
    ],
    mockFocus: "Lembaga",
  },
  {
    number: 6,
    slug: "pelantikan-pakar-ahli-rujuk",
    title: "Pelantikan Pakar/Ahli Rujuk",
    description: "Pengurusan senarai pakar dan ahli rujuk.",
    processes: ["Senarai Ahli Rujuk"],
    mockFocus: "Ahli Rujuk",
  },
  {
    number: 7,
    slug: "ndp-dpp",
    title: "NDP/DPP",
    description: "Pengurusan aliran NDP dan DPP untuk pemohon, pengarah, dan pegawai.",
    processes: ["NDP - Pemohon", "NDP - Pengarah", "NDP - Pegawai", "DPP"],
    mockFocus: "NDP/DPP",
  },
  {
    number: 8,
    slug: "permohonan-latihan",
    title: "Permohonan Latihan",
    description: "Urusan permohonan latihan dalam negara, luar negara, dan kelulusan.",
    processes: [
      "Luar Negara",
      "Iklan Latihan",
      "Dalam Negara",
      "Status Permohonan",
      "Borang Permohonan",
      "Permohonan Kelulusan",
      "TKP",
    ],
    mockFocus: "Permohonan Latihan",
  },
  {
    number: 9,
    slug: "rekod-latihan-dedahan-sinaran",
    title: "Rekod Latihan & Dedahan Sinaran",
    description:
      "Rekod latihan, kompetensi pegawai, rekod perubatan, dan dedahan sinaran.",
    processes: [
      "Rekod Latihan",
      "Rekod Latihan (Pegawai Luar)",
      "Rekod Latihan (Urusetia)",
      "Maklumat Kompetensi Pegawai",
      "Rekod Perubatan Pekerja Sinaran",
      "Rekod Dedahan Sinaran",
    ],
    mockFocus: "Rekod Latihan",
  },
  {
    number: 10,
    slug: "laporan-latihan",
    title: "Laporan Latihan",
    description: "Laporan latihan termasuk kehadiran dan bahan pembentangan.",
    processes: [
      "Laporan",
      "Senarai Kehadiran Latihan",
      "Paparan Bahan Pembentangan Latihan",
      "Senarai Keseluruhan Kehadiran",
    ],
    mockFocus: "Laporan Latihan",
  },
  {
    number: 11,
    slug: "penganjuran-program-dalaman",
    title: "Penganjuran Program Dalaman",
    description: "Pengurusan penganjuran latihan dalaman.",
    processes: ["Penganjuran Latihan Dalaman"],
    mockFocus: "Program Dalaman",
  },
  {
    number: 12,
    slug: "pengarah-ketua-pengarah",
    title: "Pengarah/Ketua Pengarah",
    description: "Permohonan latihan dan laporan untuk pengarah serta ketua pengarah.",
    processes: [
      "Permohonan Latihan Ketua - Pengarah",
      "Laporan - Pengarah",
      "Laporan - Ketua Pengarah",
    ],
    mockFocus: "Pengarah",
  },
  {
    number: 13,
    slug: "manual-pengguna",
    title: "Manual Pengguna",
    description: "Manual penggunaan Sistem iPakar.",
    processes: ["Manual Sistem Ipakar"],
    mockFocus: "Manual Sistem",
  },
  {
    number: 14,
    slug: "urusetia-latihan",
    title: "Urusetia Latihan",
    description: "Pengurusan permohonan, laporan, dan rekod latihan oleh urusetia.",
    processes: [
      "Luar negara",
      "Permohonan Latihan",
      "Laporan Latihan",
      "Penganjuran Latihan Dalaman",
      "Rekod Latihan",
      "Rekod Luar negara (excell)",
    ],
    mockFocus: "Urusetia Latihan",
  },
  {
    number: 15,
    slug: "urusetia-ceramah",
    title: "Urusetia Ceramah",
    description:
      "Pengurusan permohonan jemputan ceramah, pelaksanaan, pembayaran, dan status keseluruhan.",
    processes: [
      "Permohonan Jemputan Ceramah (paparan web aelb)",
      "Senarai Permohonan Ceramah",
      "Senarai Status Perlaksanaan",
      "Senarai Status Pembayaran",
      "Senarai Keseluruhan",
      "Senarai Syarikat Berlesen",
    ],
    mockFocus: "Urusetia Ceramah",
  },
  {
    number: 16,
    slug: "pentadbir-sistem",
    title: "Pentadbir Sistem",
    description:
      "Pentadbiran sistem meliputi profil kepakaran, latihan, ceramah, fellowship, jalinan kerjasama, dan statistik.",
    processes: [
      "Profil Kepakaran",
      "Pangkalan Data Kakitangan",
      "Pengurusan Latihan - Dalam dan Luar Negara",
      "Pengurusan Latihan: Pengesahan Kehadiran",
      "Pengurusan Latihan: Pengeluaran Sijil",
      "Pengurusan Latihan: BP1 & BP2",
      "Pelan Operasi Latihan (POL)",
      "POL: Permohonan Cadangan Latihan dari Bahagian",
      "POL: Kelulusan/Kebenaran (KP)",
      "Pengurusan Ceramah",
      "Pengurusan Ceramah: Permohonan Ceramah (Dari Orang Awam)",
      "Pengurusan Latihan Industri",
      "Pengurusan Fellowship",
      "Pengurusan Jalinan Kerjasama",
      "Jalinan Kerjasama: Senarai MOU (Kebangsaan/Antarabangsa)",
      "Jalinan Kerjasama: Pelan Tindakan",
      "Laporan & Statistik",
      "Laporan & Statistik: Jumlah Ceramah Mengikut Bulan",
      "Laporan & Statistik: Jumlah Pelajar Industri",
      "Pentadbir Dalaman (Rujuk - Pentadbir Sistem)",
      "Manual Pengguna",
    ],
    mockFocus: "Pentadbir Sistem",
  },
];

export function getPengurusanSumberManusiaSubmoduleBySlug(slug: string) {
  return pengurusanSumberManusiaSubmodules.find((submodule) => submodule.slug === slug);
}
