import { cities } from "../data/cities";
import type { Cities } from "../types/cities";
import { normalize } from "../utils/normalize";

const citiesById = new Map<string, Cities>();
const citiesByCode = new Map<string, Cities>();
const citiesByDistrictId = new Map<string, Cities[]>();
const citiesByProvinceId = new Map<string, Cities[]>();

for (const city of cities) {
  const normalizedId = normalize(city.id);
  const normalizedCode = normalize(city.code);
  const normalizedDistrictId = normalize(city.districtId);
  const normalizedProvinceId = normalize(city.provinceId);

  citiesById.set(normalizedId, city);
  citiesByCode.set(normalizedCode, city);

  const districtCities = citiesByDistrictId.get(normalizedDistrictId);
  if (districtCities) {
    districtCities.push(city);
  } else {
    citiesByDistrictId.set(normalizedDistrictId, [city]);
  }

  const provinceCities = citiesByProvinceId.get(normalizedProvinceId);
  if (provinceCities) {
    provinceCities.push(city);
  } else {
    citiesByProvinceId.set(normalizedProvinceId, [city]);
  }
}

const emptyCities: readonly Cities[] = [];

export function getCities(): readonly Cities[] {
  return cities;
}

export function getCityById(id: string): Cities | undefined {
  return citiesById.get(normalize(id));
}

export function getCityByCode(code: string): Cities | undefined {
  return citiesByCode.get(normalize(code));
}

export function getCitiesByDistrict(districtId: string): readonly Cities[] {
  return citiesByDistrictId.get(normalize(districtId)) ?? emptyCities;
}

export function getCitiesByProvince(provinceId: string): readonly Cities[] {
  return citiesByProvinceId.get(normalize(provinceId)) ?? emptyCities;
}
