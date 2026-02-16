import ModuleHeader from "@/components/erp/module-header";

export default function ManagementServicesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="space-y-4">
      <ModuleHeader
        title="Sistem Khidmat Pengurusan"
        subtitle="Khidmat pentadbiran, sokongan operasi dalaman, dan proses pengurusan rentas bahagian."
      />
      {children}
    </div>
  );
}
