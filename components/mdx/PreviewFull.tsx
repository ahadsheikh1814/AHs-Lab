"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { OpenInV0Button } from "./OpenInV0";
import { IconReservedLine } from "@tabler/icons-react";

interface PreviewFullProps {
  link: string;
  className?: string;
  comment?: string[];
  height?: string; // optional fixed height
  isPremium?: boolean;
  url?: string;
}

// const prePath = "http://localhost:3000/";
const prePath = "https://ahs-lab.vercel.app/";

export function PreviewFull({
  url = "",
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

  const handleRedirect = () => {
    window.open(`/preview/${link}`, "_blank"); // Opens /blog in a new tab
  };
  return (
    <div>
      <div className="flex items-center gap-3">
        <Button onClick={handleRedirect} className="h-8 gap-1 rounded-[6px] bg-black px-3 text-xs text-white hover:bg-black hover:text-white dark:bg-white dark:text-black cursor-pointer">
          <IconReservedLine className="h-4 w-4" />
          Live Preview
        </Button>
        <OpenInV0Button url={url} />
      </div>
      <div
        className={cn(
          "w-full rounded-2xl  my-4 border  border-zinc-400 dark:border-zinc-700",
          className
        )}
      >
        <iframe
          ref={iframeRef}
          title={link}
          src={`${prePath}/preview/${link}`}
          // src="http://localhost:3000/preview"
          className="w-full"
          style={{
            height: iframeHeight,
            border: "none",
          }}
        />
        {comment.length > 0 && (
          <div className="flex flex-wrap gap-3 my-4 mx-3">
            {comment.map((text, idx) => (
              <div
                key={idx}
                className="px-4 py-2  text-sm font-medium bg-purple-100 dark:bg-purple-950/30 rounded-lg text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/50 shadow-xs hover:bg-purple-200/70 dark:hover:bg-purple-950/50 transition-colors"
              >
                {text}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
