import { describe, expect, it } from "vitest";

import { getProvinceByCode, getProvinceById, getProvinces } from "../src/index";

describe("province APIs", () => {
  it("returns all nine provinces", () => {
    expect(getProvinces()).toHaveLength(9);
  });

  it("finds a province by id", () => {
    expect(getProvinceById("western")).toMatchObject({
      id: "western",
      code: "WP",
      name: {
        en: "Western Province",
      },
    });
  });

  it("finds a province by code", () => {
    expect(getProvinceByCode("cp")).toMatchObject({
      id: "central",
      code: "CP",
    });
  });
});
