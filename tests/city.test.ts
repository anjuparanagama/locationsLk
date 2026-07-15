import { describe, expect, it } from "vitest";

import {
  getCities,
  getCitiesByDistrict,
  getCitiesByProvince,
  getCityByCode,
  getCityById,
} from "../src/index";

describe("city APIs", () => {
  it("returns all cities", () => {
    expect(getCities()).toHaveLength(32);
    console.log(getCities().map((city) => city.id));
  });

  it("finds a city by id", () => {
    expect(getCityById("uhana")).toMatchObject({
      id: "uhana",
      code: "uhana",
      districtId: "ampara",
    });
    console.log(getCityById("uhana"));
  });

  it("finds a city by code", () => {
    expect(getCityByCode("kattankudy")).toMatchObject({
      id: "kattankudy",
      code: "kattankudy",
    });
    console.log(getCityByCode("kattankudy"));
  });

  it("finds cities by district", () => {
    expect(getCitiesByDistrict("ampara").map((city) => city.id)).toContain("uhana");
    console.log(getCitiesByDistrict("ampara").map((city) => city.id));
  });

  it("finds cities by province", () => {
    expect(getCitiesByProvince("eastern").map((city) => city.id)).toContain("kattankudy");
    console.log(getCitiesByProvince("eastern").map((city) => city.id));
  });
});
