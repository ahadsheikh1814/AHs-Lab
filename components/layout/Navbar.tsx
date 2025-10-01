"use client";
import { IconLayoutDashboardFilled } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import React, { useState } from "react";
import { ModeToggle } from "./ModeToggle";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenu, setIsMenu] = useState<boolean>(false);

  return (
    <>
      <nav className="w-full h-full sticky top-0 backdrop-blur-2xl flex items-center justify-between py-4 md:px-0 px-5 z-50">
        <div className="flex items-center gap-10">
          <Logo />
          <div className="hidden md:flex gap-3">
            <Link
              href={"/docs"}
              className="text-primary/90 hover:text-primary text-sm font-medium"
            >
              Components
            </Link>
            <Link
              href={"/templates"}
              className="text-primary/90 hover:text-primary text-sm font-medium"
            >
              Templates
            </Link>
          </div>
        </div>
        <div className="flex items-center md:gap-4 gap-2 justify-center">
          <ModeToggle />
          <a href="https://x.com/AhadSheikh1814_" className="hidden md:block">
            <XIcon className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />
          </a>
          <button
            onClick={() => setIsMenu(!isMenu)}
            className="text-neutral-600 size-[24px] block z-[120] -mt-1 dark:text-neutral-300 h-5 w-5 md:hidden"
          >
            {isMenu ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {isMenu && <MobileNav onClose={() => setIsMenu(false)} />}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

interface MobileNavProps {
  onClose: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ onClose }) => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2 }}
      className="fixed top-0 left-0 bg-white dark:bg-black text-primary h-screen w-screen z-[100]  p-6"
    >
      <div className="flex justify-between items-center">
        <Logo />
        <ModeToggle />
      </div>
      <div className="flex flex-col gap-6 mt-20">
        <Link
          href={"/"}
          onClick={onClose}
          className="text-primary text-lg font-medium"
        >
          Home
        </Link>
        <Link
          href={"/docs"}
          onClick={onClose}
          className="text-primary text-lg font-medium"
        >
          Components
        </Link>
        <Link
          href={"/templates"}
          onClick={onClose}
          className="text-primary text-lg font-medium"
        >
          Templates
        </Link>
        <a
          href="https://x.com/AhadSheikh1814_"
          onClick={onClose}
          className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300"
        >
          <XIcon className="h-5 w-5" />
          <span>Follow on X</span>
        </a>
      </div>
    </motion.nav>
  );
};

interface IconProps {
  className?: string;
  size?: number;
  color?: string;
}

const XIcon: React.FC<IconProps> = ({
  className = "h-4 w-4 text-neutral-500 dark:text-neutral-500",
  size = 24,
  color = "currentColor",
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
    <div className="text-xl font-bold text-ahs flex items-center gap-2 cursor-pointer">
      <IconLayoutDashboardFilled />
      <h1 className="text-primary">AHs Lab</h1>
    </div>
  );
};
