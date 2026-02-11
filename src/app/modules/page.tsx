import Link from "next/link";

type MainModuleCard = {
  id: number;
  title: string;
  description: string;
  href: string;
  buttonLabel: string;
  buttonClassName: string;
};

const mainModules: MainModuleCard[] = [
  {
    id: 1,
    title: "SISTEM PERLESENAN DAN KAWALSELIA",
    description:
      "Kumpulan modul operasi perlesenan, kawalselia, penguatkuasaan, pelaporan, dan pentadbiran dalaman.",
    href: "/modules/perlesenan-dan-kawalselia",
    buttonLabel: "Buka Perlesenan dan Kawalselia",
    buttonClassName: "bg-blue-700 text-white hover:bg-blue-800",
  },
  {
    id: 2,
    title: "SISTEM PENGURUSAN SUMBER MANUSIA",
    description:
      "Kumpulan modul sumber manusia meliputi mesyuarat, perundangan, latihan, urusetia, dan pentadbir sistem.",
    href: "/modules/pengurusan-sumber-manusia",
    buttonLabel: "Buka Pengurusan Sumber Manusia",
    buttonClassName: "bg-sky-700 text-white hover:bg-sky-800",
  },
];

export default function ModulesPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-[var(--module-content-width)] rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-900">Senarai Sistem</h1>
        <p className="mt-2 text-sm text-slate-600">
          Pilih main modul untuk akses submodul dan proses kerja.
        </p>
        <p className="mt-2 rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-700">
          Akses Dalaman (Kakitangan) sahaja.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {mainModules.map((mainModule) => (
            <article key={mainModule.id} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <h2 className="mt-2 text-xl font-bold text-slate-900">{mainModule.title}</h2>
              <p className="mt-3 text-sm text-slate-600">{mainModule.description}</p>
              <Link
                href={mainModule.href}
                className={`mt-4 inline-flex rounded-lg px-4 py-2 text-sm font-semibold ${mainModule.buttonClassName}`}
              >
                {mainModule.buttonLabel}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
