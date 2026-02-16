export type ExternalMainModule = {
  id: string;
  title: string;
  description: string;
  href: string;
};

export const externalMainModules: ExternalMainModule[] = [
  {
    id: "dashboard",
    title: "Dashboard External",
    description: "Ringkasan aktiviti untuk semua pengguna luar.",
    href: "/external/dashboard",
  },
  {
    id: "license-holder",
    title: "Portal Pemegang Lesen",
    description: "Permohonan, maklumbalas, pemantauan radiologi dan akaun pengguna.",
    href: "/external/license-holder",
  },
  {
    id: "non-license-holder",
    title: "Portal Bukan Pemegang Lesen",
    description: "Perkhidmatan awam termasuk pelupusan, penceramah, outreach dan lawatan tapak.",
    href: "/external/non-license-holder",
  },
];
