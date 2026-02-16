import { notFound } from "next/navigation";
import SubmoduleOverview from "@/components/internal-modules/submodule-overview";
import { getModuleByRouteSlug, getSubmoduleBySlug } from "@/lib/internal-modules/catalog";

export default async function MaklumatDosPekerjaSinaranSubmodulePage({
  params,
}: Readonly<{ params: Promise<{ submodule: string }> }>) {
  const { submodule } = await params;
  const moduleDef = getModuleByRouteSlug("maklumat-dos-pekerja-sinaran");

  if (!moduleDef) {
    notFound();
  }

  const selectedSubmodule = getSubmoduleBySlug(moduleDef, submodule);

  if (!selectedSubmodule) {
    notFound();
  }

  return <SubmoduleOverview moduleDef={moduleDef} submodule={selectedSubmodule} />;
}
