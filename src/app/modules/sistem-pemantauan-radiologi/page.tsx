import { notFound } from "next/navigation";
import ModuleOverview from "@/components/internal-modules/module-overview";
import { getModuleByRouteSlug } from "@/lib/internal-modules/catalog";

export default function SistemPemantauanRadiologiPage() {
  const moduleDef = getModuleByRouteSlug("sistem-pemantauan-radiologi");

  if (!moduleDef) {
    notFound();
  }

  return <ModuleOverview moduleDef={moduleDef} />;
}
