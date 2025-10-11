"use client";
import React from "react";
import { Preview } from "../mdx/Preview";
import BentoHoverEffect from "@/resistry/BentoHoverEffect";
import TypewriterEffect from "@/resistry/TypeWriterEffect";
import {
  ButtonsColorfull,
  ButtonSimple,
} from "@/resistry/Buttons";
import { MoveRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import AiInputCompact from "@/resistry/Ai-Input-compact";
import AiInputBasic from "@/resistry/Ai-Input-basic";
import AiInputPill from "@/resistry/Ai-Input-pill";
import Image from "next/image";

const ComponentsPreview = () => {
  return (
    <div className="mt-0 w-full px-4 py-8">
      {/* Header Section */}
      <div className="flex justify-between">
      <div className="text-left mb-12">
        <h1 className="text-4xl text-primary/90 tracking-tight font-medium text-shadow-2xs ">Component Showcase</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-4 mb-8">
          Explore our collection of interactive components
        </p>
        <div className="flex justify-start">
          <CtaButton />
        </div>
      </div>
      <div className="mt-10">
      <a
        href="https://www.producthunt.com/products/ahs-lab?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-ahs&#0045;lab"
        target="_blank"
        className="mt-10"
      >
        <Image
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1025106&theme=light&t=1760182734816"
          alt="AHs&#0032;Lab - Ui&#0032;components&#0032;for&#0032;developers | Product Hunt"
          width={250}
          height={54}
          className="w-[250px] h-[54px]"
        />
      </a>
      </div>
      </div>

      {/* Components Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto">
        {/* Typewriter Effect */}
        <div className="bg-white dark:bg-black rounded-lg border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Typewriter Effect
          </h3>
          <TypewriterEffect />
        </div>

        {/* Buttons - Simple */}
        <div className="bg-white dark:bg-black rounded-lg border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Simple Button
          </h3>
          <div className="flex justify-center">
            <ButtonSimple>Click Me</ButtonSimple>
          </div>
        </div>

        {/* Buttons - Colorful */}
        <div className="bg-white dark:bg-black rounded-lg border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Colorful Button
          </h3>
          <div className="flex justify-center">
            <ButtonsColorfull>Colorful</ButtonsColorfull>
          </div>
        </div>

        {/* Preview Component */}
        <div className="bg-white dark:bg-black rounded-lg border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg transition-shadow col-span-1 md:col-span-2 lg:col-span-3">
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
            MDX Preview
          </h3>
          <Preview link="BentoHoverEffect">
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
          </Preview>
        </div>

        {/* AI Input Components */}
        <div className="bg-white w-full dark:bg-black rounded-lg border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg transition-shadow col-span-1 md:col-span-2 lg:col-span-2">
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
            AI Input Variants
          </h3>
          <div className="space-y-4">
            <AiInputCompact />
            <AiInputBasic />
            <AiInputPill/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentsPreview;

const CtaButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push("/docs")}
      className={cn(
        "px-6 py-2 rounded font-semibold text-base cursor-pointer border border-neutral-700 text-white",
        "relative overflow-hidden transition-colors duration-1000 ease-in-out",
        "bg-gradient-to-br from-purple-950 to-pink-950",
        "hover:from-purple-500 hover:to-pink-500",
        "flex justify-center items-center group"
      )}
    >
      Browse Components{" "}
      <span className="mt-1 mx-2 group-hover:ml-5 transition-all duration-200">
        <MoveRight />
      </span>{" "}
    </button>
  );
};