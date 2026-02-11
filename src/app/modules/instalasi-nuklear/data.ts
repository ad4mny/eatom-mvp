export type InstalasiNuklearSubmodule = {
  number: number;
  slug: string;
  title: string;
  description: string;
  processes: string[];
  mockFocus: string;
  note?: string;
};

export const instalasiNuklearSubmodules: InstalasiNuklearSubmodule[] = [
  {
    number: 1,
    slug: "permohonan-kebenaran",
    title: "Permohonan Kebenaran",
    description:
      "Pengurusan permohonan kebenaran untuk aliran PS/KU sehingga status kelulusan.",
    processes: [
      "Senarai Permohonan (PS)",
      "Senarai Permohonan (KU)",
      "Senarai Lulus (Slip)",
      "Status Semua Permohonan",
    ],
    mockFocus: "Kebenaran",
  },
  {
    number: 2,
    slug: "notis-pemberitahuan",
    title: "Notis Pemberitahuan",
    description:
      "Pengurusan notis operasi instalasi nuklear, inventori fizikal, dan perubahan teknikal RTP.",
    processes: [
      "Physical Inventory Taking",
      "Penerimaan & Penghantaran Bahan Nuklear",
      "Refuelling Plan",
      "Aktiviti Penyenggaraan RTP",
      "Modifikasi RTP",
      "Pindaan Dokumen SAR",
      "Modifikasi Yang Menyebabkan Perubahan, Penyenggaraan, Pengujian dan Tentu Ukuran Terhadap Kebolehupayaan Sistem Sekuriti",
    ],
    mockFocus: "Notis",
  },
  {
    number: 3,
    slug: "pengesahan-maklumbalas",
    title: "Pengesahan Maklumbalas",
    description:
      "Pengesahan maklumbalas pemilikan, pemindahan, eksport, penyenggaraan, dan rekod pekerja.",
    processes: [
      "Penyata Pemilikan",
      "Maklumbalas Pelupusan Bahan",
      "Maklumbalas Pemindahan Bahan",
      "Maklumbalas Eksport Bahan",
      "Maklumbalas Pembubaran Radas",
      "Maklumbalas Eksport Radas",
      "Maklumbalas Pindah Milik Bahan",
      "Maklumbalas Pindah Milik Radas",
      "Maklumbalas Meter Tinjau",
      "Maklumbalas Penyenggaraan",
      "Maklumbalas Ujian Kebocoran",
      "Maklumbalas Tamat Peminjaman",
      "Pemeriksaan Perubatan",
      "Pemberhentian Pekerja",
    ],
    mockFocus: "Maklumbalas",
  },
  {
    number: 4,
    slug: "penghantaran-laporan-dokumen",
    title: "Penghantaran Laporan/Dokumen",
    description:
      "Penghantaran laporan operasi, audit, material balance, dan dokumen teknikal berkaitan keselamatan.",
    processes: [
      "Laporan Penyenggaraan RTP",
      "Laporan Audit Dalaman Pemeriksaan RTP",
      "Laporan Pemantauan Aras Keradioaktifan Alam Sekitar",
      "Safety Performance Indicator",
      "Laporan Operasi RTP",
      "Perubahan Konfigurasi Teras",
      "Insiden/Unscheduled Shutdown Event/Near Miss",
      "Physical Inventory Listing",
      "Material Balance Report",
      "Inventory Change Report",
      "Concise Note",
      "General Ledger",
      "Laporan Bertulis Berkaitan Modifikasi Yang Menyebabkan Perubahan, Penyenggaraan, Pengujian dan Tentu Ukuran Terhadap Kebolehupayaan Sistem Sekuriti",
    ],
    mockFocus: "Laporan",
    note: "Sub-modul ini digunakan untuk pemohon permit di bawah STA.",
  },
  {
    number: 5,
    slug: "pemeriksaan-laporan-prestasi",
    title: "Pemeriksaan/Laporan Prestasi",
    description:
      "Urusan dapatan pemeriksaan, laporan rasmi, prestasi KU/P, dan maklumbalas pemeriksaan.",
    processes: [
      "Hasil Dapatan Awal Pemeriksaan",
      "Laporan Rasmi Pemeriksaan",
      "Laporan Prestasi (KU/P)",
      "Maklumbalas Pemeriksaan",
    ],
    mockFocus: "Pemeriksaan",
  },
  {
    number: 6,
    slug: "paparan-kemaskini-maklumbalas-pemilikan-bahan-nuklear",
    title: "Paparan Kemaskini/Maklumbalas Pemilikan Bahan Nuklear",
    description:
      "Paparan kemaskini pemilikan bahan nuklear untuk urusan pulang ke penjual dan pindah milik.",
    processes: ["Pulang Ke Penjual", "Pindah Milik"],
    mockFocus: "Pemilikan",
  },
  {
    number: 7,
    slug: "inventori-bahan-nuklear-pemilikan-pelupusan",
    title: "Inventori Bahan Nuklear (Pemilikan/Pelupusan)",
    description:
      "Paparan inventori bahan nuklear untuk pemilikan dan pelupusan.",
    processes: [
      "Inventori Pemilikan",
      "Inventori Pelupusan",
      "Tarik Data Dari Penyata Pemilikan (BKS)",
    ],
    mockFocus: "Inventori",
    note: "Data mock disusun sebagai simulasi tarikan data daripada Penyata Pemilikan (BKS).",
  },
  {
    number: 8,
    slug: "digital-laporan-pemeriksaan-fasiliti-nuklear",
    title: "Digital Laporan Pemeriksaan Fasiliti Nuklear",
    description:
      "Pengurusan digital laporan pemeriksaan fasiliti nuklear dan status verifikasi laporan.",
    processes: ["Laporan Digital", "Verifikasi Laporan", "Status Penerimaan"],
    mockFocus: "Fasiliti",
  },
  {
    number: 9,
    slug: "pelaporan-protokol-tambahan-untuk-orang-awam",
    title: "Pelaporan Di Bawah Protokol Tambahan (Untuk Orang Awam)",
    description:
      "Pelaporan awam bagi aktiviti berkaitan nuklear di bawah protokol tambahan.",
    processes: [
      "Barangan Berkaitan Nuklear",
      "Teknologi Berkaitan Nuklear",
      "Penyelidikan Berkaitan Kitaran Bahan Api Nuklear",
    ],
    mockFocus: "Pelaporan",
  },
  {
    number: 10,
    slug: "notis-pemberitahuan-berkaitan-import-eksport",
    title: "Notis Pemberitahuan Berkaitan Import/Eksport",
    description:
      "Notis import/eksport merangkumi item modul pengesahan maklumbalas serta perubahan kritikal.",
    processes: [
      "Rujukan Perkara 3 (Pengesahan Maklumbalas)",
      "Perubahan Tarikh",
      "Kehilangan",
      "Kelewatan",
    ],
    mockFocus: "Import/Eksport",
  },
];

export function getInstalasiNuklearSubmoduleBySlug(slug: string) {
  return instalasiNuklearSubmodules.find((submodule) => submodule.slug === slug);
}
