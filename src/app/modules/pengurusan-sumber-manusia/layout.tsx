import ModuleFamilyLayout from "@/components/modules/module-family-layout";

export default function PengurusanSumberManusiaLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ModuleFamilyLayout
      title="Pengurusan Sumber Manusia"
      description="MVP berasaskan App Router untuk 16 submodul Pengurusan Sumber Manusia menggunakan mock data."
      heroClassName="bg-[linear-gradient(120deg,#082f49,#0369a1)] text-sky-50"
      eyebrowClassName="text-sky-200"
      descriptionClassName="text-sky-100"
    >
      {children}
    </ModuleFamilyLayout>
  );
}
