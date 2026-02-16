import { notFound } from "next/navigation";
import SubmoduleOverview from "@/components/internal-modules/submodule-overview";
import { getSubmoduleBySlug } from "@/lib/internal-modules/catalog";
import { getInternalModuleOrThrow } from "@/app/erp/_lib/internal-module-routes";

const MODULE_ROUTE_SLUG = "sistem-pemantauan-radiologi";

type EnvironmentalRadiationMonitoringSubmodulePageProps = {
  params: Promise<{ submodule: string }>;
};

export function generateStaticParams() {
  const moduleDef = getInternalModuleOrThrow(MODULE_ROUTE_SLUG);

  return moduleDef.submodules.map((submodule) => ({
    submodule: submodule.slug,
  }));
}

export default async function EnvironmentalRadiationMonitoringSubmodulePage({
  params,
}: Readonly<EnvironmentalRadiationMonitoringSubmodulePageProps>) {
  const { submodule } = await params;
  const moduleDef = getInternalModuleOrThrow(MODULE_ROUTE_SLUG);
  const selectedSubmodule = getSubmoduleBySlug(moduleDef, submodule);

  if (!selectedSubmodule) {
    notFound();
  }

  return <SubmoduleOverview moduleDef={moduleDef} submodule={selectedSubmodule} />;
}
