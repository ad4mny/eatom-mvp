import type { CSSProperties } from "react";
import { INTERNAL_MODULE_CONTENT_WIDTH } from "@/config/module-layout";

const modulesLayoutStyle = {
  "--module-content-width": INTERNAL_MODULE_CONTENT_WIDTH,
} as CSSProperties;

export default function ModulesRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div style={modulesLayoutStyle}>{children}</div>;
}
