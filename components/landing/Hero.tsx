"use client";
import { motion } from "motion/react";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  return (
    <div className="relative overflow-hidden  w-[calc(100%-80px)] mx-auto py-10">
      {/* Pattern overlay */}
      <div
        className="absolute inset-0 
      dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]
      bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[size:40px_40px]"
      />

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="relative w-full overflow-hidden min-h-19 text-7xl font-bold tracking-tight dark:text-neutral-100 text-neutral-800 text-left md:text-center"
      >
        Build{" "}
        <span className="inline-block relative w-[320px] overflow-hidden">
          <motion.span
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.5 }}
            className="w-full absolute bottom-0 left-0 h-full bg-lime-500/10 block"
          />
          <motion.span
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.5 }}
            className="w-full absolute bottom-0 left-0 h-1 bg-lime-500 block"
          />
          <Typewriter />
        </span>{" "}
        <span className="font-serif font-medium text-lime-500 italic tracking-tighter">
          UIs,
        </span>{" "}
        <span className="inline-block relative overflow-hidden dark:text-white text-neutral-800">
          <motion.span
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.5 }}
            className="w-full absolute bottom-0 left-0 h-full bg-lime-500/10 block"
          />
          <motion.span
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.5 }}
            className="w-full absolute bottom-0 left-0 h-1 bg-lime-500 block"
          />
          <span className="z-10 dark:text-white relative">faster.</span>
        </span>
      </motion.h1>
      <h2 className="text-xl font-medium tracking-tight w-2/3 text-center mx-auto mt-5 ">
        Cut boilerplate, ship faster. Prebuilt, customizable, and
        <br />{" "}
        <p className="inline-block relative overflow-hidden">
          <motion.span
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 }}
            className="w-full absolute bottom-0 left-0 h-1 bg-lime-500 block"
          />
          <motion.span
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 }}
            className="w-full absolute bottom-0 left-0 h-full bg-lime-500/10 block"
          />
          <span className="dark:text-white z-10 relative">
            developer-friendly UI components.
          </span>
        </p>
      </h2>
      <div className="flex items-center justify-center mt-10 gap-4">
        <button
          onClick={() => {
            router.push("/docs");
          }}
          className="px-3 py-2 bg-transparent group border-[2px] text-lg rounded-full border-lime-500 relative overflow-hidden font-medium cursor-pointer"
        >
          <span className="block w-10 h-10 opacity-0 bg-lime-500 group-hover:w-[100vw] group-hover:h-[10vh] group-hover:opacity-50 rounded-full absolute -bottom-5 left-12 group-hover:-left-10 transition-all duration-300 ease-in-out"></span>
          <span className="relative flex items-center justify-center gap-1 group-hover:gap-3 transition-all duration-300 ease-in-out text-primary">
            Components
            <span className="mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l14 0" />
                <path d="M13 18l6 -6" />
                <path d="M13 6l6 6" />
              </svg>
            </span>
          </span>
        </button>
      </div>
    </div>
  );
};

const texts = ["beautiful.", "modern.", "elegant.", "minimal."];

const Typewriter = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const typeSpeed = isDeleting ? 100 : 150;
    const fullText = texts[currentTextIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === fullText) {
        // Finished typing current word, wait then start deleting
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === "") {
        // Finished deleting, move to next word
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      } else {
        // Continue typing or deleting
        setCurrentText(
          isDeleting
            ? fullText.substring(0, currentText.length - 1)
            : fullText.substring(0, currentText.length + 1)
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className="inline-block">
      <span className="text-lime-500">{currentText}</span>
      <span
        className={`inline-block w-0.5 h-16 bg-lime-500 ml-1 ${
          showCursor ? "opacity-100" : "opacity-0"
        } transition-opacity duration-100`}
      />
    </span>
  );
};

export default Hero;
