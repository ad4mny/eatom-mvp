import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const portals = [
  {
    title: "Internal ERP",
    description:
      "Akses dalaman untuk modul enterprise eATOM termasuk Perlesenan dan Kawalselia.",
    href: "/erp/dashboard",
    cta: "Buka Internal ERP",
    tone: "from-teal-800 to-cyan-700",
  },
  {
    title: "External - License Holder",
    description:
      "Portal pemegang lesen untuk permohonan, maklumbalas, pemantauan radiologi dan akaun pengguna.",
    href: "/external/license-holder",
    cta: "Buka Portal Pemegang Lesen",
    tone: "from-indigo-800 to-blue-700",
  },
  {
    title: "External - Non-License Holder",
    description:
      "Portal awam untuk perkhidmatan bukan pemegang lesen seperti pelupusan, outreach dan lawatan tapak.",
    href: "/external/non-license-holder",
    cta: "Buka Portal Awam",
    tone: "from-emerald-800 to-lime-700",
  },
];

export default function LandingView() {
  return (
    <main className="min-h-screen px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <section className="rounded-2xl border border-slate-200 bg-[linear-gradient(130deg,#111827_0%,#134e4a_42%,#312e81_100%)] p-8 text-slate-100 shadow-lg">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-200">Sistem Aplikasi Jabatan Tenaga Atom</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">eATOM Unified Platform</h1>
          <p className="mt-3 max-w-3xl text-sm text-slate-200">
            Platform tunggal untuk operasi dalaman dan pengguna external dengan struktur navigasi enterprise yang konsisten.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <Link
              href="/login"
              className="inline-flex rounded-md bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-100"
            >
              Log Masuk
            </Link>
            <Link
              href="/external/dashboard"
              className="inline-flex rounded-md border border-white/40 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20"
            >
              Lihat External Dashboard
            </Link>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {portals.map((portal) => (
            <Card key={portal.title} className="overflow-hidden border-slate-200">
              <div className={`h-2 w-full bg-gradient-to-r ${portal.tone}`} />
              <CardContent className="space-y-3 p-5">
                <h2 className="text-lg font-bold text-slate-900">{portal.title}</h2>
                <p className="text-sm text-slate-600">{portal.description}</p>
                <Link
                  href={portal.href}
                  className="inline-flex rounded-md border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                >
                  {portal.cta}
                </Link>
              </CardContent>
            </Card>
          ))}
        </section>
      </div>
    </main>
  );
}
