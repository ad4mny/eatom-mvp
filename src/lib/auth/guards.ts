import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export type AppRole = "internal" | "external_pl" | "external_public";

const ROLE_COOKIE_KEY = "eatom_mock_role";
const SESSION_COOKIE_KEY = "eatom_mock_auth";

const validRoles = new Set<AppRole>(["internal", "external_pl", "external_public"]);

export function getDefaultPathByRole(role: AppRole) {
  if (role === "internal") {
    return "/erp/dashboard";
  }

  if (role === "external_pl") {
    return "/external/license-holder";
  }

  return "/external/non-license-holder";
}

function buildLoginPath(nextPath?: string) {
  if (!nextPath) {
    return "/login";
  }

  const safeNextPath = nextPath.startsWith("/") ? nextPath : "/";
  return `/login?next=${encodeURIComponent(safeNextPath)}`;
}

type RequireAuthOptions = {
  allowedRoles?: AppRole[];
  nextPath?: string;
};

export async function requireAuth(options: RequireAuthOptions = {}) {
  const store = await cookies();
  const roleRaw = store.get(ROLE_COOKIE_KEY)?.value;
  const authToken = store.get(SESSION_COOKIE_KEY)?.value;

  if (!roleRaw || !authToken || !validRoles.has(roleRaw as AppRole)) {
    redirect(buildLoginPath(options.nextPath));
  }

  const role = roleRaw as AppRole;

  if (options.allowedRoles && !options.allowedRoles.includes(role)) {
    redirect(getDefaultPathByRole(role));
  }

  return role;
}
