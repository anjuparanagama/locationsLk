import { getDistrictById } from "./district.service";
import { getProvinceById } from "./province.service";

export interface AddressInput {
  provinceId: string;
  districtId: string;
}

export interface AddressValidationResult {
  valid: boolean;
  errors: string[];
}

export function isValidProvince(id: string): boolean {
  return getProvinceById(id) !== undefined;
}

export function isValidDistrict(id: string): boolean {
  return getDistrictById(id) !== undefined;
}

export function validateAddress({ provinceId, districtId }: AddressInput): AddressValidationResult {
  const errors: string[] = [];
  const province = getProvinceById(provinceId);
  const district = getDistrictById(districtId);

  if (!province) {
    errors.push("Province does not exist");
  }

  if (!district) {
    errors.push("District does not exist");
  }

  if (province && district && district.provinceId !== province.id) {
    errors.push("District does not belong to province");
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}
