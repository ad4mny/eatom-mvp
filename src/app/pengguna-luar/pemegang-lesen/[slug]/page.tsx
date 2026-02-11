import { notFound, redirect } from "next/navigation";
import SubmoduleView from "../_components/submodule-view";
import {
  getPemegangLesenSubmoduleBySlug,
  pemegangLesenSubmodules,
} from "../data";

type PemegangLesenSubmodulePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return pemegangLesenSubmodules.map((submodule) => ({ slug: submodule.slug }));
}

export default async function PemegangLesenSubmodulePage({
  params,
}: Readonly<PemegangLesenSubmodulePageProps>) {
  const { slug } = await params;

  if (slug === "manual-pengguna") {
    redirect("/pengguna-luar/manual-pengguna");
  }

  const submodule = getPemegangLesenSubmoduleBySlug(slug);

  if (!submodule) {
    notFound();
  }

  return <SubmoduleView submodule={submodule} />;
}
