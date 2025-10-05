"use client"
import { motion, useMotionTemplate, useMotionValue } from "motion/react"
import type { MouseEvent } from "react"

export default function SpotlightCardAnimatedBorder() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()

    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <div
      className="group relative max-w-md rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 p-px shadow-2xl"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              450px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.6),
              rgba(6, 182, 212, 0.3) 40%,
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative rounded-xl bg-neutral-900 px-8 py-16">
        <h3 className="text-base font-semibold tracking-tight leading-7 text-cyan-400">AHs Lab</h3>
        <div className="mt-2 flex items-center gap-x-2">
          <span className="text-5xl font-bold tracking-tight text-white">Vercel</span>
        </div>
        <p className="mt-6 text-xl font-bold leading-7 text-gray-300">
          Build and deploy in seconds <br />
          <span className="text-sm font-medium text-gray-400">
            Vercel is the platform for frontend developers, providing the speed and reliability innovators need to
            create at the moment of inspiration.
          </span>
        </p>
      </div>
    </div>
  )
}
