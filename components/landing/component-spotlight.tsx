"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const components = [
  {
    name: "TypeWriter Effect",
    href: "/docs/components/typewriter-effect",
    registry: "typewriter-effect",
    tag: "New",
    tagColor: "bg-red-100 text-red-600 dark:bg-red-950 dark:text-red-400",
    description: "Animated text typing effect with configurable speed and cursor.",
    preview: <TypewriterPreview />,
  },
  {
    name: "AI Inputs",
    href: "/docs/components/ai-inputs",
    registry: "ai-inputs",
    tag: "Popular",
    tagColor: "bg-cyan-100 text-cyan-600 dark:bg-cyan-950 dark:text-cyan-400",
    description: "Sleek input fields styled for AI chat interfaces.",
    preview: <AIInputPreview />,
  },
  {
    name: "Animated Menubar",
    href: "/docs/components/animeted-menubar",
    registry: "animeted-menubar",
    tag: null,
    tagColor: "",
    description: "Smooth animated navigation menubar with hover transitions.",
    preview: <MenubarPreview />,
  },
  {
    name: "Bento Hover Effect",
    href: "/docs/components/bento-hover-effect",
    registry: "bento-hover-effect",
    tag: "Popular",
    tagColor: "bg-purple-100 text-purple-600 dark:bg-purple-950 dark:text-purple-400",
    description: "Bento grid cards with magnetic spotlight hover effect.",
    preview: <BentoPreview />,
  },
  {
    name: "Buttons",
    href: "/docs/components/Buttons",
    registry: "Buttons",
    tag: null,
    tagColor: "",
    description: "A collection of beautifully styled button variants.",
    preview: <ButtonsPreview />,
  },
  {
    name: "Hover Depth Card",
    href: "/docs/components/hover-depth-card",
    registry: "hover-depth-card",
    tag: null,
    tagColor: "",
    description: "Card with 3D parallax depth effect on hover.",
    preview: <DepthCardPreview />,
  },
  {
    name: "Spotlight Card",
    href: "/docs/components/spotlight-card",
    registry: "spotlight-card",
    tag: "New",
    tagColor: "bg-red-100 text-red-600 dark:bg-red-950 dark:text-red-400",
    description: "Card with a glowing spotlight that follows your cursor.",
    preview: <SpotlightPreview />,
  },
];

// ─── Mini Previews ────────────────────────────────────────────────────────────

function TypewriterPreview() {
  const [displayed, setDisplayed] = React.useState("Build faster_");
  React.useEffect(() => {
    const texts = ["Build faster_", "Ship smarter_", "Look better_"];
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % texts.length;
      setDisplayed(texts[i]);
    }, 1800);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex items-center justify-center h-full">
      <span className="text-sm font-mono font-medium text-neutral-700 dark:text-neutral-300">
        {displayed}
      </span>
    </div>
  );
}

function AIInputPreview() {
  return (
    <div className="flex items-end justify-center h-full px-4">
      <div className="w-full rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 flex items-center gap-2 shadow-sm">
        <span className="text-xs text-neutral-400 flex-1">Ask me anything...</span>
        <div className="h-5 w-5 rounded-full bg-neutral-900 dark:bg-white flex items-center justify-center">
          <ArrowRight className="h-3 w-3 text-white dark:text-black" />
        </div>
      </div>
    </div>
  );
}

