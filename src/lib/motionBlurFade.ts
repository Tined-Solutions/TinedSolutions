import type { Variants } from "framer-motion";

export interface MotionBlurFadeOptions {
  yOffset?: number;
  blur?: string;
}

export function createMotionBlurFadeVariants(
  options: MotionBlurFadeOptions = {}
): Variants {
  const { yOffset = 6, blur = "6px" } = options;

  return {
    hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
    visible: { y: -yOffset, opacity: 1, filter: "blur(0px)" },
  };
}
