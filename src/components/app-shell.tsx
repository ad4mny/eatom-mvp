"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import RouteGuard from "./auth/route-guard";
import { getDefaultDashboardByRole, useAuth } from "./auth/auth-provider";

type NavItem = {
  href: string;
  label: string;
};

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
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

  const isLoginPage = pathname === "/login";

  const navItems: NavItem[] = session
    ? session.role === "internal"
      ? [
          { href: "/dashboard/internal", label: "Dashboard Dalaman" },
          { href: "/modules", label: "Modul Sistem" },
        ]
      : session.role === "external_pl"
        ? [
            { href: "/dashboard/external/pl", label: "Dashboard PL" },
            { href: "/pengguna-luar", label: "Modul PL & Awam" },
          ]
        : [
            { href: "/dashboard/external/awam", label: "Dashboard Awam" },
            { href: "/pengguna-luar/awam", label: "Modul Orang Awam" },
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
            className="mx-auto flex w-full items-center justify-between gap-4 px-4 py-3 sm:px-8"
            style={{ maxWidth: "var(--module-content-width, 88rem)" }}
          >
            <div className="flex items-center gap-4">
              <Link href="/" className="text-sm font-bold tracking-wide text-slate-900">
                eATOM
              </Link>
              <nav className="flex items-center gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={classNames(
                      "rounded-lg px-3 py-2 text-sm font-semibold transition-colors",
                      isActive(pathname, item.href)
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

      {children}
    </RouteGuard>
  );
}
