import { cn } from "@/lib/utils";

type BadgeTone = "default" | "success" | "warning" | "danger" | "muted";

type BadgeProps = {
  children: React.ReactNode;
  tone?: BadgeTone;
  className?: string;
};

const toneClasses: Record<BadgeTone, string> = {
  default: "bg-teal-100 text-teal-800",
  success: "bg-emerald-100 text-emerald-800",
  warning: "bg-amber-100 text-amber-800",
  danger: "bg-rose-100 text-rose-800",
  muted: "bg-slate-100 text-slate-700",
};

export function Badge({ children, tone = "default", className }: Readonly<BadgeProps>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide",
        toneClasses[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
