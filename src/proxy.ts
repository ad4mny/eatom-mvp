import { NextResponse, type NextRequest } from "next/server";

const ROLE_COOKIE_KEY = "eatom_mock_role";
const SESSION_COOKIE_KEY = "eatom_mock_auth";
const validRoles = new Set(["internal", "external_pl", "external_public"]);
const LOGIN_PATH = "/login";
const publicPaths = new Set(["/", "/landing", LOGIN_PATH]);
const internalOnlyPrefixes = ["/erp", "/dashboard/internal"];
const externalOnlyPrefixes = ["/external", "/dashboard/external", "/pengguna-luar"];
const externalPlOnlyPrefixes = [
  "/external/license-holder",
  "/dashboard/external/pl",
  "/pengguna-luar/pemegang-lesen",
];
const externalPublicOnlyPrefixes = [
  "/external/non-license-holder",
  "/dashboard/external/awam",
  "/pengguna-luar/awam",
];
const legacyErpPrefixRedirects = [
  { from: "/erp/perlesenan-dan-kawalselia", to: "/erp/licensing-regulatory", preserveSuffix: false },
  { from: "/erp/peperiksaan-pensijilan", to: "/erp/licensing-regulatory/peperiksaan", preserveSuffix: false },
  { from: "/erp/perlesenan", to: "/erp/licensing-regulatory/perlesenan", preserveSuffix: false },
  { from: "/erp/kawalselia", to: "/erp/licensing-regulatory/kawalselia", preserveSuffix: false },
  { from: "/erp/permit", to: "/erp/licensing-regulatory/permit", preserveSuffix: false },
  { from: "/erp/instalasi-nuklear", to: "/erp/licensing-regulatory", preserveSuffix: false },
  { from: "/erp/penguatkuasaan", to: "/erp/licensing-regulatory", preserveSuffix: false },
  { from: "/erp/pengiktirafan", to: "/erp/licensing-regulatory", preserveSuffix: false },
  { from: "/erp/penilaian-lawatan-tapak", to: "/erp/licensing-regulatory", preserveSuffix: false },
  { from: "/erp/kewangan", to: "/erp/licensing-regulatory", preserveSuffix: false },
  { from: "/erp/pangkalan-data", to: "/erp/licensing-regulatory", preserveSuffix: false },
  { from: "/erp/laporan-statistik", to: "/erp/licensing-regulatory", preserveSuffix: false },
  { from: "/erp/pengurusan-sumber-manusia", to: "/erp/hr-management", preserveSuffix: true },
  { from: "/erp/sistem-pemantauan-radiologi", to: "/erp/environmental-radiation-monitoring", preserveSuffix: true },
  { from: "/erp/maklumat-pekerja-sinaran", to: "/erp/radiation-worker-information", preserveSuffix: true },
  { from: "/erp/sistem-pengurusan-dokumen", to: "/erp/document-management", preserveSuffix: true },
  { from: "/erp/maklumat-dos-pekerja-sinaran", to: "/erp/radiation-worker-dose-information", preserveSuffix: true },
  { from: "/erp/sistem-khidmat-pengurusan", to: "/erp/management-services", preserveSuffix: true },
  { from: "/erp/pentadbiran-sistem", to: "/erp/management-services", preserveSuffix: false },
  { from: "/erp/peti-pesanan", to: "/erp/management-services", preserveSuffix: false },
  { from: "/erp/pentadbir-dalaman", to: "/erp/management-services/pentadbir-dalaman", preserveSuffix: false },
  { from: "/erp/manual-pengguna", to: "/erp/management-services/manual-pengguna", preserveSuffix: false },
] as const;

type Role = "internal" | "external_pl" | "external_public";

function isStaticOrApiPath(pathname: string) {
  if (pathname.startsWith("/_next") || pathname.startsWith("/api")) {
    return true;
  }

  if (pathname === "/favicon.ico") {
    return true;
  }

  return /\.[^/]+$/.test(pathname);
}

