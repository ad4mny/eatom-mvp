"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type UserRole = "internal" | "external_pl" | "external_public";

type AuthSession = {
  role: UserRole;
  name: string;
};

type LoginInput = {
  role: UserRole;
  name: string;
};

type AuthContextValue = {
  session: AuthSession | null;
  isReady: boolean;
  login: (input: LoginInput) => void;
  logout: () => void;
};

const STORAGE_KEY = "eatom_mock_session";
const ROLE_COOKIE_KEY = "eatom_mock_role";
const SESSION_COOKIE_KEY = "eatom_mock_auth";

const AuthContext = createContext<AuthContextValue | null>(null);

function getCookieValue(key: string) {
  const cookie = document.cookie
    .split(";")
    .map((item) => item.trim())
    .find((item) => item.startsWith(`${key}=`));

  if (!cookie) {
    return null;
  }

  return decodeURIComponent(cookie.split("=")[1] ?? "");
}

export function getDefaultDashboardByRole(role: UserRole) {
  if (role === "internal") {
    return "/erp/dashboard";
  }

  if (role === "external_pl") {
    return "/external/license-holder";
  }

  return "/external/non-license-holder";
}

export default function AuthProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [session, setSession] = useState<AuthSession | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    try {
      const roleCookie = getCookieValue(ROLE_COOKIE_KEY);
      const authCookie = getCookieValue(SESSION_COOKIE_KEY);

      if (!roleCookie || !authCookie) {
        window.localStorage.removeItem(STORAGE_KEY);
        setSession(null);
        return;
      }

      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as AuthSession;
        if (parsed?.role && parsed?.name) {
          setSession(parsed);
          return;
        }
      }

      window.localStorage.removeItem(STORAGE_KEY);
      setSession(null);
    } catch {
      // Ignore malformed local session.
    } finally {
      setIsReady(true);
    }
  }, []);

  const login = useCallback((input: LoginInput) => {
    const next: AuthSession = {
      role: input.role,
      name: input.name,
    };

    setSession(next);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    document.cookie = `${ROLE_COOKIE_KEY}=${input.role}; path=/; SameSite=Lax`;
    document.cookie = `${SESSION_COOKIE_KEY}=${Date.now()}; path=/; SameSite=Lax`;
  }, []);

  const logout = useCallback(() => {
    setSession(null);
    window.localStorage.removeItem(STORAGE_KEY);
    document.cookie = `${ROLE_COOKIE_KEY}=; path=/; max-age=0`;
    document.cookie = `${SESSION_COOKIE_KEY}=; path=/; max-age=0`;
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      session,
      isReady,
      login,
      logout,
    }),
    [isReady, login, logout, session],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return context;
}
