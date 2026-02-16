import { notFound } from "next/navigation";
import ProcessDetail from "@/components/internal-modules/process-detail";
import {
  getInternalModules,
  getModuleByRouteSlug,
  getProcessBySlug,
  getSubmoduleBySlug,
} from "@/lib/internal-modules/catalog";

type InternalModuleProcessPageProps = {
  params: Promise<{ module: string; submodule: string; process: string }>;
};

export function generateStaticParams() {
  return getInternalModules().flatMap((moduleDef) =>
    moduleDef.submodules.flatMap((submodule) =>
      submodule.processes.map((process) => ({
        module: moduleDef.routeSlug,
        submodule: submodule.slug,
        process: process.slug,
      })),
    ),
  );
}

export default async function InternalModuleProcessPage({
  params,
}: Readonly<InternalModuleProcessPageProps>) {
  const { module, submodule, process } = await params;
  const moduleDef = getModuleByRouteSlug(module);

  if (!moduleDef) {
    notFound();
  }

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
