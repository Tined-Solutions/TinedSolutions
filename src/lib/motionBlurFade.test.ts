import { describe, expect, it } from "vitest";
import { createMotionBlurFadeVariants } from "./motionBlurFade";

describe("createMotionBlurFadeVariants", () => {
  it("crea variantes por defecto", () => {
    const variants = createMotionBlurFadeVariants();

    expect(variants.hidden).toMatchObject({ y: 6, opacity: 0, filter: "blur(6px)" });
    expect(variants.visible).toMatchObject({ y: -6, opacity: 1, filter: "blur(0px)" });
  });

  it("crea variantes personalizadas", () => {
    const variants = createMotionBlurFadeVariants({ yOffset: 12, blur: "10px" });

    expect(variants.hidden).toMatchObject({ y: 12, opacity: 0, filter: "blur(10px)" });
    expect(variants.visible).toMatchObject({ y: -12, opacity: 1, filter: "blur(0px)" });
  });
});
