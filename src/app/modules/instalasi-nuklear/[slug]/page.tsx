import { notFound } from "next/navigation";
import SubmoduleMvp from "../_components/submodule-mvp";
import {
  getInstalasiNuklearSubmoduleBySlug,
  instalasiNuklearSubmodules,
} from "../data";

type InstalasiNuklearSubmodulePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return instalasiNuklearSubmodules.map((submodule) => ({ slug: submodule.slug }));
}

export default async function InstalasiNuklearSubmodulePage({
  params,
}: Readonly<InstalasiNuklearSubmodulePageProps>) {
  const { slug } = await params;
  const submodule = getInstalasiNuklearSubmoduleBySlug(slug);

  if (!submodule) {
    notFound();
  }

  return <SubmoduleMvp submodule={submodule} />;
}
