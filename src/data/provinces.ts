import type { Province } from "../types/province";

export const provinces: readonly Province[] = [
  {
    id: "western",
    code: "WP",
    name: {
      en: "Western Province",
      si: "බස්නාහිර පළාත",
      ta: "மேல் மாகாணம்",
    },
  },
  {
    id: "central",
    code: "CP",
    name: {
      en: "Central Province",
      si: "මධ්‍යම පළාත",
      ta: "மத்திய மாகாணம்",
    },
  },
  {
    id: "southern",
    code: "SP",
    name: {
      en: "Southern Province",
      si: "දකුණු පළාත",
      ta: "தென் மாகாணம்",
    },
  },
  {
    id: "northern",
    code: "NP",
    name: {
      en: "Northern Province",
      si: "උතුරු පළාත",
      ta: "வட மாகாணம்",
    },
  },
  {
    id: "eastern",
    code: "EP",
    name: {
      en: "Eastern Province",
      si: "නැගෙනහිර පළාත",
      ta: "கிழக்கு மாகாணம்",
    },
  },
  {
    id: "north-western",
    code: "NWP",
    name: {
      en: "North Western Province",
      si: "වයඹ පළාත",
      ta: "வடமேல் மாகாணம்",
    },
  },
  {
    id: "north-central",
    code: "NCP",
    name: {
      en: "North Central Province",
      si: "උතුරු මැද පළාත",
      ta: "வட மத்திய மாகாணம்",
    },
  },
  {
    id: "uva",
    code: "UP",
    name: {
      en: "Uva Province",
      si: "ඌව පළාත",
      ta: "ஊவா மாகாணம்",
    },
  },
  {
    id: "sabaragamuwa",
    code: "SGP",
    name: {
      en: "Sabaragamuwa Province",
      si: "සබරගමුව පළාත",
      ta: "சபரகமுவ மாகாணம்",
    },
  },
] as const;
