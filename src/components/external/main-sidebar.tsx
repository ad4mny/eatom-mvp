"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useMemo } from "react";
import { useAuth } from "@/components/auth/auth-provider";
import {
  externalMainModules,
  type ExternalAudienceRole,
} from "@/config/external-main-modules";
import { cn } from "@/lib/utils";

type ExternalMainSidebarProps = {
  onNavigate?: () => void;
  className?: string;
};

function getRoleLabel(role: "internal" | "external_pl" | "external_public") {
  if (role === "internal") {
    return "Pegawai Dalaman";
  }

  if (role === "external_pl") {
    return "Pemegang Lesen";
  }

  return "Bukan Pemegang Lesen";
}

export default function ExternalMainSidebar({
  onNavigate,
  className,
}: Readonly<ExternalMainSidebarProps>) {
  const pathname = usePathname();
  const router = useRouter();
  const { session, isReady, logout } = useAuth();
  const sessionRole = session?.role;

  const initials = useMemo(() => {
    const source = session?.name?.trim();
    if (!source) {
      return "NA";
    }

    return source
      .split(/\s+/)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase() ?? "")
      .join("");
  }, [session?.name]);

  const onLogout = () => {
    logout();
    onNavigate?.();
    router.replace("/login");
  };

  const effectiveRole = useMemo<ExternalAudienceRole | null>(() => {
    if (sessionRole === "external_pl" || sessionRole === "external_public") {
      return sessionRole;
    }

    if (pathname.startsWith("/external/license-holder")) {
      return "external_pl";
    }

    if (pathname.startsWith("/external/non-license-holder")) {
      return "external_public";
    }

    return null;
  }, [pathname, sessionRole]);

  const visibleModules = useMemo(
    () =>
      externalMainModules.filter((module) => {
        if (!module.visibleTo || module.visibleTo.length === 0) {
          return true;
        }

        if (!effectiveRole) {
          return module.visibleTo.length > 1;
        }

        return module.visibleTo.includes(effectiveRole);
      }),
    [effectiveRole],
  );

  return (
    <div className={cn("flex h-full min-h-0 flex-col bg-white/95", className)}>
      <div className="space-y-4 border-b border-slate-200 p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-700">eATOM External</p>
        <h1 className="text-lg font-bold text-slate-900">Portal Pengguna Luar</h1>
        <p className="text-xs text-slate-600">Primary Navigation: External Main Modules</p>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto p-3" aria-label="External Main Module Navigation">
        {visibleModules.map((module) => {
          const isActive = pathname === module.href || pathname.startsWith(`${module.href}/`);
          return (
            <Link
              key={module.id}
              href={module.href}
              onClick={onNavigate}
              className={cn(
                "block rounded-lg border px-3 py-3 transition-colors",
                isActive
                  ? "border-indigo-200 bg-indigo-50"
                  : "border-transparent bg-white hover:border-slate-200 hover:bg-slate-50",
              )}
            >
              <p className={cn("text-sm font-semibold", isActive ? "text-indigo-800" : "text-slate-900")}>{module.title}</p>
              <p className="mt-1 text-xs text-slate-600">{module.description}</p>
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-slate-200 p-3">
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-700 text-sm font-bold text-white">
              {initials}
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-slate-900">
                {isReady ? (session?.name ?? "Tetamu") : "Memuatkan profil..."}
              </p>
              <p className="text-xs text-slate-600">
                {session ? getRoleLabel(session.role) : "Tiada sesi aktif"}
              </p>
            </div>
          </div>

          {session ? (
            <button
              type="button"
              onClick={onLogout}
              className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-rose-700 px-3 py-2 text-xs font-semibold text-white hover:bg-rose-800"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              onClick={onNavigate}
              className="mt-3 inline-flex w-full items-center justify-center rounded-md border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100"
            >
              Log Masuk
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
