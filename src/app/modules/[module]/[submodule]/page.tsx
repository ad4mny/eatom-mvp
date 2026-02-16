import { notFound } from "next/navigation";
import SubmoduleOverview from "@/components/internal-modules/submodule-overview";
import {
  getInternalModules,
  getModuleByRouteSlug,
  getSubmoduleBySlug,
} from "@/lib/internal-modules/catalog";

type InternalModuleSubmodulePageProps = {
  params: Promise<{ module: string; submodule: string }>;
};

export function generateStaticParams() {
  return getInternalModules().flatMap((moduleDef) =>
    moduleDef.submodules.map((submodule) => ({
      module: moduleDef.routeSlug,
      submodule: submodule.slug,
    })),
  );
}

export default async function InternalModuleSubmodulePage({
  params,
}: Readonly<InternalModuleSubmodulePageProps>) {
  const { module, submodule } = await params;
  const moduleDef = getModuleByRouteSlug(module);

  if (!moduleDef) {
    notFound();
  }

  const selectedSubmodule = getSubmoduleBySlug(moduleDef, submodule);

  if (!selectedSubmodule) {
    notFound();
  }

  return <SubmoduleOverview moduleDef={moduleDef} submodule={selectedSubmodule} />;
}
