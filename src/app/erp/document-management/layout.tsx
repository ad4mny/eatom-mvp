import ModuleHeader from "@/components/erp/module-header";

export default function DocumentManagementLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="space-y-4">
      <ModuleHeader
        title="Sistem Pengurusan Dokumen"
        subtitle="Repositori dokumen rasmi, carian dokumen, dan audit trail proses dokumentasi jabatan."
      />
      {children}
    </div>
  );
}
