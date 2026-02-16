import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ModuleHeader from "./module-header";

type ModulePlaceholderProps = {
  title: string;
  subtitle: string;
  highlights: string[];
};

export default function ModulePlaceholder({
  title,
  subtitle,
  highlights,
}: Readonly<ModulePlaceholderProps>) {
  return (
    <div className="space-y-4">
      <ModuleHeader title={title} subtitle={subtitle} />

      <Card>
        <CardHeader>
          <CardTitle>Roadmap Modul</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {highlights.map((item) => (
            <div key={item} className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">
              {item}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
