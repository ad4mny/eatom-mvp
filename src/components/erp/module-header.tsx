import { Card, CardContent } from "@/components/ui/card";

type ModuleHeaderProps = {
  title: string;
  subtitle: string;
};

export default function ModuleHeader({ title, subtitle }: Readonly<ModuleHeaderProps>) {
  return (
    <Card className="border-none bg-[linear-gradient(120deg,#0f172a_0%,#115e59_55%,#0ea5a4_100%)] text-slate-50 shadow-lg">
      <CardContent className="px-6 py-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-200">Main Module</p>
        <h1 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">{title}</h1>
        <p className="mt-2 max-w-3xl text-sm text-teal-50/90">{subtitle}</p>
      </CardContent>
    </Card>
  );
}
