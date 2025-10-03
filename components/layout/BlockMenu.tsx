"use client";
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { IconLayoutSidebarRight } from '@tabler/icons-react';
import { usePathname } from 'next/navigation'; // ✅ Correct hook
import { cn } from '@/lib/utils';
import { ModeToggle } from './ModeToggle';

const menuSections = [
  {
    title: "AHs Lab",
    id: "section1",
    links: {
      Home: '/',
      About: '/about',
      Components: '/docs',
      Blocks: '/blocks',
      Templates: '/templates',
    }
  },
  {
    title: "Navigations",
    id: "section2",
    links: {
      Navigation_01: '/blocks/Navigation_01',
      Navigation_02: '/blocks/Navigation_02',
      Navigation_03: '/blocks/Navigation_03',
    }
  },
];

const BlockMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  return (
    <>
      {/* Toggle Button */}
      <div 
        className="fixed left-4 top-4 z-50 cursor-pointer p-2 rounded-full bg-background/80 dark:bg-background/80 shadow-md border border-border/40"
        onClick={() => setIsOpen(!isOpen)}
      >
        <IconLayoutSidebarRight className={`w-6 h-6 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </div>

      {/* Sidebar Container */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
            className="fixed left-0 top-0 z-40 h-screen w-72 bg-background/80 dark:bg-background/80 backdrop-blur-md flex flex-col border-r border-border/40 shadow-sm"
          >
            <div className='absolute top-4 right-4'>
                <ModeToggle/>
            </div>
            <div 
              ref={scrollContainerRef}
              className="flex-1 overflow-y-auto scrollbar-hide px-6 py-5"
            >
              <div className="flex flex-col gap-12">
                {menuSections.map((section) => (
                  <div key={section.id} className="flex flex-col gap-6">
                    <h2 className="text-lg font-semibold text-primary border-b border-border/40 pb-2">
                      {section.title}
                    </h2>
                    <div className="flex flex-col gap-3 pl-2">
                      {Object.entries(section.links).map(([key, value]) => {
                        const isActive = pathname === value; // ✅ Exact match

                        return (
                          <Link 
                            key={key} 
                            href={value} 
                            className={cn(
                              "text-sm font-medium transition-colors duration-200",
                              isActive 
                                ? "text-ahs" 
                                : "text-foreground/80 hover:text-primary"
                            )}
                            onClick={() => setIsOpen(false)}
                          >
                            {key.replace(/_/g, ' ')}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BlockMenu;
