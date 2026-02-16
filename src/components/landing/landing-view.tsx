import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const corporateInfo = [
  {
    title: "Mandat Korporat",
    description:
      "eATOM menyatukan proses pengawalseliaan, perlesenan dan pemantauan radiologi dalam satu platform bersepadu.",
  },
  {
    title: "Governans & Pematuhan",
    description:
      "Setiap aliran kerja dibina dengan jejak audit, kawalan akses berasaskan peranan dan standard pematuhan agensi.",
  },
  {
    title: "Perkhidmatan Digital",
    description:
      "Menyokong operasi dalaman serta perkhidmatan pengguna luar melalui pengalaman yang konsisten dan boleh skala.",
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
            Platform digital korporat bagi Jabatan Tenaga Atom untuk penyampaian perkhidmatan, pemantauan dan operasi
            pengawalseliaan berimpak tinggi.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <Link
              href="/login"
              className="inline-flex rounded-md bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-100"
            >
              Log Masuk
            </Link>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {corporateInfo.map((item) => (
            <Card key={item.title} className="overflow-hidden border-slate-200">
              <div className="h-2 w-full bg-gradient-to-r from-slate-800 via-teal-700 to-indigo-700" />
              <CardContent className="space-y-3 p-5">
                <h2 className="text-lg font-bold text-slate-900">{item.title}</h2>
                <p className="text-sm text-slate-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </section>
      </div>
    </main>
  );
}
