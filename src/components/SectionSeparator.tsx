import { motion } from "framer-motion";
import type { JSX } from "react";

interface SectionSeparatorProps {
  text: string;
}

export default function SectionSeparator({ text }: SectionSeparatorProps): JSX.Element {
  return (
    <div className="relative flex w-full items-center justify-center py-8 md:py-12 overflow-hidden">
      {/* High-contrast divider lines */}
      <div className="absolute left-0 w-[15%] md:w-[30%] h-[2px] bg-linear-to-r from-transparent via-elegance-gold/20 to-elegance-gold/80" />
      <div className="absolute right-0 w-[15%] md:w-[30%] h-[2px] bg-linear-to-l from-transparent via-elegance-gold/20 to-elegance-gold/80" />
      
      <motion.div
        initial={{ opacity: 0, y: 15, filter: "blur(8px)", scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 px-6 md:px-10 text-center bg-cream"
      >
        <h3 className="font-tanker text-3xl md:text-5xl lg:text-6xl tracking-wide text-tined-blue">
          {text}
        </h3>
      </motion.div>
    </div>
  );
}
