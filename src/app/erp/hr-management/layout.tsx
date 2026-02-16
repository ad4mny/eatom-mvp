import ModuleHeader from "@/components/erp/module-header";

export default function PengurusanSumberManusiaLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="space-y-4">
      <ModuleHeader
        title="Sistem Pengurusan Sumber Manusia"
        subtitle="Pengurusan perjawatan, prestasi dan kompetensi dalaman dengan submodul operasi berstruktur."
      />
      {children}
    </div>
  );
}
