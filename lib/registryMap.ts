import registry from "@/registry.json";

type RegistryItem = {
  name: string;
  files?: { path: string }[];
};

export const registryMap: Record<string, string> = Object.fromEntries(
  (registry.items as RegistryItem[])
    .map((item) => {
      const filePath = item.files?.[0]?.path;
      return filePath ? ([item.name, filePath] as const) : null;
    })
    .filter((entry): entry is readonly [string, string] => entry !== null),
);
