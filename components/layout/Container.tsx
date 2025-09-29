import { cn } from "@/lib/utils";
import React from "react";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <main className={cn('min-h-screen max-w-7xl mx-auto overflow-hidden',className)}>{children}</main>;
};

export default Container;
