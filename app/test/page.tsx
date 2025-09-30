import HoverDepthCard from "@/resistry/HoverDepthCard";
import React from "react";

const Test = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <HoverDepthCard
        imageSrc="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880"
        title="Hover Effects"
        description="Fully reusable with props, same styling kept."
      />
    </div>
  );
};

export default Test;
