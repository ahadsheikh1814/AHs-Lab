// lib/codeUtils.ts
import { registryMap } from "./registryMap";

/**
 * Get the file path for a component based on its key in the registry map
 */
export function getComponentPath(componentKey: string): string | null {
  // Check if the component exists in the registry map
  if (!registryMap[componentKey]) {
    return null;
  }
  
  // For navigation components, we know the pattern
  if (componentKey.startsWith('Navigation_')) {
    return `resistry/blocks/navigations/${componentKey}.tsx`;
  }
  
  // For other components, we could add more patterns here
  
  // Default fallback
  return `resistry/${componentKey}.tsx`;
}

/**
 * Get all available component keys from the registry map
 */
export function getAvailableComponents(): string[] {
  return Object.keys(registryMap);
}