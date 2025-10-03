"use client";

import { useState, useEffect } from "react";
import { getComponentPath } from "@/lib/codeUtils";

interface BlocksCodeProps {
  componentKey?: string;
  path?: string;
}

const BlocksCode = ({ componentKey, path }: BlocksCodeProps) => {
  const [code, setCode] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchCode() {
      try {
        let filePath = path;
        
        // If path is not provided but componentKey is, get path from registry
        if (!filePath && componentKey) {
          filePath = getComponentPath(componentKey) ?? undefined;
          
          if (!filePath) {
            throw new Error(`Component "${componentKey}" not found in registry`);
          }
        } else if (!filePath) {
          // Default to Navigation_02 if neither path nor componentKey is provided
          filePath = "resistry/blocks/navigations/Navigation_02.tsx";
        }
        
        const response = await fetch(`/api/code?path=${filePath}`);
        if (!response.ok) throw new Error('Failed to fetch code');
        const data = await response.json();
        setCode(data.code);
      } catch (error) {
        console.error("Error fetching code:", error);
        setCode(`Error loading code: ${(error as Error).message}`);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCode();
  }, [componentKey, path]);

  return (
    <pre className="p-4 dark:bg-gray-900 bg-gray-200 dark:text-green-300 text-gray-800 overflow-auto rounded-md">
      <code>{isLoading ? "Loading..." : code}</code>
    </pre>
  );
};

export default BlocksCode;
