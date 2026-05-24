"use client";
import { MultiChoiceCommand } from "@/resistry/commands";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <MultiChoiceCommand
        commands={{
          npm: "npx shadcn@latest add https://ahs-lab.vercel.app/r/TypeWriterEffect.json",
          pnpm: "pnpm dlx shadcn@latest add https://ahs-lab.vercel.app/r/TypeWriterEffect.json",
          yarn: "yarn dlx shadcn@latest add https://ahs-lab.vercel.app/r/TypeWriterEffect.json",
          bun: "bunx --bun shadcn@latest add https://ahs-lab.vercel.app/r/TypeWriterEffect.json",
        }}
      />
    </div>
  );
};

export default page;
