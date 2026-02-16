import InternalModulePlaceholderView from "@/components/shared/internal-module-placeholder-view";

export default function TukarKataLaluanPage() {
  return (
    <InternalModulePlaceholderView
      title="Tukar Kata Laluan"
      description="Kemaskini kata laluan akaun dalaman eATOM."
      backHref="/modules/pentadbiran-sistem"
      backLabel="Kembali Ke Pentadbiran Sistem"
      notes={[
        "Semakan kata laluan semasa sebelum kemaskini.",
        "Pengesahan kata laluan baharu dan polisi keselamatan.",
        "Rekod log kemaskini untuk audit dalaman.",
      ]}
    />
  );
}
