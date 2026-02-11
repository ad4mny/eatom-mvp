import ManualPenggunaView from "@/components/shared/manual-pengguna-view";

export default function ManualPenggunaExternalPage() {
  return (
    <ManualPenggunaView
      audience="external_pl"
      backHref="/pengguna-luar"
      backLabel="Kembali Ke PL & Awam"
    />
  );
}
