import Link from "next/link";

export default function PentadbiranSistemPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-[var(--module-content-width)] space-y-6">
        <section className="rounded-2xl bg-[linear-gradient(120deg,#0f172a,#1e293b)] p-7 text-slate-50">
          <p className="text-xs font-semibold tracking-[0.16em] text-slate-300">eATOM</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">Pentadbiran Sistem</h1>
          <p className="mt-2 text-sm text-slate-200">
            Akses pengurusan akaun dan aduan bagi operasi dalaman.
          </p>
          <Link
            href="/dashboard/internal"
            className="mt-4 inline-flex rounded-lg border border-white/40 px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
          >
            Kembali Ke Dashboard eATOM
          </Link>
        </section>

        <section className="grid gap-4 sm:grid-cols-2">
          <Link
            href="/modules/pentadbiran-sistem/tukar-kata-laluan"
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-colors hover:border-blue-300 hover:bg-blue-50"
          >
            <h2 className="text-lg font-bold text-slate-900">Tukar Kata Laluan</h2>
            <p className="mt-2 text-sm text-slate-600">
              Kemas kini kata laluan akaun pengguna dalaman.
            </p>
          </Link>
          <Link
            href="/modules/pentadbiran-sistem/terima-aduan"
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-colors hover:border-blue-300 hover:bg-blue-50"
          >
            <h2 className="text-lg font-bold text-slate-900">Terima Aduan</h2>
            <p className="mt-2 text-sm text-slate-600">
              Terima aduan baharu dan teruskan tindakan seterusnya.
            </p>
          </Link>
        </section>
      </div>
    </main>
  );
}
