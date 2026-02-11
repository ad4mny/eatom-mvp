"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo } from "react";
import { getDefaultDashboardByRole, useAuth } from "./auth-provider";

function isProtectedPath(pathname: string) {
  return (
    pathname.startsWith("/modules") ||
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/pengguna-luar")
  );
}

export default function RouteGuard({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const router = useRouter();
  const { isReady, session } = useAuth();

  const redirectTo = useMemo(() => {
    if (!isReady) {
      return null;
    }

    if (!session) {
      if (isProtectedPath(pathname)) {
        return "/login";
      }
      return null;
    }

    if (pathname === "/login") {
      return getDefaultDashboardByRole(session.role);
    }

    if (pathname === "/") {
      return getDefaultDashboardByRole(session.role);
    }

    if (session.role === "internal") {
      if (
        pathname.startsWith("/dashboard/external") ||
        pathname.startsWith("/pengguna-luar")
      ) {
        return "/dashboard/internal";
      }
      return null;
    }

    if (session.role === "external_pl") {
      if (
        pathname.startsWith("/modules") ||
        pathname.startsWith("/dashboard/internal") ||
        pathname.startsWith("/dashboard/external/awam") ||
        pathname.startsWith("/pengguna-luar/awam")
      ) {
        return "/dashboard/external/pl";
      }

      if (pathname === "/dashboard/external") {
        return "/dashboard/external/pl";
      }

      return null;
    }

    if (
      pathname.startsWith("/modules") ||
      pathname.startsWith("/dashboard/internal") ||
      pathname.startsWith("/dashboard/external/pl") ||
      pathname.startsWith("/pengguna-luar/pemegang-lesen") ||
      pathname.startsWith("/pengguna-luar/pendaftaran-pengguna-baharu") ||
      pathname.startsWith("/pengguna-luar/manual-pengguna")
    ) {
      return "/dashboard/external/awam";
    }

    if (pathname === "/dashboard/external") {
      return "/dashboard/external/awam";
    }

    return null;
  }, [isReady, pathname, session]);

  useEffect(() => {
    if (redirectTo && redirectTo !== pathname) {
      router.replace(redirectTo);
    }
  }, [pathname, redirectTo, router]);

  if (!isReady) {
    return <div className="min-h-screen bg-slate-50" />;
  }

  if (redirectTo && redirectTo !== pathname) {
    return <div className="min-h-screen bg-slate-50" />;
  }

  return <>{children}</>;
}
