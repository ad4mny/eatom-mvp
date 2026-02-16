import ErpLayoutShell from "@/components/erp/erp-layout-shell";
import { requireAuth } from "@/lib/auth/guards";

export default async function ErpLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  await requireAuth({ allowedRoles: ["internal"], nextPath: "/erp" });
  return <ErpLayoutShell>{children}</ErpLayoutShell>;
}
