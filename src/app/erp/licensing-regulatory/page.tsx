import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { secondaryTabs } from "./_lib/navigation";
import { getQuickProcessLinks } from "./_lib/records";

export default function LicensingRegulatoryPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Process Launcher (Two-Click Access)</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {secondaryTabs.map((tab) => {
          const quickLinks = getQuickProcessLinks(tab.slug);

          return (
            <div key={tab.slug} className="rounded-lg border border-slate-200 bg-slate-50 p-3">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-900">{tab.label}</p>
                  <p className="text-xs text-slate-600">{tab.description}</p>
                </div>
                <Link
                  href={tab.href}
                  className="inline-flex rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100"
                >
                  Buka Sub-Module
                </Link>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="inline-flex rounded-md border border-teal-300 bg-teal-50 px-3 py-1.5 text-xs font-semibold text-teal-800 hover:bg-teal-100"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
