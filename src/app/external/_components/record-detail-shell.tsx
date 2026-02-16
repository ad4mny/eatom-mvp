"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { ExternalWorkflowRecord, ProcessTab } from "../_lib/common";
import StickyRecordHeader from "./sticky-record-header";

type RecordDetailShellProps = {
  userTypeTitle: string;
  submoduleTitle: string;
  submoduleHref: string;
  baseHref: string;
  record: ExternalWorkflowRecord;
  tabs: ProcessTab[];
  children: React.ReactNode;
};

export default function RecordDetailShell({
  userTypeTitle,
  submoduleTitle,
  submoduleHref,
  baseHref,
  record,
  tabs,
  children,
}: Readonly<RecordDetailShellProps>) {
  const pathname = usePathname();

  return (
    <div className="space-y-4">
      <StickyRecordHeader
        userTypeTitle={userTypeTitle}
        submoduleTitle={submoduleTitle}
        submoduleHref={submoduleHref}
        record={record}
      />

      <Card>
        <CardContent className="border-b border-slate-100 p-2">
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => {
              const href = tab.slug ? `${baseHref}/${tab.slug}` : baseHref;
              const isActive = tab.slug ? pathname === href : pathname === baseHref;

              return (
                <Link
                  key={tab.label}
                  href={href}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-semibold transition-colors",
                    isActive
                      ? "bg-indigo-700 text-white"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200",
                  )}
                >
                  {tab.label}
                </Link>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-5">{children}</CardContent>
      </Card>
    </div>
  );
}
