export type PengurusanSumberManusiaSubmodule = {
  number: number;
  slug: string;
  title: string;
  description: string;
  processes: string[];
  mockFocus: string;
};

export type PengurusanSumberManusiaWorkflowLane = {
  actor: string;
  tasks: string[];
};

export type PengurusanSumberManusiaFormField = {
  name: string;
  label: string;
  type: "text" | "date" | "select" | "textarea" | "number";
  placeholder?: string;
  required?: boolean;
  options?: string[];
};

export type PengurusanSumberManusiaFormTemplate = {
  title: string;
  description: string;
  submitLabel: string;
  fields: PengurusanSumberManusiaFormField[];
};

export const pengurusanSumberManusiaSubmodules: PengurusanSumberManusiaSubmodule[] = [
  {
    number: 1,
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
    number: 2,
    slug: "proses-perundangan",
    title: "Proses Perundangan",
    description: "Rujukan proses perundangan berkaitan.",
    processes: ["Perundangan Berkaitan"],
    mockFocus: "Perundangan",
  },
  {
    number: 3,
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
    number: 4,
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
    number: 5,
    slug: "pelantikan-pakar-ahli-rujuk",
    title: "Pelantikan Pakar/Ahli Rujuk",
    description: "Pengurusan senarai pakar dan ahli rujuk.",
    processes: ["Senarai Ahli Rujuk"],
    mockFocus: "Ahli Rujuk",
  },
  {
    number: 6,
    slug: "ndp-dpp",
    title: "NDP/DPP",
    description: "Pengurusan aliran NDP dan DPP untuk pemohon, pengarah, dan pegawai.",
    processes: ["NDP - Pemohon", "NDP - Pengarah", "NDP - Pegawai", "DPP"],
    mockFocus: "NDP/DPP",
  },
  {
    number: 7,
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
    number: 8,
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
    number: 9,
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
    number: 10,
    slug: "penganjuran-program-dalaman",
    title: "Penganjuran Program Dalaman",
    description: "Pengurusan penganjuran latihan dalaman.",
    processes: ["Penganjuran Latihan Dalaman"],
    mockFocus: "Program Dalaman",
  },
  {
    number: 11,
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
    number: 12,
    slug: "manual-pengguna",
    title: "Manual Pengguna",
    description: "Manual penggunaan Sistem iPakar.",
    processes: ["Manual Sistem Ipakar"],
    mockFocus: "Manual Sistem",
  },
  {
    number: 13,
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
    number: 14,
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
    number: 15,
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

export const pentadbirSistemAssumedSubmodules = [
  "Sub-Modul Profil Kepakaran",
  "Pangkalan Data Kakitangan",
  "Sub-Modul Pengurusan Latihan - Dalam dan Luar Negara",
  "Sub-Modul Pengurusan Latihan: Pengesahan Kehadiran",
  "Sub-Modul Pengurusan Latihan: Pengeluaran Sijil",
  "Sub-Modul Pengurusan Latihan: BP1 & BP2",
  "Sub-Modul Pelan Operasi Latihan (POL)",
  "Sub-Modul POL: Permohonan Cadangan Latihan dari Bahagian",
  "Sub-Modul POL: Kelulusan/Kebenaran (KP)",
  "Sub-Modul Pengurusan Ceramah",
  "Sub-Modul Pengurusan Ceramah: Permohonan Ceramah (Dari Orang Awam)",
  "Sub-Modul Pengurusan Latihan Industri",
  "Sub-Modul Pengurusan Fellowship",
  "Sub-Modul Pengurusan Jalinan Kerjasama: Senarai MOU (Kebangsaan/Antarabangsa)",
  "Sub-Modul Pengurusan Jalinan Kerjasama: Pelan Tindakan",
  "Sub-Modul Laporan & Statistik: Jumlah Ceramah Mengikut Bulan",
  "Sub-Modul Laporan & Statistik: Jumlah Pelajar Industri",
  "Sub-Modul Pentadbir Dalaman (Rujuk Pentadbir Sistem)",
  "Sub-Modul Manual Pengguna",
];

const defaultStatusOptions = [
  "Draf",
  "Dalam Semakan",
  "Menunggu Kelulusan",
  "Diluluskan",
  "Perlu Tindakan",
  "Ditolak",
  "Selesai",
];

const workflowBySubmoduleSlug: Partial<
  Record<string, PengurusanSumberManusiaWorkflowLane[]>
> = {
  "pengarah-ketua-pengarah": [
    {
      actor: "Ketua Pengarah",
      tasks: [
        "Semak ringkasan permohonan latihan pengarah",
        "Lulus/Tolak permohonan strategik",
        "Sahkan laporan akhir latihan",
      ],
    },
    {
      actor: "Urusetia Latihan",
      tasks: [
        "Sediakan dokumen sokongan",
        "Kemaskini status keputusan dan maklumkan pemohon",
      ],
    },
  ],
  "manual-pengguna": [
    {
      actor: "Ketua Pengarah",
      tasks: ["Manual Sistem iPakar"],
    },
    {
      actor: "Pentadbir Sistem",
      tasks: [
        "Semak versi manual",
        "Terbitkan dokumen terkini ke repositori dokumen dalaman",
      ],
    },
  ],
  "urusetia-latihan": [
    {
      actor: "Urusetia Latihan",
      tasks: [
        "Luar negara",
        "Permohonan Latihan",
        "Laporan Latihan",
        "Penganjuran Latihan Dalaman",
        "Rekod Latihan",
        "Rekod Luar negara (excel)",
      ],
    },
    {
      actor: "Ketua Pengarah",
      tasks: ["Semakan ringkasan permohonan dan kelulusan strategik latihan"],
    },
  ],
  "urusetia-ceramah": [
    {
      actor: "Urusetia Ceramah",
      tasks: [
        "Permohonan Jemputan Ceramah (paparan web AELB)",
        "Senarai Permohonan Ceramah",
        "Senarai Status Perlaksanaan",
        "Senarai Status Pembayaran",
        "Senarai Keseluruhan",
        "Senarai Syarikat Berlesen",
      ],
    },
    {
      actor: "Bahagian Kewangan",
      tasks: ["Pengesahan status pembayaran dan rujukan invois ceramah"],
    },
  ],
  "pentadbir-sistem": [
    {
      actor: "Pentadbir Sistem",
      tasks: [
        "Penyelenggaraan konfigurasi akses",
        "Penetapan parameter modul",
        "Pengurusan data rujukan dan laporan statistik",
      ],
    },
    {
      actor: "Submodul Tambahan (Mock)",
      tasks: pentadbirSistemAssumedSubmodules,
    },
  ],
};

const formTemplateBySubmoduleSlug: Partial<
  Record<string, PengurusanSumberManusiaFormTemplate>
> = {
  "manual-pengguna": {
    title: "Borang Dokumen Manual",
    description: "Mock borang untuk tambah/kemaskini manual Sistem iPakar.",
    submitLabel: "Simpan Manual",
    fields: [
      {
        name: "tajukDokumen",
        label: "Tajuk Dokumen",
        type: "text",
        required: true,
        placeholder: "Contoh: Manual Sistem iPakar v2.4",
      },
      {
        name: "kategori",
        label: "Kategori Manual",
        type: "select",
        required: true,
        options: ["Panduan Umum", "Urusetia Latihan", "Urusetia Ceramah", "Pentadbir Sistem"],
      },
      {
        name: "versi",
        label: "Versi",
        type: "text",
        required: true,
        placeholder: "Contoh: 2.4",
      },
      {
        name: "tarikhTerbit",
        label: "Tarikh Terbit",
        type: "date",
        required: true,
      },
      {
        name: "catatan",
        label: "Catatan",
        type: "textarea",
        placeholder: "Nyatakan ringkasan perubahan versi.",
      },
    ],
  },
  "urusetia-latihan": {
    title: "Borang Pengurusan Latihan",
    description: "Mock borang permohonan/rekod latihan untuk urusetia.",
    submitLabel: "Simpan Rekod Latihan",
    fields: [
      {
        name: "kategoriLatihan",
        label: "Kategori",
        type: "select",
        required: true,
        options: [
          "Luar negara",
          "Permohonan Latihan",
          "Laporan Latihan",
          "Penganjuran Latihan Dalaman",
          "Rekod Latihan",
          "Rekod Luar negara (excel)",
        ],
      },
      {
        name: "tajukLatihan",
        label: "Tajuk Latihan",
        type: "text",
        required: true,
        placeholder: "Contoh: Kursus Keselamatan Sinaran Lanjutan",
      },
      {
        name: "penganjur",
        label: "Penganjur",
        type: "text",
        required: true,
      },
      {
        name: "tarikhMula",
        label: "Tarikh Mula",
        type: "date",
        required: true,
      },
      {
        name: "anggaranKos",
        label: "Anggaran Kos (RM)",
        type: "number",
      },
      {
        name: "catatan",
        label: "Catatan",
        type: "textarea",
      },
    ],
  },
  "urusetia-ceramah": {
    title: "Borang Permohonan Ceramah",
    description: "Mock borang untuk mengurus permohonan jemputan ceramah orang awam.",
    submitLabel: "Daftar Permohonan Ceramah",
    fields: [
      {
        name: "namaPemohon",
        label: "Nama Pemohon",
        type: "text",
        required: true,
      },
      {
        name: "organisasi",
        label: "Organisasi",
        type: "text",
        required: true,
      },
      {
        name: "topikCeramah",
        label: "Topik Ceramah",
        type: "text",
        required: true,
      },
      {
        name: "tarikhCadangan",
        label: "Tarikh Cadangan",
        type: "date",
        required: true,
      },
      {
        name: "statusPembayaran",
        label: "Status Pembayaran",
        type: "select",
        options: ["Belum Dituntut", "Dalam Proses", "Selesai"],
      },
      {
        name: "catatan",
        label: "Catatan",
        type: "textarea",
      },
    ],
  },
  "pentadbir-sistem": {
    title: "Borang Pentadbir Sistem",
    description: "Mock borang pengurusan konfigurasi submodul dan data induk.",
    submitLabel: "Simpan Konfigurasi",
    fields: [
      {
        name: "subModul",
        label: "Sub-Modul",
        type: "select",
        required: true,
        options: pentadbirSistemAssumedSubmodules,
      },
      {
        name: "jenisTindakan",
        label: "Jenis Tindakan",
        type: "select",
        required: true,
        options: ["Tambah", "Kemaskini", "Nyahaktif", "Import Data", "Semak Laporan"],
      },
      {
        name: "pegawaiBertugas",
        label: "Pegawai Bertugas",
        type: "text",
        required: true,
      },
      {
        name: "slaHari",
        label: "SLA (Hari)",
        type: "number",
      },
      {
        name: "catatan",
        label: "Catatan",
        type: "textarea",
      },
    ],
  },
};

function buildDefaultFormTemplate(
  submodule: PengurusanSumberManusiaSubmodule,
): PengurusanSumberManusiaFormTemplate {
  return {
    title: `Borang ${submodule.title} (Mock)`,
    description: "Borang ringkas untuk demonstrasi input data submodul.",
    submitLabel: "Simpan Rekod",
    fields: [
      {
        name: "perkara",
        label: "Perkara",
        type: "text",
        required: true,
        placeholder: `Contoh: ${submodule.mockFocus} - Semakan`,
      },
      {
        name: "proses",
        label: "Proses Kerja",
        type: "select",
        required: true,
        options: submodule.processes,
      },
      {
        name: "unit",
        label: "Unit/Pemilik",
        type: "text",
        required: true,
        placeholder: "Contoh: Urusetia Latihan",
      },
      {
        name: "tarikhMula",
        label: "Tarikh Mula",
        type: "date",
        required: true,
      },
      {
        name: "status",
        label: "Status",
        type: "select",
        options: defaultStatusOptions,
      },
      {
        name: "catatan",
        label: "Catatan",
        type: "textarea",
      },
    ],
  };
}

export function getPengurusanSumberManusiaWorkflowLanes(
  submodule: PengurusanSumberManusiaSubmodule,
) {
  return (
    workflowBySubmoduleSlug[submodule.slug] ?? [
      {
        actor: "Aliran Kerja",
        tasks: submodule.processes,
      },
    ]
  );
}

export function getPengurusanSumberManusiaFormTemplate(
  submodule: PengurusanSumberManusiaSubmodule,
) {
  return formTemplateBySubmoduleSlug[submodule.slug] ?? buildDefaultFormTemplate(submodule);
}

export const pengurusanSumberManusiaStatusOptions = defaultStatusOptions;
