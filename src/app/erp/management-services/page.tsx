import { notFound } from "next/navigation";
import ModuleOverview from "@/components/internal-modules/module-overview";
import { getModuleByRouteSlug } from "@/lib/internal-modules/catalog";

const MODULE_ROUTE_SLUG = "sistem-khidmat-pengurusan";

export default function ManagementServicesPage() {
  const moduleDef = getModuleByRouteSlug(MODULE_ROUTE_SLUG);

  if (!moduleDef) {
    notFound();
  }

  return <ModuleOverview moduleDef={moduleDef} />;
}
