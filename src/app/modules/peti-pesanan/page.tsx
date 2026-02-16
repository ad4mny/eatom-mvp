import Link from "next/link";

export default function PetiPesananPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-[var(--module-content-width)] space-y-6">
        <section className="rounded-2xl bg-[linear-gradient(120deg,#0f172a,#1e293b)] p-7 text-slate-50">
          <p className="text-xs font-semibold tracking-[0.16em] text-slate-300">eATOM</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">Peti Pesanan</h1>
          <p className="mt-2 text-sm text-slate-200">
            Paparan tugasan dan status tindakan semasa untuk pegawai.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link
              href="/dashboard/internal"
              className="inline-flex rounded-lg border border-white/40 px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
            >
              Kembali Ke Dashboard eATOM
            </Link>
            <Link
              href="/modules/peti-pesanan/tugasan-saya"
              className="inline-flex rounded-lg bg-white px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-100"
            >
              Buka Tugasan Saya
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
