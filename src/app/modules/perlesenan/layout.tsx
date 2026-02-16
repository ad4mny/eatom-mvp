import ModuleFamilyLayout from "@/components/modules/module-family-layout";

export default function PerlesenanLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ModuleFamilyLayout
      title="Perlesenan"
      description="App Router berasaskan modul dengan sub-route khusus untuk setiap proses kerja."
      heroClassName="bg-[linear-gradient(120deg,#0f172a,#1e3a8a)] text-slate-100"
      eyebrowClassName="text-slate-300"
      descriptionClassName="text-slate-200"
    >
      {children}
    </ModuleFamilyLayout>
  );
}
