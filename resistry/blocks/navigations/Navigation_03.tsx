"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const NavItems = [
  { label: "Home",    href: "/" },
  { label: "About",   href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Blog",    href: "/blog" },
  { label: "Careers", href: "/careers" },
];

const Navigation_03 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setHovered] = useState<number | null>(null);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Close drawer on resize to desktop
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 768) setIsOpen(false); };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "w-full flex items-center justify-center",
          "border-b border-accent/60",
          "sticky top-0 z-50",
          "bg-background/80 backdrop-blur-md"
        )}
      >
        <div
          className={cn(
            "md:max-w-6xl w-full",
            "border-x border-accent/60",
            "px-5 md:px-8 py-3.5",
            "flex items-center justify-between"
          )}
        >
          <Logo />

          {/* Desktop Nav Links */}
          <div
            className="hidden md:flex items-center"
            onMouseLeave={() => setHovered(null)}
          >
            {NavItems.map((itm, idx) => (
              <Link
                key={idx}
                href={itm.href}
                onMouseEnter={() => setHovered(idx)}
                className="relative px-3 py-1.5 text-sm font-medium group"
              >
                {/* Animated background pill */}
                {isHovered === idx && (
                  <motion.span
                    layoutId="nav-hover-pill"
                    className="absolute inset-0 -z-10 rounded-md bg-accent"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {/* Label — shifts color when hovered */}
                <span
                  className={cn(
                    "relative z-10 transition-colors duration-150",
                    isHovered === idx
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {itm.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "text-xs font-medium text-muted-foreground",
                "hover:text-foreground hover:bg-accent/40",
                "cursor-pointer h-8 px-4"
              )}
            >
              Log In
            </Button>
            <Button
              size="sm"
              className={cn(
                "text-xs font-medium text-white",
                "bg-[#514fd5] hover:bg-[#4340c0]",
                "shadow-sm shadow-[#514fd5]/30",
                "cursor-pointer h-8 px-4",
                "transition-all duration-150 active:scale-[0.97]"
              )}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Hamburger — animates to X */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8 rounded-md hover:bg-accent/40 transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <span className={cn(
              "block w-5 h-px bg-foreground/70 rounded-full transition-all duration-300 origin-center",
              isOpen && "translate-y-[6px] rotate-45"
            )} />
            <span className={cn(
              "block h-px bg-foreground/70 rounded-full transition-all duration-300",
              isOpen ? "w-0 opacity-0" : "w-3.5"
            )} />
            <span className={cn(
              "block w-5 h-px bg-foreground/70 rounded-full transition-all duration-300 origin-center",
              isOpen && "-translate-y-[6px] -rotate-45"
            )} />
          </button>
        </div>
      </nav>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-background/60 backdrop-blur-sm md:hidden"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 340, damping: 32 }}
            className={cn(
              "fixed top-0 right-0 z-50 h-full w-72 md:hidden",
              "bg-background border-l border-accent/60",
              "flex flex-col"
            )}
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-5 py-[15px] border-b border-accent/60">
              <Logo />
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-accent/40 transition-colors text-muted-foreground hover:text-foreground"
                aria-label="Close menu"
              >
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M1 1l11 11M12 1L1 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Drawer Links — staggered slide-in */}
            <div className="flex flex-col px-3 py-4 gap-0.5 flex-1">
              {NavItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 + 0.08, duration: 0.22, ease: "easeOut" }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center px-3 py-2.5 rounded-md",
                      "text-sm font-medium text-muted-foreground",
                      "hover:text-foreground hover:bg-accent/40",
                      "transition-colors duration-150"
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Drawer Footer CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.22, ease: "easeOut" }}
              className="px-4 pb-8 pt-4 border-t border-accent/60 flex flex-col gap-2.5"
            >
              <Button
                variant="outline"
                className="w-full text-sm font-medium cursor-pointer h-10"
                onClick={() => setIsOpen(false)}
              >
                Log In
              </Button>
              <Button
                className={cn(
                  "w-full text-sm font-medium text-white",
                  "bg-[#514fd5] hover:bg-[#4340c0]",
                  "shadow-sm shadow-[#514fd5]/30",
                  "cursor-pointer h-10",
                  "transition-all duration-150 active:scale-[0.98]"
                )}
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation_03;

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <span className="text-lg font-semibold tracking-tight text-foreground/95">
        AHs Lab
      </span>
    </Link>
  );
};