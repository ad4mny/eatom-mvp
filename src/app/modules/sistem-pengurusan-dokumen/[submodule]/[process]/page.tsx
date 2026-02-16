import { notFound } from "next/navigation";
import ProcessDetail from "@/components/internal-modules/process-detail";
import {
  getModuleByRouteSlug,
  getProcessBySlug,
  getSubmoduleBySlug,
} from "@/lib/internal-modules/catalog";

export default async function SistemPengurusanDokumenProcessPage({
  params,
}: Readonly<{ params: Promise<{ submodule: string; process: string }> }>) {
  const { submodule, process } = await params;
  const moduleDef = getModuleByRouteSlug("sistem-pengurusan-dokumen");

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
