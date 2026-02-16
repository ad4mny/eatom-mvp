import Link from "next/link";

type InternalModulePlaceholderViewProps = {
  title: string;
  description: string;
  backHref?: string;
  backLabel?: string;
  notes: string[];
  ctaHref?: string;
  ctaLabel?: string;
};

export default function InternalModulePlaceholderView({
  title,
  description,
  backHref = "/dashboard/internal",
  backLabel = "Kembali Ke Dashboard eATOM",
  notes,
  ctaHref,
  ctaLabel,
}: Readonly<InternalModulePlaceholderViewProps>) {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-[var(--module-content-width)] space-y-6">
        <section className="rounded-2xl bg-[linear-gradient(120deg,#1e293b,#334155)] p-7 text-slate-50">
          <p className="text-xs font-semibold tracking-[0.16em] text-slate-300">eATOM</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">{title}</h1>
          <p className="mt-2 text-sm text-slate-200">{description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link
              href={backHref}
              className="inline-flex rounded-lg border border-white/40 px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
            >
              {backLabel}
            </Link>
            {ctaHref && ctaLabel ? (
              <Link
                href={ctaHref}
                className="inline-flex rounded-lg bg-white px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-100"
              >
                {ctaLabel}
              </Link>
            ) : null}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">Skop Awal</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            {notes.map((item) => (
              <li key={item} className="rounded-md border border-slate-100 bg-slate-50 px-3 py-2">
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
