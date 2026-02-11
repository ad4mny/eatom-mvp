import { notFound } from "next/navigation";
import SubmoduleMvp from "../_components/submodule-mvp";
import {
  getPenguatkuasaanSubmoduleBySlug,
  penguatkuasaanSubmodules,
} from "../data";

type PenguatkuasaanSubmodulePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return penguatkuasaanSubmodules.map((submodule) => ({ slug: submodule.slug }));
}

export default async function PenguatkuasaanSubmodulePage({
  params,
}: Readonly<PenguatkuasaanSubmodulePageProps>) {
  const { slug } = await params;
  const submodule = getPenguatkuasaanSubmoduleBySlug(slug);

  if (!submodule) {
    notFound();
  }

  return <SubmoduleMvp submodule={submodule} />;
}