function MenubarPreview() {
  const [active, setActive] = React.useState(0);
  const items = ["Home", "Docs", "Blog"];
  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex gap-1 rounded-full border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 p-1">
        {items.map((item, i) => (
          <button
            key={item}
            onClick={() => setActive(i)}
            className={cn(
              "px-3 py-1 rounded-full text-xs font-medium transition-all duration-200",
              active === i
                ? "bg-neutral-900 dark:bg-white text-white dark:text-black"
                : "text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200"
            )}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

function BentoPreview() {
  return (
    <div className="grid grid-cols-2 gap-1.5 px-4 h-full items-center">
      {[["col-span-2", "h-10"], ["", "h-14"], ["", "h-14"]].map(([span, h], i) => (
        <div
          key={i}
          className={cn(
            "rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors cursor-pointer",
            span, h
          )}
        />
      ))}
    </div>
  );
}

function ButtonsPreview() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 px-3 h-full">
      <button className="px-3 py-1.5 rounded-md bg-neutral-900 dark:bg-white text-white dark:text-black text-xs font-medium">
        Primary
      </button>
      <button className="px-3 py-1.5 rounded-md border border-neutral-300 dark:border-neutral-600 text-xs font-medium text-neutral-700 dark:text-neutral-300">
        Outline
      </button>
      <button className="px-3 py-1.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-xs font-medium text-neutral-700 dark:text-neutral-300">
        Ghost
      </button>
    </div>
  );
}

function DepthCardPreview() {
  return (
    <div className="flex items-center justify-center h-full px-4">
      <div className="w-full rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 p-3 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
        <div className="h-2 w-16 rounded bg-neutral-200 dark:bg-neutral-700 mb-2" />
        <div className="h-2 w-24 rounded bg-neutral-100 dark:bg-neutral-800" />
      </div>
    </div>
  );
}

function SpotlightPreview() {
  const [pos, setPos] = React.useState({ x: 50, y: 50 });
  return (
    <div
      className="relative flex items-center justify-center h-full px-4 overflow-hidden"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPos({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }}
    >
      <div
        className="w-full rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 p-4 overflow-hidden relative"
        style={{
          background: `radial-gradient(circle at ${pos.x}% ${pos.y}%, rgba(120,120,120,0.12) 0%, transparent 70%)`,
        }}
      >
        <div className="h-2 w-14 rounded bg-neutral-300 dark:bg-neutral-600 mb-2" />
        <div className="h-2 w-20 rounded bg-neutral-200 dark:bg-neutral-700" />
      </div>
    </div>
  );
}

// ─── Copy Button ──────────────────────────────────────────────────────────────

function CopyButton({ registry }: { registry: string }) {
  const [copied, setCopied] = useState(false);
  const cmd = `npx shadcn@latest add https://ahs-lab.vercel.app/r/${registry}.json`;

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    await navigator.clipboard.writeText(cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      aria-label="Copy install command"
      className={cn(
        "flex items-center gap-1.5 text-[10px] font-medium px-2 py-1 rounded-md border transition-all duration-150",
        copied
          ? "border-green-300 text-green-600 dark:border-green-700 dark:text-green-400 bg-green-50 dark:bg-green-950"
          : "border-neutral-200 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 bg-white dark:bg-neutral-900"
      )}
    >
      {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

const ComponentSpotlight = () => {
  return (
    <div className="w-full md:px-10 px-5 py-14">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <h3 className="pb-2 text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
            Component Library
          </h3>
          <h2 className="bg-gradient-to-bl from-neutral-700 to-neutral-900 bg-clip-text text-4xl md:text-5xl font-bold tracking-tighter text-transparent dark:from-neutral-200 dark:to-neutral-300 leading-tight">
            Everything you need,<br /> ready to paste.
          </h2>
        </div>
        <Link
          href="/docs/components"
          className="flex items-center gap-1.5 text-sm font-medium text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-150 group shrink-0 mb-1"
        >
          View all components
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-150" />
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {components.map((component, i) => (
          <motion.div
            key={component.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            viewport={{ once: true }}
          >
            <Link
              href={component.href}
              className="group flex flex-col rounded border border-accent bg-accent hover:border-neutral-300 dark:hover:border-neutral-600 transition-colors duration-200 overflow-hidden h-full"
            >
              {/* Preview area */}
              <div className="h-32 bg-neutral-50 dark:bg-neutral-900 border-b border-accent">
                {component.preview}
              </div>

              {/* Info */}
              <div className="p-4 flex flex-col gap-2 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-semibold text-neutral-800 dark:text-neutral-100 truncate">
                    {component.name}
                  </span>
                  {component.tag && (
                    <span className={cn("text-[10px] font-semibold px-1.5 py-0.5 rounded-full shrink-0", component.tagColor)}>
                      {component.tag}
                    </span>
                  )}
                </div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed flex-1">
                  {component.description}
                </p>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-xs text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 flex items-center gap-1 transition-colors duration-150">
                    View docs
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform duration-150" />
                  </span>
                  <CopyButton registry={component.registry} />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ComponentSpotlight;