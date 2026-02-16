export type MainModule = {
  id: string;
  title: string;
  description: string;
  href: string;
};

export const mainModules: MainModule[] = [
  {
    id: "dashboard",
    title: "Dashboard eATOM",
    description: "Ringkasan KPI, tugasan dan amaran operasi.",
    href: "/erp/dashboard",
  },
  {
    id: "licensing-regulatory",
    title: "Sistem Perlesenan dan Kawalselia",
    description: "Perlesenan, kawalselia, permit, peperiksaan dan pensijilan.",
    href: "/erp/licensing-regulatory",
  },
  {
    id: "hr-management",
    title: "Sistem Pengurusan Sumber Manusia",
    description: "Pengurusan perjawatan, prestasi dan kompetensi dalaman.",
    href: "/erp/hr-management",
  },
  {
    id: "environmental-radiation-monitoring",
    title: "Sistem Pemantauan Radiasi Persekitaran",
    description: "Pemantauan data radiasi persekitaran dan insiden.",
    href: "/erp/environmental-radiation-monitoring",
  },
  {
    id: "radiation-worker-information",
    title: "Maklumat Pekerja Sinaran",
    description: "Profil pekerja, pendaftaran dan status kompetensi.",
    href: "/erp/radiation-worker-information",
  },
  {
    id: "document-management",
    title: "Sistem Pengurusan Dokumen",
    description: "Repositori dokumen rasmi, audit trail dan carian.",
    href: "/erp/document-management",
  },
  {
    id: "radiation-worker-dose-information",
    title: "Maklumat Dos Pekerja Sinaran",
    description: "Rekod dos, trend pendedahan dan pematuhan had dos.",
    href: "/erp/radiation-worker-dose-information",
  },
  {
    id: "management-services",
    title: "Sistem Khidmat Pengurusan",
    description: "Khidmat pentadbiran, laporan tahunan dan sokongan.",
    href: "/erp/management-services",
  },
];
