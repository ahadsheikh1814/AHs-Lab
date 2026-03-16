"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import H2 from "../typography/H2";

const features = [
  {
    title: "Performance",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt beatae tenetur totam aut blanditiis ipsa quaerat neque eaque, atque doloremque! Eligendi.",
    accent: { bg: "group-hover:bg-red-50 dark:group-hover:bg-red-950", icon: "group-hover:text-red-500 dark:group-hover:text-red-400" },
    iconDelay: 0.1,
    cardDelay: 0.1,
    icon: (
      <>
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          d="M5.636 19.364a9 9 0 1 1 12.728 0"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          viewport={{ once: true }}
          d="M16 9l-4 4"
        />
      </>
    ),
  },
  {
    title: "Quality",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt beatae tenetur totam aut blanditiis ipsa quaerat neque eaque, atque doloremque! Eligendi.",
    accent: { bg: "group-hover:bg-cyan-50 dark:group-hover:bg-cyan-950", icon: "group-hover:text-cyan-600 dark:group-hover:text-cyan-400" },
    iconDelay: 0.2,
    cardDelay: 0.2,
    icon: (
      <>
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.6 }} viewport={{ once: true }} d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
        <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 0.4, delay: 1.3 }} viewport={{ once: true }} d="M7 10l6 0" />
        <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 0.4, delay: 1.5 }} viewport={{ once: true }} d="M10 7l0 6" />
        <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 0.4, delay: 1.7 }} viewport={{ once: true }} d="M21 21l-6 -6" />
      </>
    ),
  },
  {
    title: "Innovation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt beatae tenetur totam aut blanditiis ipsa quaerat neque eaque, atque doloremque! Eligendi.",
    accent: { bg: "group-hover:bg-purple-50 dark:group-hover:bg-purple-950", icon: "group-hover:text-purple-600 dark:group-hover:text-purple-400" },
    iconDelay: 0.3,
    cardDelay: 0.3,
    icon: (
      <>
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.7 }} viewport={{ once: true }} d="M13 20.693c-.905 .628 -2.36 .292 -2.675 -1.01a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.492 .362 1.716 2.219 .674 3.03" />
        <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 0.6, delay: 1.9 }} viewport={{ once: true }} d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
        <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 0.4, delay: 2.3 }} viewport={{ once: true }} d="M17 22l5 -3l-5 -3z" />
      </>
    ),
  },
];

const Features = () => {
  return (
    <div className="flex flex-col md:px-10 px-5 py-10 border-b border-accent">
      <div>
        <h3 className="pb-2 text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
          Our Values
        </h3>
        <H2>
          Why{" "}
          <span
            className={cn(
              "relative z-10 inline-block text-white",
              "before:absolute before:inset-0 before:-z-10 before:h-full before:w-full before:-skew-2 before:bg-red-500 before:content-['']",
              "transition-all duration-75"
            )}
          >
            Choose
          </span>{" "}
          Us?
        </H2>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3 md:w-[80%]">
        {features.map((feature) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: feature.cardDelay }}
            viewport={{ once: true }}
            className="group flex flex-col rounded border border-accent bg-accent p-5 sm:p-6"
          >
            <div
              className={cn(
                "mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-700 transition-colors sm:mb-4 sm:h-12 sm:w-12",
                feature.accent.bg
              )}
            >
              <motion.svg
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: feature.iconDelay + 0.2, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className={cn(
                  "text-neutral-700 dark:text-neutral-300 transition-colors sm:h-6 sm:w-6",
                  feature.accent.icon
                )}
              >
                {feature.icon}
              </motion.svg>
            </div>

            <h2 className="mb-1.5 text-base font-semibold text-neutral-800 dark:text-neutral-100 sm:mb-2 sm:text-lg">
              {feature.title}
            </h2>
            <p className="text-xs leading-relaxed text-neutral-500 dark:text-neutral-400 sm:text-sm">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Features;