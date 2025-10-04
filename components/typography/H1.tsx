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
        'md:text-6xl text-3xl font-semibold tracking-tight'
    )}>{children}</motion.h1>
  );
};

export default H1;
