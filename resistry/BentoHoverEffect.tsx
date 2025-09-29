"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface Card {
  label: string;
  color: string; // any CSS background, e.g., gradient or color
}

interface BentoHoverEffectProps {
  cards: Card[];
}

const BentoHoverEffect: React.FC<BentoHoverEffectProps> = ({ cards }) => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const renderCard = (cardIndex: number) => (
    <>
      {hoveredCard === cardIndex && (
        <motion.div
          className="absolute pointer-events-none rounded-full blur-2xl"
          animate={{
            x: mousePosition.x - 150,
            y: mousePosition.y - 150,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 35,
          }}
          style={{
            width: 300,
            height: 300,
          }}
        >
          <motion.div
            className="w-full h-full rounded-full"
            style={{ background: cards[cardIndex].color }}
          />
        </motion.div>
      )}
      <p className="uppercase text-[13px] font-medium text-[#111] dark:text-white relative z-10">
        {cards[cardIndex].label}
      </p>
    </>
  );

  return (
    <div className="font-mono relative w-screen h-[50vh] flex justify-center items-center">
      <div className="flex flex-col relative my-0 mx-auto w-[90%] h-[90%] border-[1px] dark:border-[rgba(255,255,255,0.2)] border-neutral-400">
        <div className="flex-1 flex flex-col md:flex-row justify-center items-center h-full border-b dark:border-[rgba(255,255,255,0.2)] border-neutral-400">
          {cards.slice(0, 3).map((_, i) => (
            <div
              key={i}
              className={`md:flex-1 flex justify-center items-center h-full w-full ${
                i < 2 ? "border-b md:border-r" : "border-b"
              } dark:border-[rgba(255,255,255,0.2)] border-neutral-400 relative overflow-hidden`}
              onMouseMove={(e) => handleMouseMove(e, i)}
              onMouseLeave={handleMouseLeave}
            >
              {renderCard(i)}
            </div>
          ))}
        </div>
        <div className="flex-1 flex justify-center items-center h-full flex-col md:flex-row">
          {cards.slice(3).map((_, i) => {
            const index = i + 3;
            return (
              <div
                key={index}
                className={`md:flex-1 flex justify-center items-center h-full w-full ${
                  index < cards.length - 1 ? "border-b md:border-r" : ""
                } dark:border-[rgba(255,255,255,0.2)] border-neutral-400 relative overflow-hidden`}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={handleMouseLeave}
              >
                {renderCard(index)}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BentoHoverEffect;
