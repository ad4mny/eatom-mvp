"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { ProcessTab, WorkflowRecord } from "../_lib/records";
import StickyRecordHeader from "./sticky-record-header";

type RecordDetailShellProps = {
  record: WorkflowRecord;
  submoduleTitle: string;
  tabs: ProcessTab[];
  children: React.ReactNode;
};

export default function RecordDetailShell({
  record,
  submoduleTitle,
  tabs,
  children,
}: Readonly<RecordDetailShellProps>) {
  const pathname = usePathname();
  const baseHref = `/erp/licensing-regulatory/${record.subModule}/${record.recordId}`;

  return (
    <div className="space-y-4">
      <StickyRecordHeader record={record} submoduleTitle={submoduleTitle} />

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
                      ? "bg-teal-700 text-white"
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
