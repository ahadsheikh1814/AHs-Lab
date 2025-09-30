import { cn } from "@/lib/utils";
import { IconBrandUnity } from "@tabler/icons-react";
import React from "react";

interface HoverDepthCardProps {
  imageSrc: string;
  title?: string;
  description?: string;
  icon?: React.ReactNode;
}

const HoverDepthCard = ({
  imageSrc,
  title = "3D transforms",
  description = "Sometimes two dimensions aren’t enough. Scale, rotate, and translate any element in 3D space to add a touch of depth.",
  icon = <IconBrandUnity className="size-20 text-neutral-800 dark:text-neutral-200" />,
}: HoverDepthCardProps) => {
  return (
    <Container title={title} description={description} icon={icon}>
      <div
        className={cn(
          "w-full rounded-2xl min-h-100 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700",
          "bg-[radial-gradient(var(--color-neutral-200)_1px,transparent_1px)]",
          "dark:bg-[radial-gradient(var(--color-neutral-700)_1px,transparent_1px)]",
          "[background-size:10px_10px]",
          "p-8 flex items-center justify-center",
          "group/ahs"
        )}
      >
        <div
          className={cn(
            "size-60 rounded-2xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700",
            "bg-[radial-gradient(var(--color-neutral-300)_1px,transparent_1px)]",
            "dark:bg-[radial-gradient(var(--color-neutral-700)_1px,transparent_1px)]",
            "[background-size:10px_10px]",
            "shadow-2xl relative perspective-distant",
            "group-hover/ahs:bg-neutral-200 dark:group-hover/ahs:bg-neutral-900 group-hover/ahs:border-neutral-300 dark:group-hover/ahs:border-neutral-700",
            "transition-all duration-200"
          )}
        >
          <img
            src={imageSrc}
            alt="avatar"
            className={cn(
              "h-full w-full rounded-2xl object-cover object-top-left",
              "transform rotate-x-30  -rotate-y-20 translate-z-30",
              "transition-all duration-300 [transition-timing-function:cubic-bezier(.4, 0, .2, 1)]",
              "group-hover/ahs:rotate-x-0 group-hover/ahs:rotate-y-0 group-hover/ahs:translate-z-0 group-hover/ahs:scale-85"
            )}
          />
        </div>
      </div>
    </Container>
  );
};

export default HoverDepthCard;

const Container = ({
  children,
  title,
  description,
  icon,
}: {
  children: React.ReactNode;
  title: string;
  description: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className={cn("w-xl min-h-[60vh] rounded-3xl bg-neutral-100 dark:bg-neutral-800")}>
      <div className="border-b border-neutral-200 dark:border-neutral-700 flex items-center justify-center px-10 py-5">
        <div className="flex-1">{icon}</div>
        <div className="flex-3">
          <h1 className="text-2xl font-semibold tracking-tight text-neutral-800 dark:text-neutral-200">{title}</h1>
          <p className="w-7/8 text-xs text-neutral-500 dark:text-neutral-400">{description}</p>
        </div>
      </div>
      <div className="p-5 pb-7">{children}</div>
    </div>
  );
};
