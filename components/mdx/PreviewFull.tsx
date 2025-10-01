"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface PreviewFullProps {
  link: string;
  className?: string;
  comment?: string[];
  height?: string; // optional fixed height
  isPremium?: boolean;
}

// const prePath = "https://ahs-lab.vercel.app";

export function PreviewFull({
  link,
  className = "",
  comment = [],
  height = "100vh",
}: PreviewFullProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeHeight, setIframeHeight] = useState(height);

  // Adjust iframe height dynamically if needed
  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const handleResize = () => {
      if (iframe.contentWindow) {
        const doc = iframe.contentDocument || iframe.contentWindow.document;
        if (doc) {
          const bodyHeight = doc.body.scrollHeight;
          setIframeHeight(`${Math.max(window.innerHeight, bodyHeight)}px`);
        }
      }
    };

    iframe.addEventListener("load", handleResize);
    window.addEventListener("resize", handleResize);

    return () => {
      iframe.removeEventListener("load", handleResize);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={cn("w-full my-4 border rounded-2xl border-zinc-400 dark:border-zinc-700", className)}>
      <iframe
        ref={iframeRef}
        title={link}
        // src={`${prePath}/preview/${link}`}
        src="http://localhost:3000/test"
        className="w-full"
        style={{
          height: iframeHeight,
          border: "none",
        }}
      />
      {comment.length > 0 && (
        <div className="flex flex-wrap gap-3 mt-4">
          {comment.map((text, idx) => (
            <div
              key={idx}
              className="px-4 py-2 text-sm font-medium bg-purple-100 dark:bg-purple-950/30 rounded-lg text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/50 shadow-xs hover:bg-purple-200/70 dark:hover:bg-purple-950/50 transition-colors"
            >
              {text}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
