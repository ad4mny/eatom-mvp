import type { CSSProperties } from "react";
import { DASHBOARD_CONTENT_WIDTH } from "@/config/module-layout";

const dashboardLayoutStyle = {
  "--module-content-width": DASHBOARD_CONTENT_WIDTH,
} as CSSProperties;

export default function DashboardRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div style={dashboardLayoutStyle}>{children}</div>;
}
