"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { easeOut, motion } from "motion/react";

const H2 = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return(
    <motion.h2
    initial={{
        y:-15,
        opacity:0
    }}
    whileInView={{
        y:0,
        opacity:1
    }}
    transition={{
        duration:0.2,
        ease:easeOut
    }}
    className={cn(
        className,
        'min-h-12 bg-gradient-to-bl from-neutral-700 to-neutral-900 bg-clip-text md:text-5xl text-2xl font-bold tracking-tighter text-transparent dark:from-neutral-200 dark:to-neutral-300'
    )}>{children}</motion.h2>
  );
};

export default H2;
