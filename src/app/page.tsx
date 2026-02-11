import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <section className="rounded-2xl bg-[linear-gradient(125deg,#0f172a,#1e3a8a)] p-8 text-slate-100">
          <p className="text-sm font-semibold tracking-[0.14em] text-slate-300">
            SISTEM PERLESENAN DAN KAWALSELIA / PENGURUSAN SUMBER MANUSIA
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">Portal Akses Sistem</h1>
          <p className="mt-3 max-w-3xl text-sm text-slate-200">
            Sistem ini mempunyai akses Dalaman (Kakitangan), PL (Pemegang Lesen),
            dan Orang Awam (Bukan Pemegang Lesen).
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <article className="rounded-xl border border-white/20 bg-white/10 p-4">
              <h2 className="text-lg font-bold">Akses Dalaman (Kakitangan)</h2>
              <p className="mt-1 text-sm text-slate-200">
                Akses ke semua modul operasi dalaman seperti Perlesenan, Kawalselia,
                Kewangan, Pangkalan Data dan lain-lain.
              </p>
            </article>
            <article className="rounded-xl border border-white/20 bg-white/10 p-4">
              <h2 className="text-lg font-bold">Akses PL</h2>
              <p className="mt-1 text-sm text-slate-200">
                Akses modul pemegang lesen: permohonan, maklumbalas/kemaskini,
                pemantauan radiologi, akaun, dan manual pengguna.
              </p>
            </article>
            <article className="rounded-xl border border-white/20 bg-white/10 p-4">
              <h2 className="text-lg font-bold">Akses Orang Awam</h2>
              <p className="mt-1 text-sm text-slate-200">
                Akses modul permohonan awam seperti pelupusan, penceramah, outreach,
                latihan industri, pengecualian Akta 304, dan lawatan tapak.
              </p>
            </article>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/login"
              className="inline-flex rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-100"
            >
              Log Masuk
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
