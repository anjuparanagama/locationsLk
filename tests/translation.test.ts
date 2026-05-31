import { describe, expect, it } from "vitest";

import { translateLocation } from "../src/index";

describe("translation API", () => {
  it("translates an English province name to Sinhala", () => {
    expect(translateLocation("Western Province", "si")).toBe("බස්නාහිර පළාත");
  });

  it("translates an English district name to Tamil", () => {
    expect(translateLocation("Colombo", "ta")).toBe("கொழும்பு");
  });

  it("translates Sinhala back to English", () => {
    expect(translateLocation("කොළඹ", "en")).toBe("Colombo");
  });

  it("translates Tamil back to English", () => {
    expect(translateLocation("கொழும்பு", "en")).toBe("Colombo");
  });

  it("returns null when the location is unknown", () => {
    expect(translateLocation("Unknown Place", "si")).toBeNull();
  });
});
