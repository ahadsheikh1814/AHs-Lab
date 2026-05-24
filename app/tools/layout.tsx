import Footer from "@/components/landing/Footer";
import Container from "@/components/layout/Container";
import Navbar from "@/components/layout/Navbar";
import React from "react";

const tools_layout = ({ children }: { children: React.ReactNode }) => {
  return <Container>
    <Navbar />
    {children}
    <Footer />
  </Container>;
};

export default tools_layout;
