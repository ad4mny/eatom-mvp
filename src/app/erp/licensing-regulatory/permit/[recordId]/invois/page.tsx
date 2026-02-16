import ProcessPanel from "../../../_components/process-panel";

export default function PermitInvoisPage() {
  return (
    <ProcessPanel
      title="Invois Permit"
      description="Pengurusan fi permit termasuk semakan kutipan dan tunggakan."
      checkpoints={[
        "Jana invois mengikut jenis permit.",
        "Sahkan transaksi pembayaran dalam gateway kewangan.",
        "Aktifkan permit selepas bayaran disahkan.",
      ]}
    />
  );
}
