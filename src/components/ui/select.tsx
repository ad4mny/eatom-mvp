import type { SelectHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Select({
  className,
  children,
  ...props
}: Readonly<SelectHTMLAttributes<HTMLSelectElement>>) {
  return (
    <select
      className={cn(
        "h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none ring-teal-600 focus:ring-2",
        className,
      )}
      {...props}
    >
      {children}
    </select>
  );
}
