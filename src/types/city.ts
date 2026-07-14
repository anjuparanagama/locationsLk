import type { Language } from "./language";

export interface Cities {
  id: string;
  code: string;
  provinceId: string;
  districtId: string;
  name: Record<Language, string>;
}
