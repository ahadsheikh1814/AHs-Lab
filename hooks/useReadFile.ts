// hooks/useReadFile.ts (NO "use client" at the top!)
import fs from "fs";
import path from "path";

export const useReadFile = (filePath: string): string | null => {
  try {
    const absolutePath = path.resolve(process.cwd(), filePath);
    const fileContent = fs.readFileSync(absolutePath, "utf-8");
    return fileContent;
  } catch (error) {
    console.error("Error reading file:", error);
    return null;
  }
};
