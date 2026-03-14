import { useRef, type JSX, type ReactNode } from "react";
import {
  motion,
  useInView,
  type UseInViewOptions,
  type Variants,
} from "framer-motion";
import { createMotionBlurFadeVariants } from "../lib/motionBlurFade";

type MarginType = UseInViewOptions["margin"];

interface MotionBlurFadeProps {
  children: ReactNode;
  className?: string;
  variant?: Variants;
  duration?: number;
  delay?: number;
  yOffset?: number;
  inView?: boolean;
  inViewMargin?: MarginType;
  blur?: string;
}

export default function MotionBlurFade({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  yOffset = 6,
  inView = true,
  inViewMargin = "-50px",
  blur = "6px",
}: MotionBlurFadeProps): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);
  const inViewResult = useInView(ref, { once: true, margin: inViewMargin });
  const isInView = !inView || inViewResult;

  const combinedVariants = variant ?? createMotionBlurFadeVariants({ yOffset, blur });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={combinedVariants}
      transition={{
        delay: 0.04 + delay,
        duration,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
