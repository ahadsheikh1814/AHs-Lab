"use client";
import { motion } from "motion/react";
import React, { useState, useEffect } from "react";

interface TextProps {
  texts?: string[];
}

interface TypewriterProps {
  texts: string[];
}

const TypewriterEffect = ({ texts = ["beautiful.", "modern.", "elegant.", "minimal."] }: TextProps) => {
  return (
    <h1 className="inline-block relative w-[320px] overflow-hidden text-7xl font-bold tracking-tighter text-left md:text-center mt-10">
      <motion.span
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut", delay: 0.5 }}
        className="w-full absolute bottom-0 left-0 h-[70px] bg-[#14b8a6]/10 block"
      />
      <motion.span
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut", delay: 0.5 }}
        className="w-full absolute bottom-0 left-0 h-1 bg-[#14b8a6] block"
      />
      <Typewriter texts={texts} />
    </h1>
  );
};

export default TypewriterEffect;

const Typewriter = ({ texts }: TypewriterProps) => {
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
  }, [currentText, currentTextIndex, isDeleting, texts]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className="inline-block">
      <span className="text-primary">{currentText}</span>
      <span
        className={`inline-block w-0.5 h-16 bg-[#14b8a6] ml-1 text-primary ${
          showCursor ? "opacity-100" : "opacity-0"
        } transition-opacity duration-100`}
      />
    </span>
  );
};