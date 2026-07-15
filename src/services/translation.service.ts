import { cities } from "../data/cities";
import { districts } from "../data/districts";
import { provinces } from "../data/provinces";
import type { Cities } from "../types/cities";
import type { Language } from "../types/language";
import { normalize } from "../utils/normalize";

type TranslatableLocation =
  | (typeof provinces)[number]
  | (typeof districts)[number]
  | (typeof cities)[number];

const locations: readonly TranslatableLocation[] = [...provinces, ...districts, ...cities];

function getTranslation(location: TranslatableLocation, language: Language): string {
  return location.name[language];
}

export function translateLocation(input: string, language: Language): string | null {
  const normalizedInput = normalize(input);

  for (const location of locations) {
    if (
      normalizedInput === normalize(location.id) ||
      normalizedInput === normalize(location.code) ||
      normalizedInput === normalize(location.name.en) ||
      normalizedInput === normalize(location.name.si) ||
      normalizedInput === normalize(location.name.ta)
    ) {
      return getTranslation(location, language);
    }
  }

  return null;
}
