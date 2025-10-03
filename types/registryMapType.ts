import { ComponentType } from "react";

export type RegistryComponent = ComponentType<Record<string, unknown>>;
export type RegistryImporter = () => Promise<{ default: RegistryComponent }>;