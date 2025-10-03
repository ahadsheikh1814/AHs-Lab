import Container from '@/components/layout/Container';
import React from 'react'

const Blocks = () => {
    const blocks = Array.from({ length: 200 });
  return (
    <Container>
        <div className="relative w-full">
      {/* Background Grid */}
      <div className=" mx-auto h-[25vh] max-w-7xl overflow-hidden px-4 pt-10 pb-4 sm:px-6 md:pt-10 md:pb-20 lg:px-8">
        <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
          <div className="flex bg-gray-200 dark:bg-neutral-700 flex-shrink-0 flex-wrap justify-center items-center gap-x-px gap-y-px scale-105">
            {blocks.map((_, i) => (
              <div
                key={i}
                className={`w-10 h-10 flex flex-shrink-0 rounded-[1px] bg-gray-100 dark:bg-neutral-800 
                ${i % 2 === 1 ? "shadow-[0px_0px_0px_3px_rgba(255,255,255,1)_inset] dark:shadow-[0px_0px_0px_3px_rgba(0,0,0,0.2)_inset]" : ""}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Your Actual Content */}
      <div className="absolute flex justify-center items-center gap-2 w-full flex-col -top-10 z-10 text-center py-20">
        <h1 className="text-4xl font-medium tracking-tighte">Blocks</h1>
        <p className="text-gray-800 dark:text-gray-100 md:mt-4 md:text-lg text-sm md:w-1/2 w-full text-balance font-normal">
          Modern, minimalist blocks to kickstart your next product — built with React, Next.js, TailwindCSS, Framer Motion, and TypeScript.
        </p>
      </div>
      
    </div>
    </Container>
  )
}

export default Blocks
