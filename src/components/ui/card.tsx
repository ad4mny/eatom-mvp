import { cn } from "@/lib/utils";

type DivProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: Readonly<DivProps>) {
  return (
    <div
      className={cn("rounded-xl border border-slate-200 bg-white shadow-sm", className)}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }: Readonly<DivProps>) {
  return <div className={cn("border-b border-slate-100 px-5 py-4", className)} {...props} />;
}

export function CardContent({ className, ...props }: Readonly<DivProps>) {
  return <div className={cn("px-5 py-4", className)} {...props} />;
}

export function CardTitle({ className, ...props }: Readonly<DivProps>) {
  return <h2 className={cn("text-lg font-bold text-slate-900", className)} {...props} />;
}

export function CardDescription({ className, ...props }: Readonly<DivProps>) {
  return <p className={cn("mt-1 text-sm text-slate-600", className)} {...props} />;
}
