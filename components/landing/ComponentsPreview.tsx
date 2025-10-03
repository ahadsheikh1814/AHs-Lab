import React from "react";
import { Preview } from "../mdx/Preview";
import BentoHoverEffect from "@/resistry/BentoHoverEffect";
import TypewriterEffect from "@/resistry/TypeWriterEffect";
import {
  ButtonsColorfull,
  ButtonsDarkToLight,
  ButtonSimple,
} from "@/resistry/Buttons";
import { MoveRightIcon } from "lucide-react";
import H1 from "../H1";
import HoverDepthCard from "@/resistry/HoverDepthCard";

const ComponentsPreview = () => {
  return (
    <div className="mt-20">
      <div className="my-10">
        <H1>Components</H1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="flex gap-5 flex-col">
          <Preview link="TypeWritterEffect" className="w-[500px] h-[400px]">
            <TypewriterEffect />
          </Preview>
          <Preview link="Buttons" className="w-[500px] h-[400px]">
            <div className="flex items-center justify-center flex-col gap-5">
              <ButtonsColorfull>ButtonsColorfull</ButtonsColorfull>
              <ButtonSimple className="">ButtonSimple</ButtonSimple>
              <ButtonsDarkToLight className="flex justify-center items-center gap-3">
                ButtonsDarkToLight{" "}
                <span className="mt-1">
                  <MoveRightIcon />
                </span>{" "}
              </ButtonsDarkToLight>
            </div>
          </Preview>
        </div>
        <div className="flex-1 max-w-3xl">
          <Preview link="BentoHoverEffect">
            <BentoHoverEffect
              cards={[
                {
                  label: "(Css)",
                  color:
                    "radial-gradient(circle, #2965f1 0%, #264de4 50%, transparent 100%)",
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
              ]}
            />
          </Preview>
          <Preview link="HoverDepthCard">
            <HoverDepthCard
              imageSrc="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880"
              title="Hover Effects"
              description="Fully reusable with props, same styling kept."
            />
          </Preview>
          <ButtonsDarkToLight className="flex justify-center items-center group">
            Browse Components{" "}
            <span className="mt-1 mx-2 group-hover:ml-5 transition-all duration-200">
              <MoveRightIcon />
            </span>{" "}
          </ButtonsDarkToLight>
        </div>
      </div>
    </div>
  );
};

export default ComponentsPreview;
