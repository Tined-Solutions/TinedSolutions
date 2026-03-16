import { describe, expect, it } from "vitest";
import { projects } from "./projects";

describe("projects data", () => {
  it("incluye un enlace de visita por cada proyecto", () => {
    expect(projects.length).toBeGreaterThan(0);

    projects.forEach((project) => {
      expect(project.siteUrl.trim().length).toBeGreaterThan(0);
      expect(project.siteUrl).toMatch(/^https?:\/\//);
    });
  });
});