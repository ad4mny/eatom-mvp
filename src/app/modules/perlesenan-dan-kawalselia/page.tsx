import Link from "next/link";

type ModuleCard = {
  number: number;
  title: string;
  description: string;
  href: string;
};

const perlesenanKawalseliaModules: ModuleCard[] = [
  {
    number: 1,
    title: "Perlesenan",
    description:
      "Permohonan lesen, pendaftaran, pelan kecemasan, pelan sekuriti, dan modul berkaitan.",
    href: "/modules/perlesenan",
  },
  {
    number: 2,
    title: "Kawalselia",
    description:
      "18 modul kawalselia termasuk kebenaran, notis, aduan, pemeriksaan, kesalahan, dan pemilikan.",
    href: "/modules/kawalselia",
  },
  {
    number: 3,
    title: "Instalasi Nuklear",
    description:
      "10 modul instalasi nuklear termasuk kebenaran, notis, penghantaran laporan, inventori, dan import/eksport.",
    href: "/modules/instalasi-nuklear",
  },
  {
    number: 4,
    title: "Pengkompaunan",
    description: "Submodul penguatkuasaan untuk pengurusan pengkompaunan.",
    href: "/modules/penguatkuasaan/pengkompaunan",
  },
  {
    number: 5,
    title: "Penggeledahan",
    description:
      "Submodul penguatkuasaan bagi penggeledahan, tindakan terus, dan kelulusan.",
    href: "/modules/penguatkuasaan/penggeledahan",
  },
  {
    number: 6,
    title: "Siasatan & Pendakwaan",
    description:
      "Submodul penguatkuasaan untuk aliran siasatan dan pendakwaan.",
    href: "/modules/penguatkuasaan/siasatan-pendakwaan",
  },
  {
    number: 7,
    title: "Pengurusan Tindakbalas Nuklear - SPTN",
    description:
      "Aktiviti SPTN, output aduan, pasukan tindakbalas, pengujian pelan kecemasan, dan laporan berkaitan.",
    href: "/modules/penguatkuasaan/pengurusan-tindakbalas-nuklear-sptn",
  },
  {
    number: 8,
    title: "Permit",
    description: "Integrasi API dengan Sistem ePermit untuk aliran permit.",
    href: "/modules/permit",
  },
  {
    number: 9,
    title: "Peperiksaan & Pensijilan",
    description: "Peperiksaan (PPS/PUK/PR), CEP, dan Audit Pematuhan Pusat Latihan.",
    href: "/modules/peperiksaan-pensijilan",
  },
  {
    number: 10,
    title: "Pengiktirafan",
    description: "Pengiktirafan pekerja sinaran, PPB, dan tenaga pengajar.",
    href: "/modules/pengiktirafan",
  },
  {
    number: 11,
    title: "Penilaian Lawatan Tapak",
    description: "Penilaian lawatan tapak untuk Pemegang Lesen (PL) dan Orang Awam.",
    href: "/modules/penilaian-lawatan-tapak",
  },
  {
    number: 12,
    title: "Kewangan",
    description:
      "Pembayaran fee Permohonan Lesen, Pengiktirafan Pekerja, Peperiksaan, termasuk integrasi online banking.",
    href: "/modules/kewangan",
  },
  {
    number: 13,
    title: "Pangkalan Data",
    description:
      "Maklumat syarikat, kemaskini data operasi, dan pengurusan inventori bahan/radas.",
    href: "/modules/pangkalan-data",
  },
  {
    number: 14,
    title: "Laporan dan Statistik",
    description:
      "Piagam, spesifikasi output, statistik, label/surat, data audit, dan prestasi penilai.",
    href: "/modules/laporan-statistik",
  },
  {
    number: 15,
    title: "Pentadbir Dalaman",
    description: "Tugasan pegawai dan penentuan tempoh piagam pelanggan.",
    href: "/modules/pentadbir-dalaman",
  },
  {
    number: 16,
    title: "Manual Pengguna",
    description: "Panduan penggunaan sistem eATOM untuk kakitangan Atom Malaysia.",
    href: "/modules/manual-pengguna",
  },
];

export default function PerlesenanDanKawalseliaPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-[var(--module-content-width)] rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="mt-1 text-2xl font-bold text-slate-900">
          SISTEM PERLESENAN DAN KAWALSELIA
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          Kumpulan modul operasi sedia ada untuk urusan perlesenan, kawalselia, penguatkuasaan,
          pelaporan, dan pentadbiran dalaman.
        </p>
        <p className="mt-3 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700">
          Gunakan sidebar untuk navigasi modul/submodul tanpa perlu klik butang
          perantaraan.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {perlesenanKawalseliaModules.map((module) => (
            <Link
              key={module.number}
              href={module.href}
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition-colors hover:border-blue-300 hover:bg-blue-50"
            >
              <h2 className="mt-1 text-lg font-bold text-slate-900">{module.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{module.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
