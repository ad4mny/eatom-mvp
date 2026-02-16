"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type SecondaryTabItem = {
  slug: string;
  title: string;
  description: string;
  href: string;
};

type SecondaryTabsProps = {
  tabs: SecondaryTabItem[];
};

export default function SecondaryTabs({ tabs }: Readonly<SecondaryTabsProps>) {
  const pathname = usePathname();

  return (
    <Card>
      <CardContent className="grid gap-2 p-2 md:grid-cols-2 xl:grid-cols-3">
        {tabs.map((tab) => {
          const isActive = pathname === tab.href || pathname.startsWith(`${tab.href}/`);
          return (
            <Link
              key={tab.slug}
              href={tab.href}
              className={cn(
                "rounded-lg border px-3 py-3 transition-colors",
                isActive
                  ? "border-indigo-200 bg-indigo-50"
                  : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50",
              )}
            >
              <p className={cn("text-sm font-semibold", isActive ? "text-indigo-800" : "text-slate-900")}>{tab.title}</p>
              <p className="mt-1 text-xs text-slate-600">{tab.description}</p>
            </Link>
          );
        })}
      </CardContent>
    </Card>
  );
}
