import { Badge } from "@/components/ui/badge";

type ProcessPanelProps = {
  title: string;
  description: string;
  checkpoints: string[];
};

export default function ProcessPanel({
  title,
  description,
  checkpoints,
}: Readonly<ProcessPanelProps>) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <h2 className="text-lg font-bold text-slate-900">{title}</h2>
        <Badge tone="muted">Proses Kerja</Badge>
      </div>
      <p className="text-sm text-slate-700">{description}</p>
      <div className="grid gap-2">
        {checkpoints.map((item) => (
          <div key={item} className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
