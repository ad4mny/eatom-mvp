import type { InternalModuleDefinition } from "@/lib/internal-modules/types";
import { getModuleByRouteSlug } from "@/lib/internal-modules/catalog";

export function getInternalModuleOrThrow(routeSlug: string): InternalModuleDefinition {
  const moduleDef = getModuleByRouteSlug(routeSlug);

  if (!moduleDef) {
    throw new Error(`Missing internal module definition for route slug: ${routeSlug}`);
  }

  return moduleDef;
}
