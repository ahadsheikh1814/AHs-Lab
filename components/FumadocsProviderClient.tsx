// components/FumadocsProviderClient.tsx
"use client";

import { RootProvider } from "fumadocs-ui/provider";

export function FumadocsProviderClient({ children }: { children: React.ReactNode }) {
  return <RootProvider>{children}</RootProvider>;
}
