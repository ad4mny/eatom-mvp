import type { CSSProperties } from "react";
import { EXTERNAL_MODULE_CONTENT_WIDTH } from "@/config/module-layout";

const externalModulesLayoutStyle = {
  "--module-content-width": EXTERNAL_MODULE_CONTENT_WIDTH,
} as CSSProperties;

export default function PenggunaLuarRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div style={externalModulesLayoutStyle}>{children}</div>;
}
