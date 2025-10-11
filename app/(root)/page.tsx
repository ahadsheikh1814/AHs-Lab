import ComponentsPreview from "@/components/landing/ComponentsPreview";
import Hero from "@/components/landing/Hero";
// import Scales from '@/components/layout/Scales'
import React from "react";

const Home = () => {
  return (
    <div className="relative min-h-screen w-full">
      <Hero />
      <ComponentsPreview />
    </div>
  );
};

export default Home;
