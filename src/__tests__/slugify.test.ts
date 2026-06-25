import { describe, it, expect } from "vitest";
import { slugify } from "../slugify";

describe("slugify", () => {
  it("should be a function", () => {
    expect(typeof slugify).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => slugify(null as any)).toThrow();
  });
});
