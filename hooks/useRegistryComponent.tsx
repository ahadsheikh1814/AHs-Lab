// useRegistryComponent.ts
import { useEffect, useState } from "react";
import { registryMap } from "../lib/registryMap";
import { RegistryComponent } from "../types/registryMapType";

export function useRegistryComponent(slug: string) {
  const [Component, setComponent] = useState<RegistryComponent | null>(null);

  useEffect(() => {
    const importer = registryMap[slug];
    if (!importer) {
      console.warn(`Component "${slug}" not found in registry`);
      setComponent(null);
      return;
    }

    importer().then((mod) => {
      setComponent(() => mod.default);
    });
  }, [slug]);

  return Component;
}
