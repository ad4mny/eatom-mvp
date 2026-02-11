import Link from "next/link";

type ModuleCard = {
  number: number;
  title: string;
  description: string;
  href: string;
  buttonLabel: string;
  badgeClassName: string;
  buttonClassName: string;
};

const perlesenanKawalseliaModules: ModuleCard[] = [
  {
    number: 1,
    title: "Perlesenan",
    description:
      "Permohonan lesen, pendaftaran, pelan kecemasan, pelan sekuriti, dan modul berkaitan.",
    href: "/modules/perlesenan",
    buttonLabel: "Buka Perlesenan",
    badgeClassName: "text-blue-700",
    buttonClassName: "bg-blue-700 text-white hover:bg-blue-800",
  },
  {
    number: 2,
    title: "Kawalselia",
    description:
      "18 modul kawalselia termasuk kebenaran, notis, aduan, pemeriksaan, kesalahan, dan pemilikan.",
    href: "/modules/kawalselia",
    buttonLabel: "Buka Kawalselia",
    badgeClassName: "text-emerald-700",
    buttonClassName: "bg-emerald-700 text-white hover:bg-emerald-800",
  },
  {
    number: 3,
    title: "Instalasi Nuklear",
    description:
      "10 modul instalasi nuklear termasuk kebenaran, notis, penghantaran laporan, inventori, dan import/eksport.",
    href: "/modules/instalasi-nuklear",
    buttonLabel: "Buka Instalasi Nuklear",
    badgeClassName: "text-amber-700",
    buttonClassName: "bg-amber-700 text-white hover:bg-amber-800",
  },
  {
    number: 4,
    title: "Pengkompaunan",
    description: "Sistem berasingan untuk pengurusan pengkompaunan.",
    href: "/modules/pengkompaunan",
    buttonLabel: "Buka Pengkompaunan",
    badgeClassName: "text-rose-700",
    buttonClassName: "bg-rose-700 text-white hover:bg-rose-800",
  },
  {
    number: 5,
    title: "Penggeledahan",
    description:
      "Penggeledahan, tindakan terus, semakan ketua unit, pengarah, dan semua rekod penggeledahan.",
    href: "/modules/penggeledahan",
    buttonLabel: "Buka Penggeledahan",
    badgeClassName: "text-fuchsia-700",
    buttonClassName: "bg-fuchsia-700 text-white hover:bg-fuchsia-800",
  },
  {
    number: 6,
    title: "Siasatan & Pendakwaan",
    description:
      "Sistem berasingan untuk aliran Siasatan (IO hingga keputusan) dan Pendakwaan.",
    href: "/modules/siasatan-pendakwaan",
    buttonLabel: "Buka Siasatan & Pendakwaan",
    badgeClassName: "text-pink-700",
    buttonClassName: "bg-pink-700 text-white hover:bg-pink-800",
  },
  {
    number: 7,
    title: "Pengurusan Tindakbalas Nuklear - SPTN",
    description:
      "Aktiviti SPTN, output aduan, pasukan tindakbalas, pengujian pelan kecemasan, dan laporan berkaitan.",
    href: "/modules/pengurusan-tindakbalas-nuklear-sptn",
    buttonLabel: "Buka SPTN",
    badgeClassName: "text-violet-700",
    buttonClassName: "bg-violet-700 text-white hover:bg-violet-800",
  },
  {
    number: 8,
    title: "Permit",
    description: "Integrasi API dengan Sistem ePermit untuk aliran permit.",
    href: "/modules/permit",
    buttonLabel: "Buka Permit",
    badgeClassName: "text-cyan-700",
    buttonClassName: "bg-cyan-700 text-white hover:bg-cyan-800",
  },
  {
    number: 9,
    title: "Peperiksaan & Pensijilan",
    description: "Peperiksaan (PPS/PUK/PR), CEP, dan Audit Pematuhan Pusat Latihan.",
    href: "/modules/peperiksaan-pensijilan",
    buttonLabel: "Buka Peperiksaan & Pensijilan",
    badgeClassName: "text-orange-700",
    buttonClassName: "bg-orange-700 text-white hover:bg-orange-800",
  },
  {
    number: 10,
    title: "Pengiktirafan",
    description: "Pengiktirafan pekerja sinaran, PPB, dan tenaga pengajar.",
    href: "/modules/pengiktirafan",
    buttonLabel: "Buka Pengiktirafan",
    badgeClassName: "text-green-700",
    buttonClassName: "bg-green-700 text-white hover:bg-green-800",
  },
  {
    number: 11,
    title: "Penilaian Lawatan Tapak",
    description: "Penilaian lawatan tapak untuk Pemegang Lesen (PL) dan Orang Awam.",
    href: "/modules/penilaian-lawatan-tapak",
    buttonLabel: "Buka Penilaian Lawatan Tapak",
    badgeClassName: "text-blue-700",
    buttonClassName: "bg-blue-700 text-white hover:bg-blue-800",
  },
  {
    number: 12,
    title: "Kewangan",
    description:
      "Pembayaran fee Permohonan Lesen, Pengiktirafan Pekerja, Peperiksaan, termasuk integrasi online banking.",
    href: "/modules/kewangan",
    buttonLabel: "Buka Kewangan",
    badgeClassName: "text-amber-700",
    buttonClassName: "bg-amber-700 text-white hover:bg-amber-800",
  },
  {
    number: 13,
    title: "Pangkalan Data",
    description:
      "Maklumat syarikat, kemaskini data operasi, dan pengurusan inventori bahan/radas.",
    href: "/modules/pangkalan-data",
    buttonLabel: "Buka Pangkalan Data",
    badgeClassName: "text-indigo-700",
    buttonClassName: "bg-indigo-700 text-white hover:bg-indigo-800",
  },
  {
    number: 14,
    title: "Laporan dan Statistik",
    description:
      "Piagam, spesifikasi output, statistik, label/surat, data audit, dan prestasi penilai.",
    href: "/modules/laporan-statistik",
    buttonLabel: "Buka Laporan dan Statistik",
    badgeClassName: "text-purple-700",
    buttonClassName: "bg-purple-700 text-white hover:bg-purple-800",
  },
  {
    number: 15,
    title: "Pentadbir Dalaman",
    description: "Tugasan pegawai dan penentuan tempoh piagam pelanggan.",
    href: "/modules/pentadbir-dalaman",
    buttonLabel: "Buka Pentadbir Dalaman",
    badgeClassName: "text-slate-700",
    buttonClassName: "bg-slate-700 text-white hover:bg-slate-800",
  },
  {
    number: 16,
    title: "Manual Pengguna",
    description: "Panduan penggunaan sistem eATOM untuk kakitangan Atom Malaysia.",
    href: "/modules/manual-pengguna",
    buttonLabel: "Buka Manual Pengguna",
    badgeClassName: "text-emerald-700",
    buttonClassName: "bg-emerald-700 text-white hover:bg-emerald-800",
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
        <Link
          href="/modules"
          className="mt-3 inline-flex rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          Kembali Ke Senarai
        </Link>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {perlesenanKawalseliaModules.map((module) => (
            <article key={module.number} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h2 className="mt-1 text-lg font-bold text-slate-900">{module.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{module.description}</p>
              <Link
                href={module.href}
                className={`mt-4 inline-flex rounded-lg px-4 py-2 text-sm font-semibold ${module.buttonClassName}`}
              >
                {module.buttonLabel}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
