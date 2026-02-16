import { notFound } from "next/navigation";
import ModuleOverview from "@/components/internal-modules/module-overview";
import { getModuleByRouteSlug } from "@/lib/internal-modules/catalog";

export default function MaklumatPekerjaSinaranPage() {
  const moduleDef = getModuleByRouteSlug("maklumat-pekerja-sinaran");

  if (!moduleDef) {
    notFound();
  }

  return <ModuleOverview moduleDef={moduleDef} />;
}
