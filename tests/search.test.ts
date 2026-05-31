import { describe, expect, it } from "vitest";

import { searchDistrict, searchProvince } from "../src/index";

describe("search APIs", () => {
  it("searches provinces in English", () => {
    expect(searchProvince("western province").map((province) => province.id)).toContain("western");
  });

  it("searches districts in English", () => {
    expect(searchDistrict("col").map((district) => district.id)).toContain("colombo");
  });

  it("searches districts in Sinhala", () => {
    expect(searchDistrict("කො").map((district) => district.id)).toContain("colombo");
  });

  it("searches districts in Tamil", () => {
    expect(searchDistrict("கொ").map((district) => district.id)).toContain("colombo");
  });
});
