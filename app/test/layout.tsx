import React from "react";
import { ThemeProvider } from "@/components/providers/theme-provider";

const Root_layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute={"class"}
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {/* <Container> */}
        {/* <Navbar /> */}
        {children}
      {/* </Container> */}
    </ThemeProvider>
  );
};

export default Root_layout;
