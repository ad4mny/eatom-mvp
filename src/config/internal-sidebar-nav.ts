import { instalasiNuklearSubmodules } from "@/app/modules/instalasi-nuklear/data";
import { kawalseliaSubmodules } from "@/app/modules/kawalselia/data";
import { penguatkuasaanSubmodules } from "@/app/modules/penguatkuasaan/data";
import { pengurusanSumberManusiaSubmodules } from "@/app/modules/pengurusan-sumber-manusia/data";
import { perlesenanSubmodules } from "@/app/modules/perlesenan/data";
import { getInternalModules } from "@/lib/internal-modules/catalog";
import { normalizeUiLabel } from "@/lib/internal-modules/text";

export type SidebarNavChild = {
  href: string;
  label: string;
};

export type SidebarNavItem = {
  href: string;
  label: string;
  children?: SidebarNavChild[];
};

export type SidebarNavSection = {
  label: string;
  items: SidebarNavItem[];
};

type SubmoduleWithTitle = {
  slug: string;
  title: string;
};

function mapSubmodules(baseHref: string, submodules: readonly SubmoduleWithTitle[]) {
  return submodules.map((submodule) => ({
    href: `${baseHref}/${submodule.slug}`,
    label: normalizeUiLabel(submodule.title),
  }));
}

const internalCatalogModules = getInternalModules().map((moduleDef) => ({
  href: `/modules/${moduleDef.routeSlug}`,
  label: normalizeUiLabel(moduleDef.title),
  children: moduleDef.submodules.map((submodule) => ({
    href: `/modules/${moduleDef.routeSlug}/${submodule.slug}`,
    label: normalizeUiLabel(submodule.title),
  })),
}));

export const internalSidebarSections: SidebarNavSection[] = [
  {
    label: "Akses Cepat",
    items: [
      { href: "/dashboard/internal", label: "Dashboard" },
      { href: "/modules", label: "Kategori Modul" },
      { href: "/modules/perlesenan-dan-kawalselia", label: "Perlesenan & Kawalselia" },
    ],
  },
  {
    label: "Modul Utama",
    items: [
      {
        href: "/modules/perlesenan",
        label: "Perlesenan",
        children: mapSubmodules("/modules/perlesenan", perlesenanSubmodules),
      },
      {
        href: "/modules/kawalselia",
        label: "Kawalselia",
        children: mapSubmodules("/modules/kawalselia", kawalseliaSubmodules),
      },
      {
        href: "/modules/instalasi-nuklear",
        label: "Instalasi Nuklear",
        children: mapSubmodules("/modules/instalasi-nuklear", instalasiNuklearSubmodules),
      },
      {
        href: "/modules/penguatkuasaan",
        label: "Penguatkuasaan",
        children: mapSubmodules("/modules/penguatkuasaan", penguatkuasaanSubmodules),
      },
      {
        href: "/modules/pengurusan-sumber-manusia",
        label: "Pengurusan Sumber Manusia",
        children: mapSubmodules(
          "/modules/pengurusan-sumber-manusia",
          pengurusanSumberManusiaSubmodules,
        ),
      },
    ],
  },
  {
    label: "Operasi Dalaman",
    items: internalCatalogModules,
  },
  {
    label: "Sokongan",
    items: [
      {
        href: "/modules/pentadbiran-sistem",
        label: "Pentadbiran Sistem",
        children: [
          {
            href: "/modules/pentadbiran-sistem/tukar-kata-laluan",
            label: "Tukar Kata Laluan",
          },
          { href: "/modules/pentadbiran-sistem/terima-aduan", label: "Terima Aduan" },
        ],
      },
      {
        href: "/modules/peti-pesanan",
        label: "Peti Pesanan",
        children: [{ href: "/modules/peti-pesanan/tugasan-saya", label: "Tugasan Saya" }],
      },
      { href: "/modules/kewangan", label: "Kewangan" },
      { href: "/modules/permit", label: "Permit" },
      { href: "/modules/pangkalan-data", label: "Pangkalan Data" },
      { href: "/modules/laporan-statistik", label: "Laporan dan Statistik" },
      { href: "/modules/peperiksaan-pensijilan", label: "Peperiksaan & Pensijilan" },
      { href: "/modules/pengiktirafan", label: "Pengiktirafan" },
      { href: "/modules/penilaian-lawatan-tapak", label: "Penilaian Lawatan Tapak" },
      { href: "/modules/pentadbir-dalaman", label: "Pentadbir Dalaman" },
      { href: "/modules/manual-pengguna", label: "Manual Pengguna" },
    ],
  },
];
