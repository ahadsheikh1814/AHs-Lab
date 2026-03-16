"use client";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import NewButton from "./new-button";

const Hero = () => {
  const router = useRouter();
  return (
    <div className="relative overflow-hidden w-full md:px-10 px-5 border-b border-accent">
      <div className="min-h-[50vh] w-full relative overflow-hidden">
        <div className="md:mt-20 md:mb-5 mt-12 mb-4">

          {/* Changelog badge */}
          <NewButton
            className="my-2"
            title="changelog"
            href="/changelog"
          />

          {/* Headline */}
          <h1 className="md:min-h-32 py-1 bg-gradient-to-bl from-neutral-700 to-neutral-900 bg-clip-text md:text-7xl text-4xl text-balance font-bold tracking-tighter text-transparent dark:from-neutral-200 dark:to-neutral-300 mt-4 leading-[1.08]">
            Build modern web interfaces with <br className="hidden md:block" />  beautifully animated UI components.
          </h1>

          {/* Subtext */}
          <p className="mt-4 md:w-[32%] w-[90%] text-balance text-sm text-neutral-500 dark:text-neutral-400 font-medium leading-relaxed">
            AHs Lab is a modern UI component and template library for developers building with React, Next.js, and Tailwind CSS. Discover reusable components, production-ready templates, and an interactive playground to accelerate your workflow.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex gap-2 items-center">
            <Button
              onClick={() => router.push('/docs')}
              className="cursor-pointer h-9 px-4 text-sm font-medium"
            >
              Browse components
            </Button>
            <Button
              variant="outline"
              onClick={() => router.push('/templates')}
              className="cursor-pointer h-9 px-4 text-sm font-medium text-neutral-600 dark:text-neutral-300"
            >
              Templates
            </Button>
          </div>

          {/* Tech icons */}
          <div className="flex gap-4 mt-10 items-center">
            <span className="text-xs text-neutral-400 dark:text-neutral-500 font-medium mr-1 tracking-wide uppercase">
              Built with
            </span>
            {Icons.map((icon) => (
              <div
                key={icon.name}
                title={icon.name}
                className="opacity-50 hover:opacity-100 transition-opacity duration-200"
              >
                <Image
                  src={icon.icon}
                  alt={icon.name}
                  width={20}
                  height={20}
                  className="size-5 dark:invert"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

const Icons = [
  { name: "shadcn", icon: "/icons/shadcn.svg" },
  { name: "Tailwindcss", icon: "/icons/Tailwindcss.svg" },
  { name: "React", icon: "/icons/React.svg" },
  { name: "Next.js", icon: "/icons/Nextjs.svg" },
];

export default Hero;