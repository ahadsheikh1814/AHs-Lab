import { registryMap } from "@/lib/registryMap";

export function getComponentPath(componentKey: string): string | null {
  return registryMap[componentKey] ?? null;
}
