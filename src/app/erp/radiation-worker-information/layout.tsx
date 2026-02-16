import ModuleHeader from "@/components/erp/module-header";

export default function RadiationWorkerInformationLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="space-y-4">
      <ModuleHeader
        title="Maklumat Pekerja Sinaran"
        subtitle="Profil pekerja, pendaftaran, dan status kompetensi pekerja sinaran dalam aliran operasi dalaman."
      />
      {children}
    </div>
  );
}
