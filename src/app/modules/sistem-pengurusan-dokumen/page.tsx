import { notFound } from "next/navigation";
import ModuleOverview from "@/components/internal-modules/module-overview";
import { getModuleByRouteSlug } from "@/lib/internal-modules/catalog";

export default function SistemPengurusanDokumenPage() {
  const moduleDef = getModuleByRouteSlug("sistem-pengurusan-dokumen");

  if (!moduleDef) {
    notFound();
  }

  return <ModuleOverview moduleDef={moduleDef} />;
}
