"use client";

import { type ReactNode, useMemo, useSyncExternalStore } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ComposedChart,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { mainModules } from "@/config/erp-main-modules";
import { getInternalModules } from "@/lib/internal-modules/catalog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type MetricRow = {
  module: string;
  moduleTitle: string;
  processes: number;
  pending: number;
  review: number;
  completed: number;
  closureRate: number;
  submodules: number;
};

const STATUS_COLORS = ["#16a34a", "#0284c7", "#f59e0b", "#dc2626"];

function shortName(value: string) {
  return value
    .replace(/^sistem\s+/i, "")
    .replace(/^maklumat\s+/i, "")
    .replace(/^dashboard\s+/i, "")
    .split(" ")
    .slice(0, 2)
    .join(" ");
}

const emptySubscribe = () => () => {};

function ChartFrame({ mounted, children }: Readonly<{ mounted: boolean; children: ReactNode }>) {
  return (
    <div className="h-72 w-full">
      {mounted ? children : <div className="h-full w-full rounded-lg bg-slate-100" />}
    </div>
  );
}

export default function ErpAnalyticsGrid() {
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const internalModules = useMemo(() => getInternalModules(), []);

  const moduleMetrics = useMemo<MetricRow[]>(
    () =>
      internalModules.map((moduleDef, index) => {
        const processCount = moduleDef.submodules.reduce((sum, submodule) => sum + submodule.processes.length, 0);
        const pending = Math.max(Math.round(processCount * (0.2 + (index % 3) * 0.06)), 4);
        const review = Math.max(Math.round(processCount * (0.16 + (index % 2) * 0.05)), 3);
        const completed = Math.max(processCount - pending - review, 3);

        return {
          module: `M${moduleDef.moduleNo}`,
          moduleTitle: moduleDef.title,
          processes: processCount,
          pending,
          review,
          completed,
          closureRate: Number(((completed / processCount) * 100).toFixed(1)),
          submodules: moduleDef.submodules.length,
        };
      }),
    [internalModules],
  );

  const totalProcesses = moduleMetrics.reduce((sum, row) => sum + row.processes, 0);

  const weeklyThroughput = useMemo(
    () =>
      ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"].map((week, index) => ({
        week,
        incoming: Math.round(totalProcesses * (0.22 + (index % 4) * 0.03)),
        resolved: Math.round(totalProcesses * (0.18 + ((index + 2) % 4) * 0.03)),
      })),
    [totalProcesses],
  );

  const quarterlyServiceVolume = useMemo(
    () =>
      ["Q1", "Q2", "Q3", "Q4"].map((quarter, index) => ({
        quarter,
        submissions: Math.round(totalProcesses * (2.8 + index * 0.22)),
        processed: Math.round(totalProcesses * (2.3 + index * 0.2)),
      })),
    [totalProcesses],
  );

  const queueByModule = useMemo(
    () =>
      moduleMetrics.map((row) => ({
        module: row.module,
        pending: row.pending,
        review: row.review,
        completed: row.completed,
      })),
    [moduleMetrics],
  );

  const performanceByModule = useMemo(
    () =>
      moduleMetrics.map((row) => ({
        module: row.module,
        cases: row.processes,
        closureRate: row.closureRate,
      })),
    [moduleMetrics],
  );

  const caseStatusMix = useMemo(() => {
    const pending = moduleMetrics.reduce((sum, row) => sum + row.pending, 0);
    const review = moduleMetrics.reduce((sum, row) => sum + row.review, 0);
    const completed = moduleMetrics.reduce((sum, row) => sum + row.completed, 0);
    const riskHold = Math.max(4, Math.round(pending * 0.08));

    return [
      { name: "Completed", value: completed, fill: STATUS_COLORS[0] },
      { name: "In Review", value: review, fill: STATUS_COLORS[1] },
      { name: "Pending", value: pending, fill: STATUS_COLORS[2] },
      { name: "Risk Hold", value: riskHold, fill: STATUS_COLORS[3] },
    ];
  }, [moduleMetrics]);

  const capabilityRadar = useMemo(
    () =>
      mainModules.slice(0, 6).map((module, index) => ({
        domain: shortName(module.title),
        readiness: 72 + ((index * 6) % 20),
        adoption: 66 + ((index * 8) % 22),
      })),
    [],
  );

  return (
    <section className="grid gap-4 xl:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Incoming vs Resolved Trend</CardTitle>
          <CardDescription>8-week transaction flow across core ERP workflows.</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartFrame mounted={mounted}>
            <ResponsiveContainer>
              <LineChart data={weeklyThroughput} margin={{ top: 8, right: 20, bottom: 0, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line dataKey="incoming" name="Incoming" stroke="#0f766e" strokeWidth={2.5} dot={false} />
                <Line dataKey="resolved" name="Resolved" stroke="#2563eb" strokeWidth={2.5} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </ChartFrame>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Quarterly Service Volume</CardTitle>
          <CardDescription>Submission and processing volume by quarter.</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartFrame mounted={mounted}>
            <ResponsiveContainer>
              <AreaChart data={quarterlyServiceVolume} margin={{ top: 8, right: 20, bottom: 0, left: 0 }}>
                <defs>
                  <linearGradient id="submissionsArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.45} />
                    <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0.05} />
                  </linearGradient>
                  <linearGradient id="processedArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22c55e" stopOpacity={0.35} />
                    <stop offset="95%" stopColor="#22c55e" stopOpacity={0.04} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="quarter" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="submissions" name="Submissions" stroke="#0284c7" fill="url(#submissionsArea)" />
                <Area type="monotone" dataKey="processed" name="Processed" stroke="#16a34a" fill="url(#processedArea)" />
              </AreaChart>
            </ResponsiveContainer>
          </ChartFrame>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Queue by Internal Module</CardTitle>
          <CardDescription>Pending, review, and completed workflow counts (stacked).</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartFrame mounted={mounted}>
            <ResponsiveContainer>
              <BarChart data={queueByModule} margin={{ top: 8, right: 20, bottom: 0, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="module" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pending" stackId="a" fill="#f59e0b" name="Pending" radius={[4, 4, 0, 0]} />
                <Bar dataKey="review" stackId="a" fill="#0284c7" name="In Review" />
                <Bar dataKey="completed" stackId="a" fill="#16a34a" name="Completed" />
              </BarChart>
            </ResponsiveContainer>
          </ChartFrame>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Case Volume vs Closure Rate</CardTitle>
          <CardDescription>Combined bar and line chart by module.</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartFrame mounted={mounted}>
            <ResponsiveContainer>
              <ComposedChart data={performanceByModule} margin={{ top: 8, right: 20, bottom: 0, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="module" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" unit="%" domain={[0, 100]} />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="cases" name="Total Cases" fill="#334155" radius={[5, 5, 0, 0]} />
                <Line yAxisId="right" type="monotone" dataKey="closureRate" name="Closure Rate" stroke="#2563eb" strokeWidth={2.5} />
              </ComposedChart>
            </ResponsiveContainer>
          </ChartFrame>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Current Case Status Mix</CardTitle>
          <CardDescription>Distribution snapshot of all active process states.</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartFrame mounted={mounted}>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={caseStatusMix}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={70}
                  outerRadius={112}
                  paddingAngle={2}
                  labelLine={false}
                >
                  {caseStatusMix.map((entry) => (
                    <Cell key={entry.name} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </ChartFrame>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Capability Readiness Radar</CardTitle>
          <CardDescription>Readiness and adoption index by primary system domain.</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartFrame mounted={mounted}>
            <ResponsiveContainer>
              <RadarChart data={capabilityRadar} outerRadius={108}>
                <PolarGrid />
                <PolarAngleAxis dataKey="domain" />
                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                <Tooltip />
                <Legend />
                <Radar dataKey="readiness" name="Readiness" stroke="#0f766e" fill="#0f766e" fillOpacity={0.22} />
                <Radar dataKey="adoption" name="Adoption" stroke="#2563eb" fill="#2563eb" fillOpacity={0.16} />
              </RadarChart>
            </ResponsiveContainer>
          </ChartFrame>
        </CardContent>
      </Card>
    </section>
  );
}
