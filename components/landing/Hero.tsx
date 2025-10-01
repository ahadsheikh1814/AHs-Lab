"use client";
import { motion } from "motion/react";
import React from "react";
import H1 from "../H1";
import P from "../P";
import { Button } from "../ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative overflow-hidden w-full">
      <div className="h-[50vh] w-full relative overflow-hidden">
        {/* Pattern overlay */}
        <div
          className="absolute inset-0 
      dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]
      bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[size:40px_40px]"
        />
        <div
  className="absolute inset-0 opacity-50 pointer-events-none mix-blend-multiply dark:mix-blend-screen -top-1/2 -right-1/2"
  style={{
    backgroundImage: `
      radial-gradient(circle at center,
        var(--color-ahs) 0%,
        transparent 60%
      )
    `,
  }}
/>

        <div className="m-5 mt-10 md:w-3/4">
          <H1 className="leading-52 text-balance">
            Ship polished products faster with AHs UI —{" "}
            <span className="inline-block relative  overflow-hidden text-ahs">
              <motion.span
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.3, ease: "easeInOut", delay: 0.5 }}
                className="w-full absolute bottom-0 left-0 h-[70px] bg-ahs/10 block"
              />
              <motion.span
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.3, ease: "easeInOut", delay: 0.5 }}
                className="w-full absolute bottom-0 left-0 h-1 bg-ahs/90 block"
              />
              <span className="relative z-10">effortlessly.</span>
            </span>{" "}
          </H1>
          <P className="mt-10">
            Stop reinventing UI. Use accessible, high-performance React
            components —{" "}
            <span className="md:text-2xl text-lg text-primary">
              built for Next.js RSC.
            </span>
          </P>
          <div className="cursor-pointer">
            <Button
              variant={"ahs"}
              className="mt-5 md:px-8 md:py-6 px-3 pt-2 md:text-lg text-sm text-white"
            >
              <Link href={"/docs"} className="z-10">
                Components
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
