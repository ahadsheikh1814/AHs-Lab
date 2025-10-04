"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { easeInOut, motion } from "motion/react";

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
        ease:easeInOut,
        delay:.1
    }}
    className={cn(
        className,
        'md:text-xl text-base font-normal text-primary/80 text-balance'
    )}>{children}</motion.p>
  );
};

export default P;
