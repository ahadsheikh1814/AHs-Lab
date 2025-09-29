import BentoHoverEffect from "@/resistry/BentoHoverEffect";
import React from "react";

const Test = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <BentoHoverEffect
        cards={[
          {
            label: "(Html)",
            color:
              "radial-gradient(circle, #f16529 0%, #e44d26 50%, transparent 100%)",
          },
          {
            label: "(Css)",
            color:
              "radial-gradient(circle, #2965f1 0%, #264de4 50%, transparent 100%)",
          },
          {
            label: "(Js)",
            color:
              "radial-gradient(circle, #f0db4f 0%, #e5c000 50%, transparent 100%)",
          },
          {
            label: "(React)",
            color:
              "radial-gradient(circle, #61dafb 0%, #21a1f1 50%, transparent 100%)",
          },
          {
            label: "(Next)",
            color:
              "radial-gradient(circle, #000 0%, #333 50%, transparent 100%)",
          },
          {
            label: "(Gsap)",
            color:
              "radial-gradient(circle, #88ce02 0%, #59b300 50%, transparent 100%)",
          },
          {
            label: "(Motion)",
            color:
              "radial-gradient(circle, #f97316 0%, #f43f05 50%, transparent 100%)",
          },
          {
            label: "(Scrolltrigger)",
            color:
              "radial-gradient(circle, #8b5cf6 0%, #7c3aed 50%, transparent 100%)",
          },
        ]}
      />
    </div>
  );
};

export default Test;
