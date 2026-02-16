import Link from "next/link";
import type { DashboardSection } from "@/lib/internal-modules/types";
import { normalizeUiLabel } from "@/lib/internal-modules/text";

export default function DashboardSectionList({
  sections,
}: Readonly<{
  sections: DashboardSection[];
}>) {
  return (
    <section className="space-y-4">
      {sections.map((section) => (
        <article key={section.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold text-slate-900">{normalizeUiLabel(section.title)}</p>
          <p className="mt-2 text-sm text-slate-600">{section.description}</p>
          <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {section.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 transition-colors hover:border-blue-300 hover:bg-blue-50"
              >
                <p className="font-semibold text-slate-900">{normalizeUiLabel(link.label)}</p>
                <p className="mt-1 text-xs text-slate-600">{link.description}</p>
              </Link>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}
