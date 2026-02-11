import { notFound } from "next/navigation";
import SubmoduleMvp from "../_components/submodule-mvp";
import {
  getKawalseliaSubmoduleBySlug,
  kawalseliaSubmodules,
} from "../data";

type KawalseliaSubmodulePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return kawalseliaSubmodules.map((submodule) => ({ slug: submodule.slug }));
}

export default async function KawalseliaSubmodulePage({
  params,
}: Readonly<KawalseliaSubmodulePageProps>) {
  const { slug } = await params;
  const submodule = getKawalseliaSubmoduleBySlug(slug);

  if (!submodule) {
    notFound();
  }

  return <SubmoduleMvp submodule={submodule} />;
}
