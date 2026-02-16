import { notFound } from "next/navigation";
import ProcessPanel from "../../../../_components/process-panel";

const processContent: Record<string, { title: string; description: string; checkpoints: string[] }> = {
  semakan: {
    title: "Semakan Permohonan",
    description: "Semakan dokumen dan data pemohon sebelum keputusan dikeluarkan.",
    checkpoints: [
      "Semak kesahihan dokumen sokongan.",
      "Pastikan data profil syarikat lengkap.",
      "Kenal pasti keperluan dokumen tambahan jika perlu.",
    ],
  },
  dokumen: {
    title: "Dokumen Sokongan",
    description: "Pengurusan dokumen lampiran dan jejak versi permohonan.",
    checkpoints: [
      "Muat naik dokumen baharu atau gantian.",
      "Sahkan format serta saiz fail yang diterima.",
      "Semak sejarah perubahan dokumen untuk audit.",
    ],
  },
  status: {
    title: "Status Permohonan",
    description: "Pemantauan status akhir beserta tindakan susulan yang diperlukan.",
    checkpoints: [
      "Semak status terkini permohonan.",
      "Lihat catatan query/kelulusan pegawai.",
      "Laksanakan tindakan susulan berdasarkan keputusan.",
    ],
  },
};

type LicenseHolderProcessPageProps = {
  params: Promise<{ process: string }>;
};

export default async function LicenseHolderProcessPage({
  params,
}: Readonly<LicenseHolderProcessPageProps>) {
  const { process } = await params;
  const content = processContent[process];

  if (!content) {
    notFound();
  }

  return (
    <ProcessPanel
      title={content.title}
      description={content.description}
      checkpoints={content.checkpoints}
    />
  );
}
