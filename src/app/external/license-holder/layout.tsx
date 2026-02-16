import ModuleHeader from "@/components/erp/module-header";
import SecondaryTabs from "../_components/secondary-tabs";
import { licenseHolderSubmodules } from "../_lib/license-holder";

export default function LicenseHolderLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const tabs = licenseHolderSubmodules.map((submodule) => ({
    slug: submodule.slug,
    title: submodule.title,
    description: submodule.description,
    href: `/external/license-holder/${submodule.slug}`,
  }));

  return (
    <div className="space-y-4">
      <ModuleHeader
        title="Portal Pemegang Lesen"
        subtitle="Navigasi enterprise berlapis: Main Module di sidebar, sub-module di tabs, proses kerja di tindakan jadual/detail tab."
      />
      <SecondaryTabs tabs={tabs} />
      {children}
    </div>
  );
}
