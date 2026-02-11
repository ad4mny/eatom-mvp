import Link from "next/link";
import { awamServices } from "./data";

export default function AwamLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-[var(--module-content-width)]">
        <section className="rounded-2xl bg-[linear-gradient(120deg,#1e3a8a,#2563eb)] p-7 text-blue-50">
          <p className="text-xs font-semibold tracking-[0.16em] text-blue-200">
            AKSES PENGGUNA LUAR (BUKAN PEMEGANG LESEN / ORANG AWAM)
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">Orang Awam</h1>
          <p className="mt-2 max-w-3xl text-sm text-blue-100">
            Permohonan awam merangkumi pelupusan, penceramah, outreach, latihan industri,
            pengecualian Akta 304, lesen perubatan, dan penilaian lawatan tapak.
          </p>
        </section>

        <nav className="mt-5 overflow-x-auto rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
          <ul className="flex min-w-max gap-2">
            <li>
              <Link
                href="/pengguna-luar/awam"
                className="inline-flex rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
              >
                Ringkasan
              </Link>
            </li>
            {awamServices.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/pengguna-luar/awam/${service.slug}`}
                  className="inline-flex rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <section className="mt-5">{children}</section>
      </div>
    </main>
  );
}
