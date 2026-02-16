import type { CSSProperties } from "react";
import ErpLayoutShell from "@/components/erp/erp-layout-shell";
import { INTERNAL_MODULE_CONTENT_WIDTH } from "@/config/module-layout";
import { requireAuth } from "@/lib/auth/guards";

const erpLayoutStyle = {
  "--module-content-width": INTERNAL_MODULE_CONTENT_WIDTH,
} as CSSProperties;

export default async function ErpLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  await requireAuth({ allowedRoles: ["internal"], nextPath: "/erp" });
  return <ErpLayoutShell style={erpLayoutStyle}>{children}</ErpLayoutShell>;
}
