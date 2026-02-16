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
  accent?: "teal" | "indigo";
  className?: string;
};

export default function SecondaryTabs({
  tabs,
  accent = "teal",
  className,
}: Readonly<SecondaryTabsProps>) {
  const pathname = usePathname();

  const activeCardClass = accent === "teal" ? "border-teal-200 bg-teal-50" : "border-indigo-200 bg-indigo-50";
  const activeTitleClass = accent === "teal" ? "text-teal-800" : "text-indigo-800";

  return (
    <div className={cn("grid gap-2 md:grid-cols-2 xl:grid-cols-4", className)}>
      {tabs.map((tab) => {
        const isActive = pathname === tab.href || pathname.startsWith(`${tab.href}/`);
        return (
          <Card
            key={tab.slug}
            className={cn(
              "rounded-lg border transition-colors",
              isActive
                ? activeCardClass
                : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50",
            )}
          >
            <CardContent>
              <Link href={tab.href}>
                <p className={cn("text-sm font-semibold", isActive ? activeTitleClass : "text-slate-900")}>
                  {tab.title}
                </p>
                <p className="mt-1 text-xs text-slate-600">{tab.description}</p>
              </Link>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
