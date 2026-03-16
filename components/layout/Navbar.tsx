"use client";
import { IconLayoutDashboardFilled } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import React, { useState } from "react";
import { ModeToggle } from "./ModeToggle";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/docs", label: "Components" },
  { href: "/templates", label: "Templates" },
  { href: "/playground", label: "Playground" },
  { href: "/changelog", label: "Changelog" },
];

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);

  return (
    <>
      <nav className="w-full sticky top-0 backdrop-blur-2xl flex items-center justify-between py-4 md:px-10 px-5 border-b border-accent z-50">
        <div className="flex items-center gap-10">
          <Logo />
          <div className="hidden md:flex items-center gap-3">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-medium text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-150"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <ModeToggle />

          <a
            href="https://x.com/AhadSheikh1814_"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors duration-150"
            aria-label="Follow on X"
          >
            <XIcon className="h-4 w-4" />
          </a>

          <button
            onClick={() => setIsMenu(!isMenu)}
            aria-label="Toggle menu"
            className="md:hidden text-neutral-600 dark:text-neutral-300 z-[120]"
          >
            {isMenu ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
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

const MobileNav: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="fixed inset-0 bg-white dark:bg-black z-[100] p-6 flex flex-col"
    >
      <div className="flex justify-between items-center">
        <Logo />
        <div className="flex items-center gap-3">
          <ModeToggle />
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="text-neutral-600 dark:text-neutral-300"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-5 mt-16">
        <Link
          href="/"
          onClick={onClose}
          className="text-lg font-medium text-neutral-800 dark:text-neutral-100"
        >
          Home
        </Link>

        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            onClick={onClose}
            className="text-lg font-medium text-neutral-800 dark:text-neutral-100"
          >
            {label}
          </Link>
        ))}

        <a
          href="https://x.com/AhadSheikh1814_"
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 mt-2"
        >
          <XIcon className="h-4 w-4" />
          <span>Follow on X</span>
        </a>
      </div>
    </motion.nav>
  );
};

const XIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

const Logo = () => (
  <Link href="/" className="flex items-center gap-2 cursor-pointer">
    <IconLayoutDashboardFilled className="text-neutral-700 dark:text-neutral-300" />
    <span className="text-base font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
      AHs Lab
    </span>
  </Link>
);