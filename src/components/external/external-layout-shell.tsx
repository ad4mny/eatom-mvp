"use client";

import { useState } from "react";
import ExternalMainSidebar from "@/components/external/main-sidebar";

export default function ExternalLayoutShell({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden lg:grid lg:grid-cols-[22rem_minmax(0,1fr)] lg:overflow-x-visible">
      <aside className="hidden border-r border-slate-200 bg-white/90 lg:sticky lg:top-0 lg:block lg:h-screen lg:self-start">
        <div className="h-full overflow-y-auto">
          <ExternalMainSidebar />
        </div>
      </aside>

      <div className="min-w-0">
        <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 px-4 py-3 backdrop-blur sm:px-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">External User Architecture</p>
              <p className="mt-1 text-sm text-slate-700">
                Dua jenis pengguna: Pemegang Lesen dan Bukan Pemegang Lesen dengan aliran modul yang konsisten.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setMobileSidebarOpen(true)}
              className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 lg:hidden"
            >
              Menu
            </button>
          </div>
        </header>

        <main className="space-y-4 px-4 py-5 pb-8 sm:px-6">{children}</main>
      </div>

      {mobileSidebarOpen ? (
        <div
          className="fixed inset-0 z-50 bg-slate-900/45 lg:hidden"
          onClick={() => setMobileSidebarOpen(false)}
        >
          <aside
            className="h-full w-[20rem] max-w-[88vw] border-r border-slate-200 bg-white shadow-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
                <p className="text-sm font-semibold text-slate-900">Navigasi External</p>
                <button
                  type="button"
                  onClick={() => setMobileSidebarOpen(false)}
                  className="rounded-md border border-slate-300 bg-white px-2 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Tutup
                </button>
              </div>
              <ExternalMainSidebar onNavigate={() => setMobileSidebarOpen(false)} className="min-h-0 flex-1" />
            </div>
          </aside>
        </div>
      ) : null}
    </div>
  );
}
