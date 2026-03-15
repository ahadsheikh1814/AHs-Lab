"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import HoverDepthCard from "@/resistry/HoverDepthCard";


const ComponentsPreview = () => {
  return (
    <div className="mt-0 w-full md:px-10 px-5 flex justify-between">
      <div className="flex-1 border-r border-accent py-8 ">
        <HoverDepthCard
          imageSrc="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880"
          title="Hover Effects"
          description="Fully reusable with props, same styling kept."
        />
      </div>
      <div className="flex-1 py-8 px-5">
        <h2
        className="bg-gradient-to-bl from-neutral-700 to-neutral-900 bg-clip-text text-5xl
         font-bold tracking-tighter text-transparent dark:from-neutral-200 dark:to-neutral-300"
        >Component showcase</h2>
        <p className="mt-5 text-balance text-sm text-neutral-600 font-medium">
          Use ready-made components via coppy pasting. You need to coppy the command bellow and past it in you project terminal to get this component.
        </p>
        <Button className="mt-5 cursor-pointer" variant={'outline'}>View More</Button>

        {/* TODO:command will be here*/}
      </div>
    </div>
  );
};

export default ComponentsPreview;

const CtaButton = () => {
  const router = useRouter();
  return (
    <Button variant={'ahs'}>
      View docs
    </Button>
  );
};