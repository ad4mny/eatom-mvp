import { notFound } from "next/navigation";
import ModuleOverview from "@/components/internal-modules/module-overview";
import { getModuleByRouteSlug } from "@/lib/internal-modules/catalog";

export default function MaklumatDosPekerjaSinaranPage() {
  const moduleDef = getModuleByRouteSlug("maklumat-dos-pekerja-sinaran");

  if (!moduleDef) {
    notFound();
  }

  return <ModuleOverview moduleDef={moduleDef} />;
}
