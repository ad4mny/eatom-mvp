import { notFound } from "next/navigation";
import SubmoduleMvp from "../_components/submodule-mvp";
import {
  getPengurusanSumberManusiaSubmoduleBySlug,
  pengurusanSumberManusiaSubmodules,
} from "../data";

type PengurusanSumberManusiaSubmodulePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return pengurusanSumberManusiaSubmodules.map((submodule) => ({ slug: submodule.slug }));
}

export default async function PengurusanSumberManusiaSubmodulePage({
  params,
}: Readonly<PengurusanSumberManusiaSubmodulePageProps>) {
  const { slug } = await params;
  const submodule = getPengurusanSumberManusiaSubmoduleBySlug(slug);

  if (!submodule) {
    notFound();
  }

  return <SubmoduleMvp submodule={submodule} />;
}
