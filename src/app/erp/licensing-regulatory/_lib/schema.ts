export type Worker = {
  workerId: string;
  fullName: string;
  employer: string;
  position: string;
  workerCategory: "PPS" | "PUK" | "PR";
  doseRecordIds: string[];
  licensingStatusIds: string[];
};

export type DoseRecord = {
  doseRecordId: string;
  workerId: string;
  monitoringPeriod: string;
  hp10mSv: number;
  hp007mSv: number;
  hp003mSv: number;
  doseStatus: "Normal" | "Perlu Semakan";
  reportedAt: string;
};

export type LicensingStatus = {
  licensingStatusId: string;
  workerId: string;
  referenceNo: string;
  subModule: "perlesenan" | "kawalselia" | "permit" | "peperiksaan";
  serviceType: string;
  status: "new" | "review" | "query" | "approved" | "rejected";
  submittedAt: string;
  updatedAt: string;
};

export type UnifiedSchema = {
  workers: Worker[];
  doseRecords: DoseRecord[];
  licensingStatuses: LicensingStatus[];
};

export const unifiedSchema: UnifiedSchema = {
  workers: [
    {
      workerId: "WK-001",
      fullName: "Nur Aisyah Binti Hamzah",
      employer: "Radiotech Solutions Sdn Bhd",
      position: "Pegawai Perlindungan Sinaran",
      workerCategory: "PPS",
      doseRecordIds: ["DR-001", "DR-002"],
      licensingStatusIds: ["LS-001", "LS-005"],
    },
    {
      workerId: "WK-002",
      fullName: "Mohd Faris Bin Rahman",
      employer: "Nuklear Medix Sdn Bhd",
      position: "Pengendali Ujian Kebocoran",
      workerCategory: "PUK",
      doseRecordIds: ["DR-003"],
      licensingStatusIds: ["LS-002", "LS-006"],
    },
    {
      workerId: "WK-003",
      fullName: "Siti Hajar Binti Zakaria",
      employer: "Gamma Inspection Services",
      position: "Pengendali Reaktor",
      workerCategory: "PR",
      doseRecordIds: ["DR-004"],
      licensingStatusIds: ["LS-003", "LS-007"],
    },
    {
      workerId: "WK-004",
      fullName: "Muhammad Irfan Bin Yusof",
      employer: "Sinar Delta Engineering",
      position: "Pegawai Teknikal",
      workerCategory: "PPS",
      doseRecordIds: ["DR-005"],
      licensingStatusIds: ["LS-004", "LS-008"],
    },
  ],
  doseRecords: [
    {
      doseRecordId: "DR-001",
      workerId: "WK-001",
      monitoringPeriod: "2026-Q1",
      hp10mSv: 2.1,
      hp007mSv: 3.2,
      hp003mSv: 4.5,
      doseStatus: "Normal",
      reportedAt: "2026-02-03",
    },
    {
      doseRecordId: "DR-002",
      workerId: "WK-001",
      monitoringPeriod: "2025-Q4",
      hp10mSv: 2.6,
      hp007mSv: 3.8,
      hp003mSv: 5.2,
      doseStatus: "Normal",
      reportedAt: "2025-12-23",
    },
    {
      doseRecordId: "DR-003",
      workerId: "WK-002",
      monitoringPeriod: "2026-Q1",
      hp10mSv: 4.8,
      hp007mSv: 6.4,
      hp003mSv: 7.9,
      doseStatus: "Perlu Semakan",
      reportedAt: "2026-01-29",
    },
    {
      doseRecordId: "DR-004",
      workerId: "WK-003",
      monitoringPeriod: "2026-Q1",
      hp10mSv: 3.3,
      hp007mSv: 4.2,
      hp003mSv: 5.8,
      doseStatus: "Normal",
      reportedAt: "2026-02-08",
    },
    {
      doseRecordId: "DR-005",
      workerId: "WK-004",
      monitoringPeriod: "2026-Q1",
      hp10mSv: 1.7,
      hp007mSv: 2.6,
      hp003mSv: 3.4,
      doseStatus: "Normal",
      reportedAt: "2026-02-05",
    },
  ],
  licensingStatuses: [
    {
      licensingStatusId: "LS-001",
      workerId: "WK-001",
      referenceNo: "LES-2026-0001",
      subModule: "perlesenan",
      serviceType: "Permohonan Lesen Baharu",
      status: "review",
      submittedAt: "2026-02-02",
      updatedAt: "2026-02-10",
    },
    {
      licensingStatusId: "LS-002",
      workerId: "WK-002",
      referenceNo: "LES-2026-0002",
      subModule: "perlesenan",
      serviceType: "Pembaharuan Lesen",
      status: "query",
      submittedAt: "2026-02-01",
      updatedAt: "2026-02-11",
    },
    {
      licensingStatusId: "LS-003",
      workerId: "WK-003",
      referenceNo: "KWS-2026-0141",
      subModule: "kawalselia",
      serviceType: "Pemeriksaan Tapak",
      status: "review",
      submittedAt: "2026-02-03",
      updatedAt: "2026-02-12",
    },
    {
      licensingStatusId: "LS-004",
      workerId: "WK-004",
      referenceNo: "KWS-2026-0142",
      subModule: "kawalselia",
      serviceType: "Permohonan Kebenaran",
      status: "approved",
      submittedAt: "2026-01-25",
      updatedAt: "2026-02-07",
    },
    {
      licensingStatusId: "LS-005",
      workerId: "WK-001",
      referenceNo: "PRM-2026-0320",
      subModule: "permit",
      serviceType: "Permit Import Bahan",
      status: "review",
      submittedAt: "2026-02-04",
      updatedAt: "2026-02-13",
    },
    {
      licensingStatusId: "LS-006",
      workerId: "WK-002",
      referenceNo: "PRM-2026-0321",
      subModule: "permit",
      serviceType: "Permit Pengangkutan",
      status: "new",
      submittedAt: "2026-02-09",
      updatedAt: "2026-02-09",
    },
    {
      licensingStatusId: "LS-007",
      workerId: "WK-003",
      referenceNo: "EXM-2026-0188",
      subModule: "peperiksaan",
      serviceType: "Pendaftaran Peperiksaan PR",
      status: "approved",
      submittedAt: "2026-01-20",
      updatedAt: "2026-02-01",
    },
    {
      licensingStatusId: "LS-008",
      workerId: "WK-004",
      referenceNo: "EXM-2026-0189",
      subModule: "peperiksaan",
      serviceType: "Pembaharuan CEP",
      status: "review",
      submittedAt: "2026-02-06",
      updatedAt: "2026-02-11",
    },
  ],
};
