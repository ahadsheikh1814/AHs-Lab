"use client";
import { motion } from "motion/react";
import React from "react";
import H1 from "../typography/H1";
import P from "../typography/P";
import { Button } from "../ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Hero = () => {
  const router = useRouter();
  return (
    <div className="relative overflow-hidden w-full md:px-10 px-5 border-b border-accent">
      <div className="h-[50vh] w-full relative overflow-hidden">
        <div className="md:mt-20 md:mb-5">
          <h1 className="min-h-24 bg-gradient-to-bl from-neutral-700 to-neutral-900 bg-clip-text text-7xl font-bold tracking-tighter text-transparent dark:from-neutral-200 dark:to-neutral-300">
            Build enterprise-grade sites <br /> with animated Shadcn blocks
          </h1>
          <p className="mt-5 w-[30%] text-balance text-sm text-neutral-600 font-medium">
            Quartz is your complete Shadcn kit for building and scaling marketing
            websites, with hundreds of blocks and more added regularly.
          </p>
          <div className="mt-5 flex gap-2">
            <Button
              onClick={() => router.push('/docs')}
              className="cursor-pointer">
              Browse components
            </Button>
            <Button
              variant="outline"
              onClick={() => router.push('/templeats')}
              className="cursor-pointer">
              Templeates
            </Button>
          </div>
            <div className="flex gap-10 mt-10">
              {Icons.map((icon) => (
                <div key={icon.name} className="flex gap-2">
                  <Image src={icon.icon} alt={icon.name} width={20} height={20} className="size-8" />
                </div>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
};

const Icons =[
  {
    name: "shadcn",
    icon: "/icons/shadcn.svg",
  },
  {
    name: "Tailwindcss",
    icon: "/icons/Tailwindcss.svg",
  },
  {
    name: "react",
    icon: "/icons/React.svg",
  },
  {
    name: "nextjs",
    icon: "/icons/Nextjs.svg",
  }
]

export default Hero;
