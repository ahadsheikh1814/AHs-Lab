import { cn } from "@/lib/utils";
import React from "react";

export const Input = ({
  name,
  placholder,
}: {
  name?: string;
  placholder: string;
}) => {
  return (
    <input
      type="text"
      name={name}
      placeholder={placholder}
      className={cn(
        "w-full px-3 py-2 rounded-md border bg-transparent",
        "text-neutral-900 dark:text-neutral-100",
        "placeholder:text-neutral-400 dark:placeholder:text-neutral-500",
        "focus:outline-none focus:ring-2 focus:ring-neutral-500/20 focus:border-neutral-500",
      )}
    />
  );
};

export const Textarea = ({
  name,
  placholder,
}: {
  name?: string;
  placholder: string;
}) => {
  return (
    <textarea
      name={name}
      placeholder={placholder}
      rows={5}
      className={cn(
        "w-full px-3 py-2 rounded-md border bg-transparent resize-none",
        "text-neutral-900 dark:text-neutral-100",
        "placeholder:text-neutral-400 dark:placeholder:text-neutral-500",
        "focus:outline-none focus:ring-2 focus:ring-neutral-500/20 focus:border-neutral-500",
      )}
    />
  );
};

export const InputFild = ({
  name,
  placholder,
  label,
  type,
}: {
  name?: string;
  placholder: string;
  label: string;
  type: "Input" | "Textarea";
}) => {
  <div>
    <label className="block text-sm text-neutral-700 dark:text-neutral-300 mb-1">
      {label}
    </label>
    {type === "Input" ? (
      <Input name={name} placholder={placholder} />
    ) : (
      <Textarea name={name} placholder={placholder} />
    )}
  </div>;
};
