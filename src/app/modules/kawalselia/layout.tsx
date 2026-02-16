import ModuleFamilyLayout from "@/components/modules/module-family-layout";

export default function KawalseliaLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ModuleFamilyLayout
      title="Kawalselia"
      description="MVP berasaskan App Router untuk 18 modul kawalselia menggunakan mock data."
      heroClassName="bg-[linear-gradient(120deg,#052e16,#166534)] text-emerald-50"
      eyebrowClassName="text-emerald-200"
      descriptionClassName="text-emerald-100"
    >
      {children}
    </ModuleFamilyLayout>
  );
}
