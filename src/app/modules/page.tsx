import Link from "next/link";

export default function ModulesPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-5xl rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-900">Senarai Modul</h1>
        <p className="mt-2 text-sm text-slate-600">
          Pilih modul untuk akses sub-modul dan proses kerja.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold tracking-wide text-blue-700">MODUL 1</p>
            <h2 className="mt-1 text-lg font-bold text-slate-900">Perlesenan</h2>
            <p className="mt-2 text-sm text-slate-600">
              Permohonan lesen, pendaftaran, pelan kecemasan, pelan sekuriti, dan
              sub-modul berkaitan.
            </p>
            <Link
              href="/modules/perlesenan"
              className="mt-4 inline-flex rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800"
            >
              Buka Perlesenan
            </Link>
          </article>

          <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold tracking-wide text-emerald-700">MODUL 2</p>
            <h2 className="mt-1 text-lg font-bold text-slate-900">Kawalselia</h2>
            <p className="mt-2 text-sm text-slate-600">
              18 sub-modul kawalselia termasuk kebenaran, notis, aduan,
              pemeriksaan, kesalahan, dan pemilikan.
            </p>
            <Link
              href="/modules/kawalselia"
              className="mt-4 inline-flex rounded-lg bg-emerald-700 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-800"
            >
              Buka Kawalselia
            </Link>
          </article>
        </div>
      </div>
    </main>
  );
}
