import ModuleHeader from "@/components/erp/module-header";

export default function RadiationWorkerDoseInformationLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="space-y-4">
      <ModuleHeader
        title="Maklumat Dos Pekerja Sinaran"
        subtitle="Rekod dos pekerja sinaran, trend pendedahan, dan semakan pematuhan had dos operasi."
      />
      {children}
    </div>
  );
}
