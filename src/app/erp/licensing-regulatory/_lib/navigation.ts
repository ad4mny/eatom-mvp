import type { SubModuleSlug } from "./records";

export type SecondaryTab = {
  slug: SubModuleSlug;
  label: string;
  href: string;
  description: string;
};

export const secondaryTabs: SecondaryTab[] = [
  {
    slug: "perlesenan",
    label: "Perlesenan",
    href: "/erp/licensing-regulatory/perlesenan",
    description: "Permohonan lesen, invois fee, semakan dokumen.",
  },
  {
    slug: "kawalselia",
    label: "Kawalselia",
    href: "/erp/licensing-regulatory/kawalselia",
    description: "Kebenaran, notis, aduan, pemeriksaan dan tindakan.",
  },
  {
    slug: "permit",
    label: "Permit",
    href: "/erp/licensing-regulatory/permit",
    description: "Permit import, eksport dan pengangkutan.",
  },
  {
    slug: "peperiksaan",
    label: "Peperiksaan & Pensijilan",
    href: "/erp/licensing-regulatory/peperiksaan",
    description: "PPS, PUK, PR, CEP dan audit pusat latihan.",
  },
];
