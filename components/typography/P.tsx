"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { easeInOut, easeOut, motion } from "motion/react";

const P = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return(
    <motion.p
    initial={{
        y:-10,
        opacity:0
    }}
    animate={{
        y:0,
        opacity:1
    }}
    transition={{
        duration:0.3,
        ease:easeOut,
        delay:.1
    }}
    className={cn(
        className,
        'mt-5 md:min-w-[32%] w-[90%] text-balance text-sm text-neutral-500 dark:text-neutral-400 font-medium leading-relaxed'
    )}>{children}</motion.p>
  );
};

export default P;
