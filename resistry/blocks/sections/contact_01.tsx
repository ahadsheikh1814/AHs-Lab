import { cn } from "@/lib/utils";
import React from "react";

const Contact_01 = () => {
  return (
    <Container>
      <h1 className="text-3xl font-bold tracking-tight text-neutral-800 dark:text-neutral-300">
        Contact us
      </h1>
      <p className="text-base text-neutral-600 mt-1">
        write your name, email and message we will getback to you soon.
      </p>
      <div>
        <form className="py-6 space-y-5">
          {/* Name Field */}
          <div>
            <label className="block text-sm text-neutral-700 dark:text-neutral-300 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              className={cn(
                "w-full px-3 py-2 rounded-md border bg-transparent",
                "text-neutral-900 dark:text-neutral-100",
                "placeholder:text-neutral-400 dark:placeholder:text-neutral-500",
                "focus:outline-none focus:ring-2 focus:ring-neutral-500/20 focus:border-neutral-500",
              )}
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm text-neutral-700 dark:text-neutral-300 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              className={cn(
                "w-full px-3 py-2 rounded-md border bg-transparent",
                "text-neutral-900 dark:text-neutral-100",
                "placeholder:text-neutral-400 dark:placeholder:text-neutral-500",
                "focus:outline-none focus:ring-2 focus:ring-neutral-500/20 focus:border-neutral-500",
              )}
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-sm text-neutral-700 dark:text-neutral-300 mb-1">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Tell us about your project..."
              rows={5}
              className={cn(
                "w-full px-3 py-2 rounded-md border bg-transparent resize-none",
                "text-neutral-900 dark:text-neutral-100",
                "placeholder:text-neutral-400 dark:placeholder:text-neutral-500",
                "focus:outline-none focus:ring-2 focus:ring-neutral-500/20 focus:border-neutral-500",
              )}
            />
          </div>
        </form>
      </div>
      <div>
        <ButtonBrand className="w-full">send Message</ButtonBrand>
      </div>
    </Container>
  );
};

const ButtonBrand = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <button
      className={cn(
        className,
        "px-5 py-2 bg-neutral-100 dark:bg-neutral-900 text-foreground/90 rounded text-base font-medium cursor-pointer border border-accent-foreground/10 capitalize relative overflow-hidden",
        "before:absolute before:-left-20 before:bottom-0 before:h-33 before:w-96 before:bg-neutral-300/50 dark:before:bg-neutral-700/50 before:skew-x-12",
        "hover:before:translate-x-216 before:transition-all before:duration-200",
      )}
    >
      {children}
    </button>
  );
};

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-full max-w-3xl px-10 mx-auto mt-20">{children}</div>;
};

export default Contact_01;
