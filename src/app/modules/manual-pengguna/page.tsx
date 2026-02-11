import ManualPenggunaView from "@/components/shared/manual-pengguna-view";

export default function ManualPenggunaPage() {
  return (
    <ManualPenggunaView
      audience="internal"
      backHref="/modules"
      backLabel="Kembali Ke Senarai"
    />
  );
}
