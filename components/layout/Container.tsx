import { cn } from "@/lib/utils";
import React from "react";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <main
      className={cn(
        "min-h-screen md:max-w-[90vw] mx-auto overflow-hidden relative",
        "md:border-x border-accent",
        // "sm:border-none",
        className
      )}
    >
      {children}
    </main>
  );
};

export default Container;
