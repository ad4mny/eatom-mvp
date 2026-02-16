import ModuleFamilyLayout from "@/components/modules/module-family-layout";

export default function InstalasiNuklearLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ModuleFamilyLayout
      title="Instalasi Nuklear"
      description="MVP berasaskan App Router untuk 10 modul Instalasi Nuklear menggunakan mock data."
      heroClassName="bg-[linear-gradient(120deg,#7c2d12,#b45309)] text-amber-50"
      eyebrowClassName="text-amber-200"
      descriptionClassName="text-amber-100"
    >
      {children}
    </ModuleFamilyLayout>
  );
}
