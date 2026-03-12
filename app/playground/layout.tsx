import React from "react";
import { ThemeProvider } from "@/components/providers/theme-provider";

const Playground_layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute={"class"}
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
        {children}
    </ThemeProvider>
  );
};

export default Playground_layout;
