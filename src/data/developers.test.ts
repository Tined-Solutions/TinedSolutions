import { describe, expect, it } from "vitest";
import { developers } from "./developers";

describe("developers data", () => {
  it("incluye perfiles del equipo fundador con LinkedIn", () => {
    const names = developers.map((developer) => developer.name);

    expect(names).toContain("Martín Lima");
    expect(names).toContain("Edgardo Del Real");

    developers.forEach((developer) => {
      expect(developer.linkedin).toMatch(/^https:\/\/www\.linkedin\.com\//);
    });
  });
});
