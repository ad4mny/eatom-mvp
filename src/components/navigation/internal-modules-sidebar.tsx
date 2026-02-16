"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  internalSidebarSections,
  type SidebarNavItem,
} from "@/config/internal-sidebar-nav";

type InternalModulesSidebarProps = {
  onNavigate?: () => void;
};

function classNames(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function isRouteActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

function isItemActive(pathname: string, item: SidebarNavItem) {
  if (isRouteActive(pathname, item.href)) {
    return true;
  }

  return (
    item.children?.some((child) => isRouteActive(pathname, child.href)) ?? false
  );
}

export default function InternalModulesSidebar({
  onNavigate,
}: Readonly<InternalModulesSidebarProps>) {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleExpanded = (href: string, fallbackState: boolean) => {
    setExpanded((current) => ({
      ...current,
      [href]: !(current[href] ?? fallbackState),
    }));
  };

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
        <h2 className="text-sm font-bold text-slate-900">Navigasi Modul</h2>
        <p className="mt-1 text-xs text-slate-600">
          Pilih modul dan submodul terus dari sidebar.
        </p>
      </div>

      {internalSidebarSections.map((section) => (
        <section key={section.label} className="space-y-2">
          <p className="px-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
            {section.label}
          </p>

          <ul className="space-y-1">
            {section.items.map((item) => {
              const hasChildren = Boolean(item.children?.length);
              const isActive = isItemActive(pathname, item);
              const isOpen = hasChildren
                ? (expanded[item.href] ?? isActive)
                : false;

              return (
                <li key={item.href} className="rounded-lg">
                  <div
                    className={classNames(
                      "flex items-center gap-2 rounded-lg",
                      isActive && "bg-slate-100",
                    )}
                  >
                    <Link
                      href={item.href}
                      onClick={onNavigate}
                      className={classNames(
                        "min-w-0 flex-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                        isActive
                          ? "text-slate-900"
                          : "text-slate-700 hover:bg-slate-50 hover:text-slate-900",
                      )}
                    >
                      <span className="block truncate">{item.label}</span>
                    </Link>

                    {hasChildren ? (
                      <button
                        type="button"
                        onClick={() => toggleExpanded(item.href, isActive)}
                        className="mr-1 rounded-md px-2 py-1 text-xs font-semibold text-slate-500 hover:bg-slate-200 hover:text-slate-700"
                        aria-label={isOpen ? "Sembunyi submodul" : "Papar submodul"}
                        aria-expanded={isOpen}
                      >
                        {isOpen ? "▾" : "▸"}
                      </button>
                    ) : null}
                  </div>

                  {hasChildren && isOpen ? (
                    <ul className="mt-1 space-y-1 pl-4">
                      {item.children?.map((child) => {
                        const isChildActive = isRouteActive(pathname, child.href);

                        return (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={onNavigate}
                              className={classNames(
                                "block rounded-md px-3 py-1.5 text-xs font-medium transition-colors",
                                isChildActive
                                  ? "bg-blue-50 text-blue-700"
                                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900",
                              )}
                            >
                              {child.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}
