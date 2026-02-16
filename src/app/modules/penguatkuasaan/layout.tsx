import ModuleFamilyLayout from "@/components/modules/module-family-layout";

export default function PenguatkuasaanLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ModuleFamilyLayout
      title="Penguatkuasaan"
      description="MVP berasaskan App Router untuk Pengkompaunan, Penggeledahan, Siasatan & Pendakwaan, dan SPTN dengan mock data."
      heroClassName="bg-[linear-gradient(120deg,#7f1d1d,#be123c)] text-rose-50"
      eyebrowClassName="text-rose-200"
      descriptionClassName="text-rose-100"
    >
      {children}
    </ModuleFamilyLayout>
  );
}
