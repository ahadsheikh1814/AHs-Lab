// lib/readFile.ts (SERVER ONLY)
import fs from "node:fs";
import path from "node:path";

// Mark this function as server-only
export const readFile = (filePath: string): string | null => {
  try {
    const fullPath = path.resolve(process.cwd(), filePath);
    return fs.readFileSync(fullPath, "utf-8");
  } catch {
    return null;
  }
};

// This is a special Next.js directive
export const dynamic = "force-dynamic";
