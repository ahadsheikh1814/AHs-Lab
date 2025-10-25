import TempleteCard from "@/components/landing/TempleteCard";
import TempleteHeading from "@/components/landing/TempleteHeading";
import React from "react";

const Page = () => {
  return (
    <div>
      <TempleteHeading />
      <div className="my-10 flex flex-col gap-5">
        <TempleteCard
          title="Slate"
          description="Showcase your studio’s portfolio with a clean, modern, and animated design."
          previewUrl="https://slate-one-khaki.vercel.app"
          GithubUrl="https://github.com/ahadsheikh1814/slate"
          ImageUrl1="/img/slate-1.webp"
          ImageUrl2="/img/slate-2.webp"
          ImageUrl3="/img/slate-3.webp"
        />
        <TempleteCard
          title="Minimal Protfolio"
          description="Showcase your Skils with a clean, modern, and Minimal design."
          previewUrl="https://ahadsheikh.vercel.app/"
          GithubUrl="https://github.com/ahadsheikh1814/Ahs"
          ImageUrl1="/img/protfolio-1.webp"
          ImageUrl2="/img/protfolio-2.webp"
          ImageUrl3="/img/protfolio-3.webp"
        />
      </div>
    </div>
  );
};

export default Page;
