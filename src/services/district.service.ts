import { districts } from "../data/districts";
import type { District } from "../types/district";
import { normalize } from "../utils/normalize";

const districtsById = new Map<string, District>();
const districtsByCode = new Map<string, District>();
const districtsByProvinceId = new Map<string, District[]>();

for (const district of districts) {
  const normalizedId = normalize(district.id);
  const normalizedCode = normalize(district.code);
  const normalizedProvinceId = normalize(district.provinceId);

  districtsById.set(normalizedId, district);
  districtsByCode.set(normalizedCode, district);

  const provinceDistricts = districtsByProvinceId.get(normalizedProvinceId);

  if (provinceDistricts) {
    provinceDistricts.push(district);
  } else {
    districtsByProvinceId.set(normalizedProvinceId, [district]);
  }
}

const emptyDistricts: readonly District[] = [];

export function getDistricts(): readonly District[] {
  return districts;
}

export function getDistrictById(id: string): District | undefined {
  return districtsById.get(normalize(id));
}

export function getDistrictByCode(code: string): District | undefined {
  return districtsByCode.get(normalize(code));
}

export function getDistrictsByProvince(provinceId: string): readonly District[] {
  return districtsByProvinceId.get(normalize(provinceId)) ?? emptyDistricts;
}
