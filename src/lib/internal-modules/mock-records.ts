import statusData from "@/data/internal-modules/process-statuses.json";

const statuses = statusData.statuses;
const owners = statusData.owners;
const priorities = statusData.priorities;

export type ProcessRecord = {
  refNo: string;
  perkara: string;
  status: string;
  pemilik: string;
  keutamaan: string;
  kemaskini: string;
};

function hashText(value: string) {
  return Array.from(value).reduce((acc, current) => acc + current.charCodeAt(0), 0);
}

export function buildProcessRecords(processTitle: string): ProcessRecord[] {
  const hash = hashText(processTitle);

  return Array.from({ length: 3 }).map((_, index) => {
    const status = statuses[(hash + index) % statuses.length];
    const pemilik = owners[(hash + index) % owners.length];
    const keutamaan = priorities[(hash + index) % priorities.length];
    const day = String(10 - index).padStart(2, "0");

    return {
      refNo: `MOCK-${hash % 1000}-${index + 1}`,
      perkara: processTitle,
      status,
      pemilik,
      keutamaan,
      kemaskini: `${day} Feb 2026`,
    };
  });
}
