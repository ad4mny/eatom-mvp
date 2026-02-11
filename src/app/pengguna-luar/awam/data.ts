export type AwamService = {
  slug: string;
  title: string;
  description: string;
  processes: string[];
  sharedView?: "penilaian_lawatan";
};

export const awamServices: AwamService[] = [
  {
    slug: "kebenaran-pelupusan-bukan-pemegang-lesen",
    title: "Kebenaran Pelupusan Bagi Bukan Pemegang Lesen",
    description:
      "Permohonan kebenaran pelupusan untuk penangkap kilat, sisa enap cemar, sekolah, dan awam.",
    processes: [
      "Permohonan Baru",
      "Semakan Dokumen Sokongan",
      "Pengesahan Permohonan",
      "Status Kelulusan",
    ],
  },
  {
    slug: "permohonan-penceramah",
    title: "Permohonan Penceramah",
    description: "Permohonan penceramah bagi program berkaitan keselamatan sinaran.",
    processes: [
      "Permohonan Baru",
      "Semakan Jadual Program",
      "Pengesahan Penceramah",
      "Status Permohonan",
    ],
  },
  {
    slug: "permohonan-program-outreach-promosi",
    title: "Permohonan Program Outreach & Promosi (Awam)",
    description:
      "Permohonan lawatan, kursus, dan pameran untuk program outreach dan promosi awam.",
    processes: [
      "Permohonan Lawatan/Kursus/Pameran",
      "Semakan Ketersediaan",
      "Pengesahan Program",
      "Status Permohonan",
    ],
  },
  {
    slug: "permohonan-latihan-industri-fellowship-bdhl",
    title: "Permohonan Latihan Industri/Fellowship - BDHL",
    description: "Permohonan penempatan latihan industri atau fellowship di bawah BDHL.",
    processes: [
      "Permohonan Baharu",
      "Semakan Kelayakan",
      "Pengesahan Penempatan",
      "Status Permohonan",
    ],
  },
  {
    slug: "permohonan-pengecualian-akta-304-bpp",
    title: "Permohonan Pengecualian di bawah Akta 304 - BPP",
    description: "Permohonan pengecualian bagi kategori yang dibenarkan di bawah Akta 304.",
    processes: [
      "Permohonan Baharu",
      "Semakan Akta & Kategori",
      "Pengesahan Dokumen",
      "Status Kelulusan",
    ],
  },
  {
    slug: "permohonan-lesen-bagi-tujuan-perubatan",
    title: "Permohonan Lesen Bagi Tujuan Perubatan",
    description: "Permohonan lesen khusus untuk aktiviti atau penggunaan bagi tujuan perubatan.",
    processes: [
      "Permohonan Baharu",
      "Semakan Keperluan Klinikal",
      "Pengesahan Kepatuhan",
      "Status Permohonan",
    ],
  },
  {
    slug: "permohonan-penilaian-lawatan-tapak-awam",
    title: "Permohonan Penilaian Lawatan Tapak (Awam) - BPP",
    description: "Permohonan penilaian lawatan tapak oleh orang awam.",
    processes: ["Permohonan Lawatan Tapak Awam"],
    sharedView: "penilaian_lawatan",
  },
];

export function getAwamServiceBySlug(slug: string) {
  return awamServices.find((service) => service.slug === slug);
}
