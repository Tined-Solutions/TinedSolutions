"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type JSX, type ReactNode } from "react";

interface BlockRevealProps {
  children: ReactNode;
  delay?: number;
  blockColor?: string;
  duration?: number;
  className?: string;
}

export default function BlockReveal({
  children,
  delay = 0,
  blockColor = "rgba(202, 166, 104, 1)", // elegance-gold
  duration = 0.5,
  className = "",
}: BlockRevealProps): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <div ref={ref} className={`relative block overflow-hidden ${className}`}>
      {/* Revealer Block */}
      <motion.div
        initial={{ width: "0%", left: 0 }}
        animate={
          isInView
            ? {
                width: ["0%", "100%", "100%", "0%"],
                left: ["0%", "0%", "0%", "100%"],
              }
            : { width: "0%", left: 0 }
        }
        transition={{
          duration: duration * 2.2,
          ease: "circInOut", 
          delay: delay,
          times: [0, 0.4, 0.6, 1], // expands, holds for a split second, then collapses to the right
        }}
        className="absolute bottom-0 top-0 z-20"
        style={{ backgroundColor: blockColor }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{
          duration: 0.01,
          delay: delay + duration * 0.88, // Appears right when covered completely
        }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </div>
  );
}
