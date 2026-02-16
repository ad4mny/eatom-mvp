import { notFound } from "next/navigation";
import ModuleOverview from "@/components/internal-modules/module-overview";
import { getModuleByRouteSlug } from "@/lib/internal-modules/catalog";

export default function SistemKhidmatPengurusanPage() {
  const moduleDef = getModuleByRouteSlug("sistem-khidmat-pengurusan");

  if (!moduleDef) {
    notFound();
  }

  return <ModuleOverview moduleDef={moduleDef} />;
}
