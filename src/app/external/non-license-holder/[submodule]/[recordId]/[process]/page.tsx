import { notFound } from "next/navigation";
import ProcessPanel from "../../../../_components/process-panel";

const processContent: Record<string, { title: string; description: string; checkpoints: string[] }> = {
  semakan: {
    title: "Semakan Permohonan Awam",
    description: "Semakan awal dokumen dan maklumat pemohon awam.",
    checkpoints: [
      "Semak dokumen identiti atau surat sokongan.",
      "Sahkan kategori perkhidmatan yang dipilih.",
      "Tetapkan tindakan susulan jika data tidak lengkap.",
    ],
  },
  dokumen: {
    title: "Dokumen Sokongan",
    description: "Pengurusan dokumen lampiran permohonan awam.",
    checkpoints: [
      "Muat naik dan kemas kini dokumen.",
      "Pastikan dokumen mengikut format yang ditetapkan.",
      "Simpan jejak semakan dokumen.",
    ],
  },
  status: {
    title: "Status Permohonan",
    description: "Semakan status akhir permohonan beserta notifikasi pemohon.",
    checkpoints: [
      "Lihat status proses semasa.",
      "Semak komen atau query pegawai.",
      "Lengkapkan tindakan susulan sebelum tutup kes.",
    ],
  },
};

type NonLicenseProcessPageProps = {
  params: Promise<{ process: string }>;
};

export default async function NonLicenseProcessPage({
  params,
}: Readonly<NonLicenseProcessPageProps>) {
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
