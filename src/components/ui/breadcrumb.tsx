import Link from "next/link";
import { cn } from "@/lib/utils";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export function Breadcrumb({ items, className }: Readonly<BreadcrumbProps>) {
  return (
    <nav aria-label="Breadcrumb" className={cn("text-xs text-slate-600", className)}>
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link href={item.href} className="font-medium text-slate-700 hover:text-teal-700">
                  {item.label}
                </Link>
              ) : (
                <span className={cn(isLast ? "font-semibold text-slate-900" : "font-medium")}>{item.label}</span>
              )}
              {!isLast ? <span className="text-slate-400">/</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
