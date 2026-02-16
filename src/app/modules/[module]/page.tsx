import { notFound } from "next/navigation";
import ModuleOverview from "@/components/internal-modules/module-overview";
import {
  getInternalModules,
  getModuleByRouteSlug,
} from "@/lib/internal-modules/catalog";

type InternalModulePageProps = {
  params: Promise<{ module: string }>;
};

export function generateStaticParams() {
  return getInternalModules().map((moduleDef) => ({
    module: moduleDef.routeSlug,
  }));
}

export default async function InternalModulePage({
  params,
}: Readonly<InternalModulePageProps>) {
  const { module } = await params;
  const moduleDef = getModuleByRouteSlug(module);

  if (!moduleDef) {
    notFound();
  }

  return <ModuleOverview moduleDef={moduleDef} />;
}
