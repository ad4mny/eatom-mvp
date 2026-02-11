export const perlesenanSubmodules = [
  {
    slug: "permohonan-lesen",
    title: "Permohonan Lesen",
    description: "Semakan permohonan, invois, syarat lesen, dan status kelulusan.",
    isMvpReady: true,
  },
  {
    slug: "pendaftaran",
    title: "Pendaftaran",
    description: "Pendaftaran SEM, model radas/bekas, penukaran OBTL/OBTP.",
    isMvpReady: false,
  },
  {
    slug: "kebenaran",
    title: "Kebenaran",
    description: "Senarai permohonan, slip lulus, dan status semua permohonan.",
    isMvpReady: false,
  },
  {
    slug: "maklumbalas",
    title: "Maklumbalas",
    description: "Tindakan ubah lokasi bahan dan rekod maklumbalas.",
    isMvpReady: false,
  },
  {
    slug: "program-perlindungan-sinaran",
    title: "Program Perlindungan Sinaran",
    description: "Program baru, senarai diterimapakai, dibatalkan, dan semua program.",
    isMvpReady: false,
  },
  {
    slug: "pelan-kecemasan",
    title: "Pelan Kecemasan",
    description: "Pelan penilaian, diterimapakai, dibatalkan, dan semua pelan.",
    isMvpReady: false,
  },
  {
    slug: "pelan-sekuriti",
    title: "Pelan Sekuriti",
    description: "Pelan sekuriti penilaian, diterimapakai, dibatalkan, dan semua pelan.",
    isMvpReady: false,
  },
  {
    slug: "permohonan-pengecualian-lain-lain",
    title: "Permohonan Pengecualian & Lain-Lain",
    description: "Pengurusan permohonan pengecualian serta permohonan khas lain.",
    isMvpReady: false,
  },
] as const;

export function getSubmoduleBySlug(slug: string) {
  return perlesenanSubmodules.find((submodule) => submodule.slug === slug);
}
