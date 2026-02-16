import ModuleHeader from "@/components/erp/module-header";
import SecondaryTabs from "../_components/secondary-tabs";
import { nonLicenseSubmodules } from "../_lib/non-license-holder";
import { requireAuth } from "@/lib/auth/guards";

export default async function NonLicenseHolderLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  await requireAuth({
    allowedRoles: ["external_public"],
    nextPath: "/external/non-license-holder",
  });

  const tabs = nonLicenseSubmodules.map((submodule) => ({
    slug: submodule.slug,
    title: submodule.title,
    description: submodule.description,
    href: `/external/non-license-holder/${submodule.slug}`,
  }));

  return (
    <div className="space-y-4">
      <ModuleHeader
        title="Portal Bukan Pemegang Lesen"
        subtitle="Aliran awam berstruktur dengan sub-module tabs dan proses kerja di tahap rekod/detail."
      />
      <SecondaryTabs tabs={tabs} />
      {children}
    </div>
  );
}
