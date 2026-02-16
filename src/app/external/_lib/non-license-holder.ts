import {
  defaultProcessTabs,
  type ExternalWorkflowRecord,
  type WorkflowStatus,
} from "./common";

export type NonLicenseSubmodule = {
  slug: string;
  title: string;
  description: string;
  focus: string;
};

export const nonLicenseSubmodules: NonLicenseSubmodule[] = [
  {
    slug: "kebenaran-pelupusan",
    title: "Kebenaran Pelupusan",
    description: "Permohonan pelupusan untuk bukan pemegang lesen.",
    focus: "Kebenaran Pelupusan Awam",
  },
  {
    slug: "permohonan-penceramah",
    title: "Permohonan Penceramah",
    description: "Permohonan penceramah program keselamatan sinaran.",
    focus: "Permohonan Penceramah",
  },
  {
    slug: "program-outreach-promosi",
    title: "Program Outreach & Promosi",
    description: "Permohonan lawatan, kursus dan pameran awam.",
    focus: "Outreach dan Promosi",
  },
  {
    slug: "latihan-industri-fellowship",
    title: "Latihan Industri / Fellowship",
    description: "Permohonan latihan industri atau fellowship.",
    focus: "Latihan Industri",
  },
  {
    slug: "pengecualian-akta-304",
    title: "Pengecualian Akta 304",
    description: "Permohonan pengecualian kategori di bawah Akta 304.",
    focus: "Pengecualian Akta 304",
  },
  {
    slug: "lesen-tujuan-perubatan",
    title: "Lesen Tujuan Perubatan",
    description: "Permohonan lesen aktiviti/peralatan untuk tujuan perubatan.",
    focus: "Lesen Perubatan",
  },
  {
    slug: "penilaian-lawatan-tapak",
    title: "Penilaian Lawatan Tapak",
    description: "Permohonan penilaian lawatan tapak bagi orang awam.",
    focus: "Lawatan Tapak Awam",
  },
];

export type NonLicenseSubmoduleSlug = (typeof nonLicenseSubmodules)[number]["slug"];

const sampleStatuses: WorkflowStatus[] = ["new", "review", "query", "approved", "review", "new", "approved"];
const sampleDates = ["2026-02-01", "2026-02-05", "2026-02-08", "2026-02-09", "2026-02-11", "2026-02-13", "2026-02-15"];

function buildRecords(): Record<NonLicenseSubmoduleSlug, ExternalWorkflowRecord[]> {
  return nonLicenseSubmodules.reduce(
    (accumulator, submodule, index) => {
      const records = [0, 1].map((itemIndex) => {
        const refNumber = index * 2 + itemIndex + 1;
        const status = sampleStatuses[(index + itemIndex) % sampleStatuses.length];
        const submittedAt = sampleDates[(index + itemIndex) % sampleDates.length];

        return {
          recordId: `AW-${String(refNumber).padStart(4, "0")}`,
          applicantName: ["Ali Bin Salleh", "Farah Binti Osman"][itemIndex],
          organization: ["Universiti Kebangsaan", "SMK Taman Putra"][itemIndex],
          serviceType: `${submodule.focus} - Rekod ${itemIndex + 1}`,
          status,
          submittedAt,
          updatedAt: submittedAt,
          processTabs: defaultProcessTabs,
        } satisfies ExternalWorkflowRecord;
      });

      accumulator[submodule.slug as NonLicenseSubmoduleSlug] = records;
      return accumulator;
    },
    {} as Record<NonLicenseSubmoduleSlug, ExternalWorkflowRecord[]>,
  );
}

const nonLicenseHolderRecords = buildRecords();

export function getNonLicenseSubmoduleBySlug(slug: string) {
  return nonLicenseSubmodules.find((submodule) => submodule.slug === slug);
}

export function getNonLicenseRecordsBySubmodule(submoduleSlug: NonLicenseSubmoduleSlug) {
  return nonLicenseHolderRecords[submoduleSlug] ?? [];
}

export function getNonLicenseRecordById(submoduleSlug: NonLicenseSubmoduleSlug, recordId: string) {
  return getNonLicenseRecordsBySubmodule(submoduleSlug).find((record) => record.recordId === recordId);
}

export function getNonLicenseQuickProcessLinks(submoduleSlug: NonLicenseSubmoduleSlug) {
  return getNonLicenseRecordsBySubmodule(submoduleSlug)
    .slice(0, 2)
    .flatMap((record) =>
      record.processTabs
        .filter((tab) => tab.slug)
        .slice(0, 2)
        .map((tab) => ({
          label: `${tab.label} (${record.recordId})`,
          href: `/external/non-license-holder/${submoduleSlug}/${record.recordId}/${tab.slug}`,
        })),
    );
}
