import { notFound } from "next/navigation";
import ProcessDetail from "@/components/internal-modules/process-detail";
import { getProcessBySlug, getSubmoduleBySlug } from "@/lib/internal-modules/catalog";
import { getInternalModuleOrThrow } from "@/app/erp/_lib/internal-module-routes";

const MODULE_ROUTE_SLUG = "sistem-pemantauan-radiologi";

type EnvironmentalRadiationMonitoringProcessPageProps = {
  params: Promise<{ submodule: string; process: string }>;
};

export function generateStaticParams() {
  const moduleDef = getInternalModuleOrThrow(MODULE_ROUTE_SLUG);

  return moduleDef.submodules.flatMap((submodule) =>
    submodule.processes.map((process) => ({
      submodule: submodule.slug,
      process: process.slug,
    })),
  );
}

export default async function EnvironmentalRadiationMonitoringProcessPage({
  params,
}: Readonly<EnvironmentalRadiationMonitoringProcessPageProps>) {
  const { submodule, process } = await params;
  const moduleDef = getInternalModuleOrThrow(MODULE_ROUTE_SLUG);
  const selectedSubmodule = getSubmoduleBySlug(moduleDef, submodule);

  if (!selectedSubmodule) {
    notFound();
  }

  const selectedProcess = getProcessBySlug(selectedSubmodule, process);

  if (!selectedProcess) {
    notFound();
  }

  return (
    <ProcessDetail
      moduleDef={moduleDef}
      submodule={selectedSubmodule}
      process={selectedProcess}
    />
  );
}
