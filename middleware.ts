import { NextResponse, type NextRequest } from "next/server";

const ROLE_COOKIE_KEY = "eatom_mock_role";
const validRoles = new Set(["internal", "external_pl", "external_public"]);
const LOGIN_PATH = "/login";
const internalOnlyPrefixes = ["/erp", "/modules", "/dashboard/internal"];
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

  return "/login";
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

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (isStaticOrApiPath(pathname)) {
    return NextResponse.next();
  }

  const role = request.cookies.get(ROLE_COOKIE_KEY)?.value;

  if (!role || !validRoles.has(role)) {
    // Lock down all pages except login for unauthenticated users.
    if (pathname === LOGIN_PATH) {
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
