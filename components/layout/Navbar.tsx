"use client";
import { IconLayoutDashboardFilled } from "@tabler/icons-react";
import { motion } from "motion/react";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  return (
    <nav className="w-full h-full sticky top-0 backdrop-blur-2xl bg-white dark:bg-black flex items-center justify-between py-4 px-6 border-b border-neutral-200 dark:border-neutral-800 z-50">
      <div className="flex items-center gap-10">
        <Logo />
        <div>
          <Link href={"/docs"} className="text-primary/90 hover:text-primary text-sm font-medium">
            Components
          </Link>
        </div>
      </div>
        <div className="flex items-center gap-4">
            <ModeToggle/>
            <a href="https://x.com/AhadSheikh1814_">
            <XIcon className="h-5 w-5 text-neutral-500 dark:text-neutral-300"/>
            </a>
        </div>
      <motion.span
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 }}
        className="w-full absolute bottom-0 left-0 h-[1px] bg-lime-500 block"
      />
    </nav>
  );
};

export default Navbar;


interface IconProps {
  className?: string;
  size?: number;
  color?: string;
}

const XIcon: React.FC<IconProps> = ({ 
  className = "h-4 w-4 text-neutral-500 dark:text-neutral-500", 
  size = 24,
  color = "currentColor" 
}) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  );
};

const Logo = () => {
  return (
    <div className="text-xl font-bold text-lime-500 flex items-center gap-2">
      <IconLayoutDashboardFilled />
      <h1 className="text-primary">AHs Lab</h1>
    </div>
  );
};
