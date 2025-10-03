// registryMap.ts
import { RegistryImporter } from "@/types/registryMapType";

export const registryMap: Record<string, RegistryImporter> = {
  Navigation_01: () => import("@/resistry/blocks/navigations/Navigation_01"),
  Navigation_02: () => import("@/resistry/blocks/navigations/Navigation_02"),
  Navigation_03: () => import("@/resistry/blocks/navigations/Navigation_03"),
};
