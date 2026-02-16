import MainSidebar from "@/components/erp/main-sidebar";

export default function ErpLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[22rem_minmax(0,1fr)]">
      <MainSidebar />

      <div className="min-w-0">
        <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 px-4 py-3 backdrop-blur sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Enterprise ERP Layout</p>
          <p className="mt-1 text-sm text-slate-700">
            One-Click Rule: Proses kerja boleh dicapai dalam dua klik dari Main Module.
          </p>
        </header>

        <main className="space-y-4 px-4 py-5 sm:px-6">{children}</main>
      </div>
    </div>
  );
}
