import type { Cities } from "../types/cities";

import { cities as amparaCities } from "./citiesByDistrict/ampara";
import { cities as batticaloaCities } from "./citiesByDistrict/batticaloa";
import { cities as trincomaleeCities } from "./citiesByDistrict/trincomalee";
import { cities as kandyCities } from "./citiesByDistrict/kandy";
import { cities as colomboCities } from "./citiesByDistrict/colombo";
import { cities as kalutaraCities } from "./citiesByDistrict/kalutara";
import { cities as gampahaCities } from "./citiesByDistrict/gampaha";

export const cities: readonly Cities[] = [
  ...amparaCities,
  ...batticaloaCities,
  ...trincomaleeCities,
  ...kandyCities,
  ...colomboCities,
  ...kalutaraCities,
  ...gampahaCities,
];
