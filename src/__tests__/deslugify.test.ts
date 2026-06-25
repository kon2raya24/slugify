import { describe, it, expect } from "vitest";
import { deslugify } from "../deslugify";

describe("deslugify", () => {
  it("should be a function", () => {
    expect(typeof deslugify).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => deslugify(null as any)).toThrow();
  });
});
