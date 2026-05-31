import type { Language } from "./language";

export interface District {
  id: string;
  code: string;
  provinceId: string;
  name: Record<Language, string>;
}
