export type { Language } from "./language";
export type { Province } from "./province";
export interface Province {
  id: string;
  code: string;
  name: { en: string; si: string; ta: string };
}
