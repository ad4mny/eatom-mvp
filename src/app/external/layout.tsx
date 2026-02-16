import ExternalLayoutShell from "@/components/external/external-layout-shell";
import { requireAuth } from "@/lib/auth/guards";

export default async function ExternalLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  await requireAuth({
    allowedRoles: ["external_pl", "external_public"],
    nextPath: "/external",
  });

  return <ExternalLayoutShell>{children}</ExternalLayoutShell>;
}
