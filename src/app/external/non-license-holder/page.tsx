import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  getNonLicenseQuickProcessLinks,
  nonLicenseSubmodules,
  type NonLicenseSubmoduleSlug,
} from "../_lib/non-license-holder";

export default function NonLicenseHolderIndexPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Process Launcher - Bukan Pemegang Lesen</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {nonLicenseSubmodules.map((submodule) => {
          const quickLinks = getNonLicenseQuickProcessLinks(
            submodule.slug as NonLicenseSubmoduleSlug,
          );

          return (
            <div key={submodule.slug} className="rounded-lg border border-slate-200 bg-slate-50 p-3">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-900">{submodule.title}</p>
                  <p className="text-xs text-slate-600">{submodule.description}</p>
                </div>
                <Link
                  href={`/external/non-license-holder/${submodule.slug}`}
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
                    className="inline-flex rounded-md border border-indigo-300 bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-800 hover:bg-indigo-100"
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
