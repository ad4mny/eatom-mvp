type LinePoint = {
  label: string;
  value: number;
};

type BarDatum = {
  label: string;
  value: number;
};

type DonutSegment = {
  label: string;
  value: number;
  color: string;
};

type LineChartCardProps = {
  title: string;
  subtitle: string;
  points: LinePoint[];
  strokeColor?: string;
  fillColor?: string;
};

type BarChartCardProps = {
  title: string;
  subtitle: string;
  data: BarDatum[];
  barColor?: string;
};

type DonutChartCardProps = {
  title: string;
  subtitle: string;
  segments: DonutSegment[];
};

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US").format(value);
}

export function LineChartCard({
  title,
  subtitle,
  points,
  strokeColor = "#2563eb",
  fillColor = "rgba(37,99,235,0.16)",
}: Readonly<LineChartCardProps>) {
  const safePoints = points.length > 0 ? points : [{ label: "-", value: 0 }];
  const width = 520;
  const height = 220;
  const padding = 24;
  const maxValue = Math.max(...safePoints.map((point) => point.value), 1);
  const stepX =
    safePoints.length > 1 ? (width - padding * 2) / (safePoints.length - 1) : 0;

  const coords = safePoints.map((point, index) => {
    const x = padding + index * stepX;
    const y = height - padding - (point.value / maxValue) * (height - padding * 2);
    return { ...point, x, y };
  });

  const line = coords.map((point) => `${point.x},${point.y}`).join(" ");
  const area = [
    `M ${coords[0]?.x ?? 0} ${height - padding}`,
    ...coords.map((point) => `L ${point.x} ${point.y}`),
    `L ${coords[coords.length - 1]?.x ?? 0} ${height - padding}`,
    "Z",
  ].join(" ");

  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-bold text-slate-900">{title}</h2>
      <p className="mt-1 text-sm text-slate-600">{subtitle}</p>

      <div className="mt-4 rounded-lg border border-slate-100 bg-slate-50 p-3">
        <svg viewBox={`0 0 ${width} ${height}`} className="h-52 w-full" aria-label={title}>
          <line
            x1={padding}
            y1={height - padding}
            x2={width - padding}
            y2={height - padding}
            stroke="#cbd5e1"
            strokeWidth="1"
          />
          <line
            x1={padding}
            y1={padding}
            x2={padding}
            y2={height - padding}
            stroke="#cbd5e1"
            strokeWidth="1"
          />
          <path d={area} fill={fillColor} />
          <polyline
            points={line}
            fill="none"
            stroke={strokeColor}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {coords.map((point) => (
            <g key={`${point.label}-${point.value}`}>
              <circle cx={point.x} cy={point.y} r="4" fill={strokeColor} />
            </g>
          ))}
        </svg>
      </div>

      <div
        className="mt-3 grid gap-2 text-xs text-slate-600"
        style={{ gridTemplateColumns: `repeat(${safePoints.length}, minmax(0, 1fr))` }}
      >
        {safePoints.map((point) => (
          <div key={`${point.label}-label`} className="text-center">
            <p className="font-semibold text-slate-700">{point.label}</p>
            <p>{formatNumber(point.value)}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

export function BarChartCard({
  title,
  subtitle,
  data,
  barColor = "#16a34a",
}: Readonly<BarChartCardProps>) {
  const safeData = data.length > 0 ? data : [{ label: "-", value: 0 }];
  const maxValue = Math.max(...safeData.map((item) => item.value), 1);

  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-bold text-slate-900">{title}</h2>
      <p className="mt-1 text-sm text-slate-600">{subtitle}</p>

      <div className="mt-4 rounded-lg border border-slate-100 bg-slate-50 p-4">
        <div className="flex h-52 items-end gap-3">
          {safeData.map((item) => {
            const heightPct = Math.max((item.value / maxValue) * 100, 6);
            return (
              <div key={`${item.label}-${item.value}`} className="flex flex-1 flex-col items-center">
                <div
                  className="w-full rounded-t-md"
                  style={{ height: `${heightPct}%`, backgroundColor: barColor }}
                />
                <p className="mt-2 text-center text-[11px] font-semibold text-slate-700">{item.label}</p>
                <p className="text-[11px] text-slate-500">{formatNumber(item.value)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
}

export function DonutChartCard({
  title,
  subtitle,
  segments,
}: Readonly<DonutChartCardProps>) {
  const safeSegments =
    segments.length > 0
      ? segments
      : [{ label: "Tiada Data", value: 1, color: "#94a3b8" }];
  const total = Math.max(
    safeSegments.reduce((sum, segment) => sum + segment.value, 0),
    1,
  );

  const gradient = safeSegments
    .reduce<{ pointer: number; stops: string[] }>(
      (acc, segment) => {
        const start = (acc.pointer / total) * 100;
        const nextPointer = acc.pointer + segment.value;
        const end = (nextPointer / total) * 100;
        return {
          pointer: nextPointer,
          stops: [...acc.stops, `${segment.color} ${start}% ${end}%`],
        };
      },
      { pointer: 0, stops: [] },
    )
    .stops.join(", ");

  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-bold text-slate-900">{title}</h2>
      <p className="mt-1 text-sm text-slate-600">{subtitle}</p>

      <div className="mt-4 grid gap-4 sm:grid-cols-[220px_1fr] sm:items-center">
        <div className="flex items-center justify-center">
          <div
            className="relative h-44 w-44 rounded-full"
            style={{ background: `conic-gradient(${gradient})` }}
          >
            <div className="absolute inset-7 rounded-full bg-white shadow-inner" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Jumlah</p>
              <p className="text-3xl font-bold text-slate-900">{formatNumber(total)}</p>
            </div>
          </div>
        </div>

        <ul className="space-y-2 text-sm">
          {safeSegments.map((segment) => {
            const percentage = ((segment.value / total) * 100).toFixed(1);
            return (
              <li
                key={`${segment.label}-${segment.value}`}
                className="flex items-center justify-between rounded-md border border-slate-100 bg-slate-50 px-3 py-2"
              >
                <div className="flex items-center gap-2">
                  <span
                    className="inline-block h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: segment.color }}
                  />
                  <span className="font-medium text-slate-700">{segment.label}</span>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-slate-900">{formatNumber(segment.value)}</p>
                  <p className="text-xs text-slate-500">{percentage}%</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
}
