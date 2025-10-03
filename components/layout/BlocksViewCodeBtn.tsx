"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { IconCode, IconEye } from "@tabler/icons-react";
import BlocksCode from "./BlocksCode";
import BlockCommand from "./BlockCommand";
import { usePathname } from "next/navigation";
import { registryMap } from "@/lib/registryMap";

// Generate component paths from registryMap
const componentPaths = Object.keys(registryMap).map(key => ({
  name: key,
  path: `resistry/blocks/navigations/${key}.tsx`
}));

const BlocksViewCodeBtn = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <div>
      <button
        onClick={() => setOpen(!isOpen)}
        className="fixed right-4 bottom-10 z-[501] cursor-pointer p-2 rounded-full bg-background/80 dark:bg-background/80 shadow-md border border-border/40"
      >
        {!isOpen ? (
          <h1 className="flex items-center px-2">
            <IconCode className="w-5 h-5 mr-2" /> View Code
          </h1>
        ) : (
          <h1 className="flex items-center px-2">
            <IconEye className="w-5 h-5 mr-2" /> Preview
          </h1>
        )}
      </button>
      <AnimatePresence>{isOpen && <SideBar />}</AnimatePresence>
    </div>
  );
};



export default BlocksViewCodeBtn;

const SideBar = () => {
  const pathname = usePathname();
  const [selectedPath, setSelectedPath] = useState(componentPaths[0].path);

  // Extract component name from URL path and set the selected path
  useEffect(() => {
    // Extract the last part of the URL path (e.g., "Navigation_01" from "/blocks/Navigation_01")
    const urlParts = pathname.split('/');
    const componentName = urlParts[urlParts.length - 1];
    
    // Find the component in our array that matches the URL
    const matchedComponent = componentPaths.find(comp => comp.name === componentName);
    
    // If we found a matching component, update the selected path
    if (matchedComponent) {
      setSelectedPath(matchedComponent.path);
    }
  }, [pathname]);

  return (
    <motion.aside
      initial={{ x: 1000 }}
      animate={{ x: 0 }}
      exit={{ x: 1000 }}
      transition={{ type: "spring", stiffness: 200, damping: 30 }}
      className="fixed right-0 top-0 h-screen md:w-[50vw] w-screen z-[500] bg-background/80 dark:bg-background/80 backdrop-blur-md flex flex-col border-l border-border/40 shadow-sm"
    >
      <div className="p-4 space-y-4">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Select Component:</label>
          <select 
            value={selectedPath}
            onChange={(e) => setSelectedPath(e.target.value)}
            className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-background/80 dark:bg-background/80"
          >
            {componentPaths.map((component) => (
              <option key={component.name} value={component.path}>
                {component.name}
              </option>
            ))}
          </select>
        </div>
        <div className="relative">
          <button 
            onClick={() => navigator.clipboard.writeText(componentPaths.find(c => c.path === selectedPath)?.name ?? "")}
            className="absolute top-2 right-2 p-1 bg-gray-700/50 hover:bg-gray-700/80 rounded text-white text-xs"
            title="Copy to clipboard"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
          </button>
          <BlockCommand componentKey={componentPaths.find(c => c.path === selectedPath)?.name ?? ""} />
        </div>
        <h1>Or</h1>
        <div className="relative">
          <button 
            onClick={() => {
              const codeElement = document.querySelector('.blocks-code-content');
              if (codeElement) navigator.clipboard.writeText(codeElement.textContent || '');
            }}
            className="absolute top-2 right-2 z-10 p-1 bg-gray-700/50 hover:bg-gray-700/80 rounded text-white text-xs"
            title="Copy to clipboard"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
          </button>
          <pre className="bg-black/20 p-3 rounded-md overflow-auto text-sm whitespace-pre-wrap">
            <div className="blocks-code-content">
              <BlocksCode path={selectedPath} />
            </div>
          </pre>
        </div>
      </div>
    </motion.aside>
  );
};
