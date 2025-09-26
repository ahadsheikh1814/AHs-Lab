import { cn } from "@/lib/utils";
import React from "react";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <main className={cn('min-h-screen max-w-5xl mx-auto',className)}>{children}</main>;
};

export default Container;
