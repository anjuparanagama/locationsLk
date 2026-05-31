import { describe, expect, it } from "vitest";

import { isValidDistrict, isValidProvince, validateAddress } from "../src/index";

describe("validation APIs", () => {
  it("validates province and district existence", () => {
    expect(isValidProvince("western")).toBe(true);
    expect(isValidDistrict("colombo")).toBe(true);
  });

  it("accepts a valid province and district pair", () => {
    expect(validateAddress({ provinceId: "western", districtId: "colombo" })).toEqual({
      valid: true,
      errors: [],
    });
  });

  it("rejects a district that does not belong to the province", () => {
    expect(validateAddress({ provinceId: "central", districtId: "colombo" })).toEqual({
      valid: false,
      errors: ["District does not belong to province"],
    });
  });

  it("reports missing province and district", () => {
    expect(validateAddress({ provinceId: "missing", districtId: "missing" })).toEqual({
      valid: false,
      errors: ["Province does not exist", "District does not exist"],
    });
  });
});
