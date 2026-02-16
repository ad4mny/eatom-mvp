import { cn } from "@/lib/utils";

type TableProps = React.TableHTMLAttributes<HTMLTableElement>;
type SectionProps = React.HTMLAttributes<HTMLTableSectionElement>;
type RowProps = React.HTMLAttributes<HTMLTableRowElement>;
type CellProps = React.TdHTMLAttributes<HTMLTableCellElement>;
type HeadCellProps = React.ThHTMLAttributes<HTMLTableCellElement>;

export function TableContainer({ className, ...props }: Readonly<React.HTMLAttributes<HTMLDivElement>>) {
  return <div className={cn("overflow-x-auto", className)} {...props} />;
}

export function Table({ className, ...props }: Readonly<TableProps>) {
  return <table className={cn("w-full min-w-[920px] border-collapse text-sm", className)} {...props} />;
}

export function TableHead({ className, ...props }: Readonly<SectionProps>) {
  return <thead className={cn("bg-slate-50", className)} {...props} />;
}

export function TableBody({ className, ...props }: Readonly<SectionProps>) {
  return <tbody className={cn(className)} {...props} />;
}

export function TableRow({ className, ...props }: Readonly<RowProps>) {
  return <tr className={cn("border-b border-slate-100", className)} {...props} />;
}

export function TableHeaderCell({ className, ...props }: Readonly<HeadCellProps>) {
  return (
    <th
      className={cn("px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-slate-500", className)}
      {...props}
    />
  );
}

export function TableCell({ className, ...props }: Readonly<CellProps>) {
  return <td className={cn("px-3 py-3 align-top text-slate-700", className)} {...props} />;
}
