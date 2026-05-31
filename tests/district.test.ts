import { describe, expect, it } from "vitest";

import {
  getDistrictByCode,
  getDistrictById,
  getDistricts,
  getDistrictsByProvince,
} from "../src/index";

describe("district APIs", () => {
  it("returns all twenty five districts", () => {
    expect(getDistricts()).toHaveLength(25);
  });

  it("finds a district by id", () => {
    expect(getDistrictById("colombo")).toMatchObject({
      id: "colombo",
      code: "CO",
      provinceId: "western",
    });
  });

  it("finds a district by code", () => {
    expect(getDistrictByCode("tr")).toMatchObject({
      id: "trincomalee",
      code: "TR",
    });
  });

  it("finds districts by province", () => {
    expect(getDistrictsByProvince("western").map((district) => district.id)).toEqual([
      "colombo",
      "gampaha",
      "kalutara",
    ]);
  });
});