function getDefaultPathByRole(role: string) {
  if (role === "internal") {
    return "/erp/dashboard";
  }

  if (role === "external_pl") {
    return "/external/license-holder";
  }

  if (role === "external_public") {
    return "/external/non-license-holder";
  }

  return LOGIN_PATH;
}

function getSafeNextPath(pathname: string, search: string) {
  if (pathname === LOGIN_PATH) {
    return null;
  }

  if (!search) {
    return pathname;
  }

  return `${pathname}${search}`;
}

function isPathInPrefixes(pathname: string, prefixes: string[]) {
  return prefixes.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}

function isPublicPath(pathname: string) {
  return publicPaths.has(pathname);
}

function getLegacyErpRedirectPath(pathname: string) {
  const match = legacyErpPrefixRedirects.find(
    ({ from }) => pathname === from || pathname.startsWith(`${from}/`),
  );

  if (!match) {
    return null;
  }

  if (!match.preserveSuffix) {
    return match.to;
  }

  const suffix = pathname.slice(match.from.length);
  return `${match.to}${suffix}`;
}

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (isStaticOrApiPath(pathname)) {
    return NextResponse.next();
  }

  if (pathname === "/modules" || pathname.startsWith("/modules/")) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname =
      pathname === "/modules"
        ? "/erp/dashboard"
        : pathname.replace(/^\/modules/, "/erp");
    redirectUrl.search = search;
    return NextResponse.redirect(redirectUrl);
  }

  const legacyErpRedirectPath = getLegacyErpRedirectPath(pathname);
  if (legacyErpRedirectPath) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = legacyErpRedirectPath;
    redirectUrl.search = search;
    return NextResponse.redirect(redirectUrl);
  }

  const role = request.cookies.get(ROLE_COOKIE_KEY)?.value;
  const authToken = request.cookies.get(SESSION_COOKIE_KEY)?.value;

  if (!role || !authToken || !validRoles.has(role)) {
    if (isPublicPath(pathname)) {
      return NextResponse.next();
    }

    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = LOGIN_PATH;

    const nextPath = getSafeNextPath(pathname, search);
    if (nextPath) {
      loginUrl.searchParams.set("next", nextPath);
    }

    const response = NextResponse.redirect(loginUrl);
    response.cookies.delete(ROLE_COOKIE_KEY);
    response.cookies.delete(SESSION_COOKIE_KEY);
    return response;
  }

  if (pathname === LOGIN_PATH) {
    const destination = getDefaultPathByRole(role);
    if (destination !== LOGIN_PATH) {
      const redirectUrl = request.nextUrl.clone();
      redirectUrl.pathname = destination;
      redirectUrl.search = "";
      return NextResponse.redirect(redirectUrl);
    }
  }

  const sessionRole = role as Role;
  const defaultDestination = getDefaultPathByRole(sessionRole);

  if (
    sessionRole === "internal" &&
    isPathInPrefixes(pathname, externalOnlyPrefixes)
  ) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = defaultDestination;
    redirectUrl.search = "";
    return NextResponse.redirect(redirectUrl);
  }

  if (
    (sessionRole === "external_pl" || sessionRole === "external_public") &&
    isPathInPrefixes(pathname, internalOnlyPrefixes)
  ) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = defaultDestination;
    redirectUrl.search = "";
    return NextResponse.redirect(redirectUrl);
  }

  if (
    sessionRole === "external_pl" &&
    isPathInPrefixes(pathname, externalPublicOnlyPrefixes)
  ) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = defaultDestination;
    redirectUrl.search = "";
    return NextResponse.redirect(redirectUrl);
  }

  if (
    sessionRole === "external_public" &&
    isPathInPrefixes(pathname, externalPlOnlyPrefixes)
  ) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = defaultDestination;
    redirectUrl.search = "";
    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
