import { provinces } from "../data/provinces";
import type { Province } from "../types/province";
import { normalize } from "../utils/normalize";

const provincesById = new Map<string, Province>();
const provincesByCode = new Map<string, Province>();

for (const province of provinces) {
  provincesById.set(normalize(province.id), province);
  provincesByCode.set(normalize(province.code), province);
}

export function getProvinces(): readonly Province[] {
  return provinces;
}

export function getProvinceById(id: string): Province | undefined {
  return provincesById.get(normalize(id));
}

export function getProvinceByCode(code: string): Province | undefined {
  return provincesByCode.get(normalize(code));
}
