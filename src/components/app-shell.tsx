"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import InternalModulesSidebar from "./navigation/internal-modules-sidebar";
import RouteGuard from "./auth/route-guard";
import { getDefaultDashboardByRole, useAuth } from "./auth/auth-provider";

type NavItem = {
  href: string;
  label: string;
  activePrefixes?: string[];
};

function isActive(pathname: string, item: NavItem) {
  if (pathname === item.href || pathname.startsWith(`${item.href}/`)) {
    return true;
  }

  if (!item.activePrefixes) {
    return false;
  }

  return item.activePrefixes.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}

function classNames(...classes: Array<string | false>) {
  return classes.filter(Boolean).join(" ");
}

export default function AppShell({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const router = useRouter();
  const { isReady, session, logout } = useAuth();
  const [mobileSidebarOpenPath, setMobileSidebarOpenPath] = useState<string | null>(
    null,
  );

  const isLoginPage = pathname === "/login";
  const showInternalSidebar = Boolean(
    session?.role === "internal" && pathname.startsWith("/modules"),
  );
  const isMobileSidebarOpen =
    showInternalSidebar && mobileSidebarOpenPath === pathname;

  const navItems: NavItem[] = session
    ? session.role === "internal"
      ? [
          { href: "/dashboard/internal", label: "Dashboard eATOM" },
          {
            href: "/modules",
            label: "Modul eATOM",
            activePrefixes: ["/modules"],
          },
        ]
      : session.role === "external_pl"
        ? [
            { href: "/dashboard/external/pl", label: "Dashboard PL" },
            { href: "/pengguna-luar", label: "PL & Awam" },
          ]
        : [
            { href: "/dashboard/external/awam", label: "Dashboard Awam" },
            { href: "/pengguna-luar/awam", label: "Orang Awam" },
          ]
    : [];

  const onLogout = () => {
    logout();
    router.replace("/login");
  };

  return (
    <RouteGuard>
      {!isLoginPage && isReady && session ? (
        <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
          <div
            className={classNames(
              "flex w-full items-center justify-between gap-4 px-4 py-3 sm:px-8",
              !showInternalSidebar && "mx-auto",
            )}
            style={
              showInternalSidebar
                ? undefined
                : { maxWidth: "var(--module-content-width, 88rem)" }
            }
          >
            <div className="flex items-center gap-4">
              <Link href="/" className="text-sm font-bold tracking-wide text-slate-900">
                eATOM
              </Link>
              {showInternalSidebar ? (
                <button
                  type="button"
                  onClick={() => setMobileSidebarOpenPath(pathname)}
                  className="rounded-lg border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 lg:hidden"
                >
                  Menu Modul
                </button>
              ) : null}
              <nav className="flex items-center gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={classNames(
                      "rounded-lg px-3 py-2 text-sm font-semibold transition-colors",
                      isActive(pathname, item)
                        ? "bg-slate-900 text-white"
                        : "text-slate-700 hover:bg-slate-100",
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="flex items-center gap-2">
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                {session.role === "internal"
                  ? "Akses Dalaman"
                  : session.role === "external_pl"
                    ? "Akses PL"
                    : "Akses Orang Awam"}
              </span>
              <Link
                href={getDefaultDashboardByRole(session.role)}
                className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                {session.name}
              </Link>
              <button
                onClick={onLogout}
                className="rounded-lg bg-rose-700 px-3 py-2 text-sm font-semibold text-white hover:bg-rose-800"
              >
                Logout
              </button>
            </div>
          </div>
        </header>
      ) : null}

      {showInternalSidebar ? (
        <div className="lg:grid lg:grid-cols-[20rem_minmax(0,1fr)]">
          <aside className="hidden border-r border-slate-200 bg-white/90 lg:block">
            <div className="sticky top-[65px] h-[calc(100vh-65px)] overflow-y-auto p-4">
              <InternalModulesSidebar />
            </div>
          </aside>
          <div className="min-w-0">{children}</div>
        </div>
      ) : (
        children
      )}

      {showInternalSidebar && isMobileSidebarOpen ? (
        <div
          className="fixed inset-0 z-40 bg-slate-900/40 lg:hidden"
          onClick={() => setMobileSidebarOpenPath(null)}
        >
          <aside
            className="h-full w-[20rem] max-w-[90vw] overflow-y-auto border-r border-slate-200 bg-white p-4 shadow-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between gap-2">
              <p className="text-sm font-bold text-slate-900">Navigasi Modul</p>
              <button
                type="button"
                onClick={() => setMobileSidebarOpenPath(null)}
                className="rounded-md border border-slate-300 px-2 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-50"
              >
                Tutup
              </button>
            </div>
            <InternalModulesSidebar onNavigate={() => setMobileSidebarOpenPath(null)} />
          </aside>
        </div>
      ) : null}
    </RouteGuard>
  );
}
