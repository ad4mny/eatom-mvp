import { notFound } from "next/navigation";
import PenilaianLawatanTapakView from "@/components/shared/penilaian-lawatan-tapak-view";
import ServiceView from "../_components/service-view";
import { awamServices, getAwamServiceBySlug } from "../data";

type AwamServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return awamServices.map((service) => ({ slug: service.slug }));
}

export default async function AwamServicePage({ params }: Readonly<AwamServicePageProps>) {
  const { slug } = await params;
  const service = getAwamServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  if (service.sharedView === "penilaian_lawatan") {
    return (
      <PenilaianLawatanTapakView
        audience="external_public"
        backHref="/pengguna-luar/awam"
        backLabel="Kembali Ke Modul Orang Awam"
        mode="embedded"
      />
    );
  }

  return <ServiceView service={service} />;
}
