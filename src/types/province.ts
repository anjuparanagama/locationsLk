import type { Language } from "./language";

export interface Province {
  id: string;
  code: string;
  name: Record<Language, string>;
}
