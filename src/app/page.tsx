import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <section className="rounded-2xl bg-[linear-gradient(125deg,#0f172a,#1e3a8a)] p-8 text-slate-100">
          <p className="text-sm font-semibold tracking-[0.14em] text-slate-300">
            EATOM APP
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">Modules App Router</h1>
          <p className="mt-3 max-w-3xl text-sm text-slate-200">
            Struktur aplikasi telah dipindahkan kepada routing berasaskan modul.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/modules/perlesenan"
              className="inline-flex rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-100"
            >
              Modul Perlesenan
            </Link>
            <Link
              href="/modules/kawalselia"
              className="inline-flex rounded-lg border border-white/40 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
            >
              Modul Kawalselia
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
