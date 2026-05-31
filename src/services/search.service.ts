import { districts } from "../data/districts";
import { provinces } from "../data/provinces";
import type { District } from "../types/district";
import type { Province } from "../types/province";
import { normalize } from "../utils/normalize";

function matchesQuery(values: readonly string[], query: string): boolean {
  const normalizedQuery = normalize(query);

  return values.some((value) => normalize(value).includes(normalizedQuery));
}

export function searchProvince(query: string): readonly Province[] {
  return provinces.filter((province) => {
    return matchesQuery([province.name.en, province.name.si, province.name.ta], query);
  });
}

export function searchDistrict(query: string): readonly District[] {
  return districts.filter((district) => {
    return matchesQuery([district.name.en, district.name.si, district.name.ta], query);
  });
}
