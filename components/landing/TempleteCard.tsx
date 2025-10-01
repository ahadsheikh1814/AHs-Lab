import { IconArrowUpRight } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

type TempleteCardProps = {
  title: string;
  previewUrl: string;
  GithubUrl: string;
  ImageUrl1: string;
  ImageUrl2: string;
  ImageUrl3: string;
  description: string;
};

const TempleteCard = (props: TempleteCardProps) => {
  return (
    <div className="px-5 flex flex-col-reverse gap-10 md:block">
      <div className=" flex md:flex-row flex-col justify-between md:items-center ">
        <div>
          <h1 className="text-3xl font-medium tracking-tighte">{props.title}</h1>
          <p className="text-gray-800 dark:text-gray-100 mt-1 mb-5 md:text-lg text-sm  text-balance font-normal">{props.description}</p>
        </div>
        <div className="flex gap-5 md:px-10 px-0">
          <a href={props.previewUrl} className="border-b border-primary/50 px-2 py-1 flex justify-between items-center group/pLink">Live Preview <IconArrowUpRight className="size-4 mt-1 ml-2 group-hover/pLink:ml-5 transition-all duration-200 ease-in-out"/> </a>
          <a href={props.GithubUrl} className="border-b border-primary/50 px-2 py-1 flex justify-between items-center group/pLink">Github Code <IconArrowUpRight className="size-4 mt-1 ml-2 group-hover/pLink:ml-5 transition-all duration-200 ease-in-out"/></a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-3 w-full mt-5">
        <Image src={props.ImageUrl1} alt="Image 1" width={500} height={500} className="flex-1 md:w-[30%] w-full min-h-52 object-cover rounded"/>
        <Image src={props.ImageUrl2} alt="Image 1" width={500} height={500} className="flex-1 md:w-[30%] w-full md:block hidden min-h-52 object-cover rounded"/>
        <Image src={props.ImageUrl3} alt="Image 1" width={500} height={500} className="flex-1 md:w-[30%] w-full md:block hidden min-h-52 object-cover rounded"/>
      </div>
    </div>
  );
};

export default TempleteCard;
