import { describe, expect, it } from "vitest";
import { processSteps } from "./processSteps";

describe("process steps data", () => {
  it("define tres pasos con cierre final", () => {
    expect(processSteps).toHaveLength(3);
    expect(processSteps[0]?.stepLabel).toBe("Paso 1");
    expect(processSteps[1]?.stepLabel).toBe("Paso 2");
    expect(processSteps[2]?.isFinal).toBe(true);
  });
});
