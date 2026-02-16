"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { secondaryTabs } from "../_lib/navigation";
import { cn } from "@/lib/utils";

export default function SecondaryTabs() {
  const pathname = usePathname();

  return (
    <Card>
      <CardContent className="grid gap-2 p-2 md:grid-cols-4">
        {secondaryTabs.map((tab) => {
          const isActive = pathname === tab.href || pathname.startsWith(`${tab.href}/`);
          return (
            <Link
              key={tab.slug}
              href={tab.href}
              className={cn(
                "rounded-lg border px-3 py-3 transition-colors",
                isActive
                  ? "border-teal-200 bg-teal-50"
                  : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50",
              )}
            >
              <p className={cn("text-sm font-semibold", isActive ? "text-teal-800" : "text-slate-900")}>{tab.label}</p>
              <p className="mt-1 text-xs text-slate-600">{tab.description}</p>
            </Link>
          );
        })}
      </CardContent>
    </Card>
  );
}
