"use client"
import { motion, useMotionTemplate, useMotionValue } from "motion/react"
import type { MouseEvent } from "react"

export default function SpotlightCardBorderGlow() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()

    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <div
      className="group relative max-w-md rounded-xl bg-neutral-900 px-8 py-16 shadow-2xl"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(236, 72, 153, 0.4),
              transparent 80%
            )
          `,
          border: "1px solid transparent",
          backgroundClip: "padding-box",
        }}
      />
      <div className="relative border border-white/5 rounded-xl px-6 py-8 bg-neutral-800/50">
        <h3 className="text-base font-semibold tracking-tight leading-7 text-pink-400">AHs Lab</h3>
        <div className="mt-2 flex items-center gap-x-2">
          <span className="text-5xl font-bold tracking-tight text-white">Framer Motion</span>
        </div>
        <p className="mt-6 text-xl font-bold leading-7 text-gray-300">
          Production-ready animations <br />
          <span className="text-sm font-medium text-gray-400">
            A simple yet powerful motion library for React that brings your components to life with smooth animations.
          </span>
        </p>
      </div>
    </div>
  )
}
