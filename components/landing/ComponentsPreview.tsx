"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import TypewriterEffect from "@/resistry/TypeWriterEffect";
import { Check, Copy, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

const INSTALL_COMMAND = "npx shadcn@latest add https://ahs-lab.vercel.app/r/TypeWriterEffect.json";

const ComponentsPreview = () => {
  const router = useRouter();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(INSTALL_COMMAND);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-0 w-full md:px-10 px-5 flex flex-col md:flex-row justify-between border-b border-accent">
      {/* Left: Component preview */}
      <div className="flex-1 border-b md:border-b-0 md:border-r border-accent flex items-center justify-center py-10">
        <TypewriterEffect />
      </div>

      {/* Right: Text + CTA */}
      <div className="flex-1 md:px-8 flex flex-col justify-center py-10">
        <h2 className="bg-gradient-to-bl from-neutral-700 to-neutral-900 bg-clip-text text-4xl md:text-5xl font-bold tracking-tighter text-transparent dark:from-neutral-200 dark:to-neutral-300 leading-tight">
          Component showcase
        </h2>
        <p className="mt-4 text-balance text-sm text-neutral-500 dark:text-neutral-400 font-medium leading-relaxed md:w-[80%]">
          Use ready-made components by copy-pasting. Run the command below in
          your project terminal to install this component.
        </p>

        {/* Install command */}
        <div className="mt-4 w-full md:w-[80%] flex items-center gap-2 rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 px-3 py-2.5">
          <Terminal className="h-3.5 w-3.5 shrink-0 text-neutral-400 dark:text-neutral-500" />
          <code className="flex-1 text-xs text-neutral-600 dark:text-neutral-300 font-mono truncate">
            {INSTALL_COMMAND}
          </code>
          <button
            onClick={handleCopy}
            aria-label="Copy command"
            className={cn(
              "shrink-0 rounded p-1 transition-colors duration-150 cursor-pointer",
              copied
                ? "text-green-500"
                : "text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200"
            )}
          >
            {copied
              ? <Check className="h-3.5 w-3.5" />
              : <Copy className="h-3.5 w-3.5" />
            }
          </button>
        </div>

        <div className="mt-5 flex gap-2">
          <Button
            className="cursor-pointer"
            variant="outline"
            onClick={() => router.push("/docs")}
          >
            View More
          </Button>
          <Button
            className="cursor-pointer"
            onClick={() => router.push("/docs")}
          >
            View docs
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ComponentsPreview;