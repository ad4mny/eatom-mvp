"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainModules } from "@/config/erp-main-modules";
import { cn } from "@/lib/utils";

export default function MainSidebar() {
  const pathname = usePathname();

  return (
    <aside className="border-r border-slate-200 bg-white/90 backdrop-blur lg:min-h-screen">
      <div className="sticky top-0 space-y-4 border-b border-slate-200 bg-white/95 p-4 lg:border-b-0">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">eATOM ERP</p>
        <h1 className="text-lg font-bold text-slate-900">Sistem Aplikasi Jabatan Tenaga Atom</h1>
        <p className="text-xs text-slate-600">Primary Navigation: 8 Main Modules</p>
      </div>

      <nav className="space-y-1 p-3" aria-label="Main Module Navigation">
        {mainModules.map((module) => {
          const isActive = pathname === module.href || pathname.startsWith(`${module.href}/`);
          return (
            <Link
              key={module.id}
              href={module.href}
              className={cn(
                "block rounded-lg border px-3 py-3 transition-colors",
                isActive
                  ? "border-teal-200 bg-teal-50"
                  : "border-transparent bg-white hover:border-slate-200 hover:bg-slate-50",
              )}
            >
              <p className={cn("text-sm font-semibold", isActive ? "text-teal-800" : "text-slate-900")}>{module.title}</p>
              <p className="mt-1 text-xs text-slate-600">{module.description}</p>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
