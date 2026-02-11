import Link from "next/link";

export default function PermitPage() {
  const integrationChecks = [
    {
      id: "EPM-CHK-001",
      perkara: "Penyelarasan API Authentication",
      status: "Aktif",
      updatedAt: "11 Feb 2026",
    },
    {
      id: "EPM-CHK-002",
      perkara: "Sync Permohonan Permit",
      status: "Dalam Pemantauan",
      updatedAt: "10 Feb 2026",
    },
    {
      id: "EPM-CHK-003",
      perkara: "Webhook Notifikasi Status",
      status: "Selesai",
      updatedAt: "09 Feb 2026",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-[var(--module-content-width)] space-y-6">
        <section className="rounded-2xl bg-[linear-gradient(120deg,#0f766e,#0ea5a4)] p-7 text-cyan-50">
          <p className="text-xs font-semibold tracking-[0.16em] text-cyan-200">SISTEM</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">Permit</h1>
          <p className="mt-2 text-sm text-cyan-100">
            MVP mock data untuk integrasi API dengan Sistem ePermit.
          </p>
          <Link
            href="/modules"
            className="mt-4 inline-flex rounded-lg border border-white/40 px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
          >
            Kembali Ke Senarai
          </Link>
        </section>

        <section className="grid gap-4 sm:grid-cols-3">
          <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Skop</p>
            <p className="mt-2 text-xl font-bold text-slate-900">API ePermit</p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Status Integrasi</p>
            <p className="mt-2 text-xl font-bold text-slate-900">MVP Mock</p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Pemerhatian</p>
            <p className="mt-2 text-xl font-bold text-slate-900">3 Rekod</p>
          </article>
        </section>

        <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">API dengan Sistem ePermit (Mock)</h2>
            <button className="rounded-lg bg-cyan-700 px-4 py-2 text-sm font-semibold text-white hover:bg-cyan-800">
              Trigger Sync
            </button>
          </div>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-left text-slate-500">
                  <th className="px-2 py-2 font-semibold">ID</th>
                  <th className="px-2 py-2 font-semibold">Perkara</th>
                  <th className="px-2 py-2 font-semibold">Status</th>
                  <th className="px-2 py-2 font-semibold">Kemaskini</th>
                </tr>
              </thead>
              <tbody>
                {integrationChecks.map((record) => (
                  <tr key={record.id} className="border-b border-slate-100">
                    <td className="px-2 py-3 font-semibold text-slate-900">{record.id}</td>
                    <td className="px-2 py-3 text-slate-700">{record.perkara}</td>
                    <td className="px-2 py-3 text-slate-700">{record.status}</td>
                    <td className="px-2 py-3 text-slate-500">{record.updatedAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>
      </div>
    </main>
  );
}
