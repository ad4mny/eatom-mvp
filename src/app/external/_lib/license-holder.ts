import {
  defaultProcessTabs,
  type ExternalWorkflowRecord,
  type WorkflowStatus,
} from "./common";

export type LicenseHolderSubmodule = {
  slug: string;
  title: string;
  description: string;
  focus: string;
};

export const licenseHolderSubmodules: LicenseHolderSubmodule[] = [
  {
    slug: "permohonan",
    title: "Permohonan",
    description: "Permohonan lesen, pengiktirafan, pendaftaran dan kebenaran.",
    focus: "Permohonan Lesen dan Pengiktirafan",
  },
  {
    slug: "maklumbalas-kemaskini",
    title: "Maklumbalas & Kemaskini",
    description: "Maklumbalas pemilikan, pelupusan, notis dan pemeriksaan.",
    focus: "Maklumbalas Operasi dan Data",
  },
  {
    slug: "pemantauan-radiologi",
    title: "Pemantauan Radiologi",
    description: "Permonitoran alam sekitar, tapak dan laporan radiologi.",
    focus: "Pemantauan Radiologi Syarikat",
  },
  {
    slug: "akaun-pengguna",
    title: "Akaun Pengguna",
    description: "Profil syarikat, pekerja, aset/radas dan salinan sijil lesen.",
    focus: "Pengurusan Akaun dan Aset",
  },
];

export type LicenseHolderSubmoduleSlug = (typeof licenseHolderSubmodules)[number]["slug"];

const sampleStatuses: WorkflowStatus[] = ["review", "query", "approved", "new", "review"];
const sampleDates = ["2026-02-03", "2026-02-06", "2026-02-10", "2026-02-12", "2026-02-14"];

function buildRecords(): Record<LicenseHolderSubmoduleSlug, ExternalWorkflowRecord[]> {
  return licenseHolderSubmodules.reduce(
    (accumulator, submodule, index) => {
      const records = [0, 1, 2].map((itemIndex) => {
        const refNumber = index * 3 + itemIndex + 1;
        const status = sampleStatuses[(index + itemIndex) % sampleStatuses.length];
        const submittedAt = sampleDates[(index + itemIndex) % sampleDates.length];

        return {
          recordId: `PL-${String(refNumber).padStart(4, "0")}`,
          applicantName: [
            "Nur Aisyah Binti Hamzah",
            "Faris Bin Rahman",
            "Siti Hajar Binti Zakaria",
          ][itemIndex],
          organization: [
            "Radiotech Solutions Sdn Bhd",
            "Nuklear Medix Sdn Bhd",
            "Gamma Inspection Services",
          ][itemIndex],
          serviceType: `${submodule.focus} - Rekod ${itemIndex + 1}`,
          status,
          submittedAt,
          updatedAt: submittedAt,
          processTabs: defaultProcessTabs,
        } satisfies ExternalWorkflowRecord;
      });

      accumulator[submodule.slug as LicenseHolderSubmoduleSlug] = records;
      return accumulator;
    },
    {} as Record<LicenseHolderSubmoduleSlug, ExternalWorkflowRecord[]>,
  );
}

const licenseHolderRecords = buildRecords();

export function getLicenseHolderSubmoduleBySlug(slug: string) {
  return licenseHolderSubmodules.find((submodule) => submodule.slug === slug);
}

export function getLicenseHolderRecordsBySubmodule(submoduleSlug: LicenseHolderSubmoduleSlug) {
  return licenseHolderRecords[submoduleSlug] ?? [];
}

export function getLicenseHolderRecordById(submoduleSlug: LicenseHolderSubmoduleSlug, recordId: string) {
  return getLicenseHolderRecordsBySubmodule(submoduleSlug).find((record) => record.recordId === recordId);
}

export function getLicenseHolderQuickProcessLinks(submoduleSlug: LicenseHolderSubmoduleSlug) {
  return getLicenseHolderRecordsBySubmodule(submoduleSlug)
    .slice(0, 2)
    .flatMap((record) =>
      record.processTabs
        .filter((tab) => tab.slug)
        .slice(0, 2)
        .map((tab) => ({
          label: `${tab.label} (${record.recordId})`,
          href: `/external/license-holder/${submoduleSlug}/${record.recordId}/${tab.slug}`,
        })),
    );
}
