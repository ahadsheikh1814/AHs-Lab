// import Container from "@/components/layout/Container";
import React from "react";
// import Navbar from "@/components/layout/Navbar";
import { ThemeProvider } from "@/components/providers/theme-provider";

const Root_layout = ({ children }: { children: React.ReactNode }) => {
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

export default Root_layout;
