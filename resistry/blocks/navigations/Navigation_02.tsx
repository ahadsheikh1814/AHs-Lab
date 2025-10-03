"use client";
import { cn } from '@/lib/utils';
import { IconMaximize, IconMinimize } from '@tabler/icons-react'
import Image from 'next/image'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react';

const Navigation_02 = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className='w-full max-w-[42rem] px-4 sm:px-6 mx-auto fixed top-2 z-50 left-1/2 -translate-x-1/2'>
        <div className='w-full h-13 dark:bg-[#121212] rounded-2xl p-4 sm:p-5 bg-neutral-100 shadow-ahs flex items-center justify-between'>
            <Logo />
            <Nav isOpen={isOpen} setOpen={setIsOpen} />
        </div>
        <AnimatePresence mode='wait'>
            {isOpen && <Menu isOpen={isOpen} />}
        </AnimatePresence>
    </header>
  )
}

export default Navigation_02

type MenuItem = {
    title: string,
    link: string,
    label: string
}

const MenuItems: MenuItem[] = [
    { title: "How to use", link:"/docs", label:"Use Docs" },
    { title: "Legacy Version", link:"/", label:"jan-sep-25" },
    { title: "Pricing", link:"/", label:"free pro" },
    { title: "Components", link:"/", label:"All components" },
    { title: "Get Support", link:"/", label:"hello@jhon-doe.com" },
    { title: "Founder", link:"/", label:"Ahad Sheikh" },
    { title: "Account", link:"/", label:"Sign Up" }
]

const Menu = ({isOpen}: {isOpen: boolean}) => {
    return (
        <motion.div
        initial={{height:0}}
        animate={{height:"75vh"}}
        exit={{height:0}}
        transition={{
            duration:0.3,
            ease:'easeInOut'
        }}
        className='h-[75vh] text-4xl sm:text-5xl font-black flex flex-col items-center justify-center bg-neutral-100 dark:bg-[#121212]/80 w-full rounded-2xl mt-2 backdrop-blur-sm px-4'>
            {MenuItems.map((item,index) => (
                <motion.div
                initial={{y:-20,opacity:0}}
                animate={{y:0,opacity:1}}
                exit={{y:-20,opacity:0,
                    transition:{
                        duration:0.1,
                        ease:'easeInOut'
                    }
                }}
                transition={{
                    duration:0.1,
                    ease:'easeInOut',
                    delay: 0.1
                }}
                key={index} className={cn('dark:text-white text-primary cursor-pointer tracking-tighter uppercase flex items-center group',`${isOpen ? 'flex' : 'hidden'}`)}>
                    <h1 className={cn(
                        "font-bold relative w-fit sm:w-[30rem] text-center",
                        item.title === "Account" ? "text-neutral-600 dark:text-neutral-400" : "text-primary",
                        "group-hover:text-neutral-500 dark:group-hover:text-neutral-400"
                    )}>
                        {item.title}
                        <span className='text-sm absolute right-0 top-5 font-medium cursor-pointer font-mono text-[#121212] dark:text-neutral-400 capitalize tracking-wide hidden group-hover:block'>
                            [{item.label}]
                        </span>
                    </h1>
                </motion.div>
            ))}
        </motion.div>
    )
}

const Logo = () => {
    return (
        <div className='text-lg cursor-pointer font-bold text-[#121212] dark:text-white flex gap-2 items-center px-1'>
            <div className='size-6 rounded-full overflow-hidden'>
                <Image src='/AHs.png' alt='logo' width={40} height={40} className='h-full w-full object-cover'/>
            </div>
            AHs Lab
        </div>
    )
}

const Nav = ({isOpen,setOpen}: {isOpen: boolean,setOpen:React.Dispatch<React.SetStateAction<boolean>>}) => {
    return (
        <nav className='flex gap-4 items-center'>
            <h1 className='hidden sm:block text-sm font-medium cursor-pointer hover:text-[#121212] dark:hover:text-neutral-200 text-[#121212] dark:text-neutral-400 transition-colors duration-75 ease-in-out'>
                Pricing
            </h1>
            <h1 className='hidden sm:block text-sm font-medium cursor-pointer hover:text-[#121212] dark:hover:text-neutral-200 text-[#121212] dark:text-neutral-400 transition-colors duration-75 ease-in-out'>
                Components
            </h1>
            <div 
              className={`dark:bg-neutral-800 bg-neutral-200 rounded-xl p-2 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
              onClick={() => setOpen(!isOpen)}
            >
              {isOpen ? 
                <IconMinimize className='size-5 cursor-pointer text-[#121212] dark:text-neutral-400'/> 
                : 
                <IconMaximize className='size-5 cursor-pointer text-[#121212] dark:text-neutral-400'/>
              }
            </div>
        </nav>
    )
}
