import { IconArrowUpRight } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";
import H2 from "../typography/H2";
import P from "../typography/P";
import { Button } from "../ui/button";

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
      <div className="px-5 md:px-10 flex flex-col gap-10 md:block pb-10">
        <div className=" flex md:flex-row flex-col justify-between md:items-center">
          <div>
            <H2>{props.title}</H2>
            <P>{props.description}</P>
          </div>
          <div className="flex gap-2 md:px-10 px-0">
            <Button>
              <a href={props.previewUrl}>
                Live Preview
              </a>
            </Button>
            <Button variant={'outline'}>
              <a href={props.GithubUrl}>
                View Code
              </a>
            </Button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3 w-full mt-5">
          <Image src={props.ImageUrl1} alt="Image 1" width={500} height={500} className="flex-1 md:w-[30%] max-h-[30vh] w-full min-h-52 object-cover rounded border border-accent " />
          <Image src={props.ImageUrl2} alt="Image 1" width={500} height={500} className="flex-1 md:w-[30%] max-h-[30vh] w-full md:block hidden min-h-52 object-cover rounded border border-accent" />
          <Image src={props.ImageUrl3} alt="Image 1" width={500} height={500} className="flex-1 md:w-[30%] max-h-[30vh] w-full md:block hidden min-h-52 object-cover rounded border border-accent" />
        </div>
      </div>
  );
};

export default TempleteCard;
