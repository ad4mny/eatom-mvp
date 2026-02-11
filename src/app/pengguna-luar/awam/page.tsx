import Link from "next/link";
import { awamServices } from "./data";

export default function AwamOverviewPage() {
  return (
    <div className="space-y-6">
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Perkhidmatan</p>
          <p className="mt-2 text-3xl font-bold text-slate-900">7</p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Akses</p>
          <p className="mt-2 text-3xl font-bold text-slate-900">Awam</p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Status</p>
          <p className="mt-2 text-3xl font-bold text-slate-900">Mock</p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Modul</p>
          <p className="mt-2 text-3xl font-bold text-slate-900">Aktif</p>
        </article>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {awamServices.map((service) => (
          <article
            key={service.slug}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <h2 className="text-lg font-bold text-slate-900">{service.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{service.description}</p>
            <div className="mt-3 rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-600">
              {service.processes.length} proses kerja
            </div>
            <Link
              href={`/pengguna-luar/awam/${service.slug}`}
              className="mt-4 inline-flex rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Buka Perkhidmatan
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}
