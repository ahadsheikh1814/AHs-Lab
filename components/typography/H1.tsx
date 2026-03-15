"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { easeInOut, motion } from "motion/react";

const H1 = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return(
    <motion.h1
    initial={{
        y:-20,
        opacity:0
    }}
    animate={{
        y:0,
        opacity:1
    }}
    transition={{
        duration:0.3,
        ease:easeInOut
    }}
    className={cn(
        className,
        'min-h-24 bg-gradient-to-bl from-neutral-700 to-neutral-900 bg-clip-text text-7xl font-bold tracking-tighter text-transparent dark:from-neutral-200 dark:to-neutral-300'
    )}>{children}</motion.h1>
  );
};

export default H1;
