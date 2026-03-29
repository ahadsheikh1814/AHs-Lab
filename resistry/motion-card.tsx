"use client";
import { cn } from '@/lib/utils';
import {motion} from 'motion/react';
import React from 'react'

const MotionCard = () => {
   const cardData = [
  {
    title: 'UI Playground',
    description: 'Experiment with modern components and interactive UI in real-time.',
    className: 'bg-blue-500 text-white p-4 rounded-lg shadow-md',
    config: {
      x: -300,
      y: 60,
      zIndex: 1,
      rotate: -18,
    },
    skeleton: <div className='h-50 w-full rounded-lg bg-gradient-to-r from-blue-600 to-blue-600/60'></div>
  },
  {
    title: 'Analytics Dashboard',
    description: 'Track performance, user behavior, and insights at a glance.',
    className: 'bg-emerald-500 text-white p-4 rounded-lg shadow-md',
    config: {
      x: -150,
      y: 20,
      zIndex: 2,
      rotate: -10,
    },
    skeleton: <div className='h-50 w-full rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-600/60'></div>
  },
  {
    title: 'Live Updates',
    description: 'Get instant feedback and real-time changes as you build.',
    className: 'bg-violet-500 text-white p-4 rounded-lg shadow-md',
    config: {
      x: 0,
      y: 0,
      zIndex: 3,
      rotate: 0,
    },
    skeleton: <div className='h-50 w-full rounded-lg bg-gradient-to-r from-violet-600 to-violet-600/60'></div>
  },
  {
    title: 'Team Sync',
    description: 'Collaborate with your team and ship projects faster.',
    className: 'bg-amber-500 text-white p-4 rounded-lg shadow-md',
    config: {
      x: 150,
      y: 20,
      zIndex: 2,
      rotate: 10,
    },
    skeleton: <div className='h-50 w-full rounded-lg bg-gradient-to-r from-amber-600 to-amber-600/60'></div>
  },
  {
    title: 'Task Flow',
    description: 'Organize development workflows and manage tasks efficiently.',
    className: 'bg-rose-500 text-white p-4 rounded-lg shadow-md',
    config: {
      x: 300,
      y: 60,
      zIndex: 1,
      rotate: 18,
    },
    skeleton: <div className='h-50 w-full rounded-lg bg-gradient-to-r from-rose-600 to-rose-600/60'></div>
  },
];
  return (
    <div className='max-w-3xl mx-auto w-full h-160 relative'>
        {cardData.map((card, index) => (
            <motion.div key={index} className=''
                
            >
                <motion.button
                initial={{
                    x: 0,
                    y: 400,
                    zIndex: 0,
                    rotate: 0,
                    scale: 0.5,
                    width:320,
                    height:400,
                    filter: 'blur(10px)',
                }}
                animate={{
                    x: card.config.x,
                    y: card.config.y,
                    zIndex: card.config.zIndex,
                    rotate: card.config.rotate,
                    scale: 1,
                    width:320,
                    height:400,
                    filter: 'blur(0px)',
                }}
                transition={{
                    type:"spring",
                    damping:15,
                    stiffness:100,
                    // duration: 0.8,
                }}
                className={cn('w-80 p-8 absolute inset-0 flex flex-col justify-between items-start overflow-hidden',card.className)}>
                    {card.skeleton}
                    <motion.h2>
                        {card.title}
                    </motion.h2>
                </motion.button>
            </motion.div>
        ))}
    </div>
  )
}

export default MotionCard