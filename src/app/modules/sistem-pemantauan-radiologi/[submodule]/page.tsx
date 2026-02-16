import { notFound } from "next/navigation";
import SubmoduleOverview from "@/components/internal-modules/submodule-overview";
import { getModuleByRouteSlug, getSubmoduleBySlug } from "@/lib/internal-modules/catalog";

export default async function SistemPemantauanRadiologiSubmodulePage({
  params,
}: Readonly<{ params: Promise<{ submodule: string }> }>) {
  const { submodule } = await params;
  const moduleDef = getModuleByRouteSlug("sistem-pemantauan-radiologi");

  if (!moduleDef) {
    notFound();
  }

  const selectedSubmodule = getSubmoduleBySlug(moduleDef, submodule);

  if (!selectedSubmodule) {
    notFound();
  }

  return <SubmoduleOverview moduleDef={moduleDef} submodule={selectedSubmodule} />;
}
