import type { District } from "../types/district";

export const districts: readonly District[] = [
  {
    id: "colombo",
    code: "CO",
    provinceId: "western",
    name: {
      en: "Colombo",
      si: "කොළඹ",
      ta: "கொழும்பு",
    },
  },
  {
    id: "gampaha",
    code: "GP",
    provinceId: "western",
    name: {
      en: "Gampaha",
      si: "ගම්පහ",
      ta: "கம்பஹா",
    },
  },
  {
    id: "kalutara",
    code: "KT",
    provinceId: "western",
    name: {
      en: "Kalutara",
      si: "කළුතර",
      ta: "களுத்துறை",
    },
  },
  {
    id: "kandy",
    code: "KA",
    provinceId: "central",
    name: {
      en: "Kandy",
      si: "මහනුවර",
      ta: "கண்டி",
    },
  },
  {
    id: "matale",
    code: "MT",
    provinceId: "central",
    name: {
      en: "Matale",
      si: "මාතලේ",
      ta: "மாத்தளை",
    },
  },
  {
    id: "nuwara-eliya",
    code: "NE",
    provinceId: "central",
    name: {
      en: "Nuwara Eliya",
      si: "නුවර එළිය",
      ta: "நுவரெலியா",
    },
  },
  {
    id: "galle",
    code: "GL",
    provinceId: "southern",
    name: {
      en: "Galle",
      si: "ගාල්ල",
      ta: "காலி",
    },
  },
  {
    id: "matara",
    code: "MA",
    provinceId: "southern",
    name: {
      en: "Matara",
      si: "මාතර",
      ta: "மாத்தறை",
    },
  },
  {
    id: "hambantota",
    code: "HB",
    provinceId: "southern",
    name: {
      en: "Hambantota",
      si: "හම්බන්තොට",
      ta: "அம்பாந்தோட்டை",
    },
  },
  {
    id: "jaffna",
    code: "JF",
    provinceId: "northern",
    name: {
      en: "Jaffna",
      si: "යාපනය",
      ta: "யாழ்ப்பாணம்",
    },
  },
  {
    id: "kilinochchi",
    code: "KC",
    provinceId: "northern",
    name: {
      en: "Kilinochchi",
      si: "කිලිනොච්චි",
      ta: "கிளிநொச்சி",
    },
  },
  {
    id: "mannar",
    code: "MN",
    provinceId: "northern",
    name: {
      en: "Mannar",
      si: "මන්නාරම",
      ta: "மன்னார்",
    },
  },
  {
    id: "mullaitivu",
    code: "MU",
    provinceId: "northern",
    name: {
      en: "Mullaitivu",
      si: "මුලතිව්",
      ta: "முல்லைத்தீவு",
    },
  },
  {
    id: "vavuniya",
    code: "VA",
    provinceId: "northern",
    name: {
      en: "Vavuniya",
      si: "වව්නියාව",
      ta: "வவுனியா",
    },
  },
  {
    id: "batticaloa",
    code: "BC",
    provinceId: "eastern",
    name: {
      en: "Batticaloa",
      si: "මඩකලපුව",
      ta: "மட்டக்களப்பு",
    },
  },
  {
    id: "ampara",
    code: "AP",
    provinceId: "eastern",
    name: {
      en: "Ampara",
      si: "අම්පාර",
      ta: "அம்பாறை",
    },
  },
  {
    id: "trincomalee",
    code: "TR",
    provinceId: "eastern",
    name: {
      en: "Trincomalee",
      si: "ත්‍රිකුණාමලය",
      ta: "திருகோணமலை",
    },
  },
  {
    id: "kurunegala",
    code: "KG",
    provinceId: "north-western",
    name: {
      en: "Kurunegala",
      si: "කුරුණෑගල",
      ta: "குருநாகல்",
    },
  },
  {
    id: "puttalam",
    code: "PT",
    provinceId: "north-western",
    name: {
      en: "Puttalam",
      si: "පුත්තලම",
      ta: "புத்தளம்",
    },
  },
  {
    id: "anuradhapura",
    code: "AN",
    provinceId: "north-central",
    name: {
      en: "Anuradhapura",
      si: "අනුරාධපුරය",
      ta: "அனுராதபுரம்",
    },
  },
  {
    id: "polonnaruwa",
    code: "PO",
    provinceId: "north-central",
    name: {
      en: "Polonnaruwa",
      si: "පොළොන්නරුව",
      ta: "பொலன்னறுவை",
    },
  },
  {
    id: "badulla",
    code: "BD",
    provinceId: "uva",
    name: {
      en: "Badulla",
      si: "බදුල්ල",
      ta: "பதுளை",
    },
  },
  {
    id: "monaragala",
    code: "MG",
    provinceId: "uva",
    name: {
      en: "Monaragala",
      si: "මොණරාගල",
      ta: "மொனராகலை",
    },
  },
  {
    id: "ratnapura",
    code: "RA",
    provinceId: "sabaragamuwa",
    name: {
      en: "Ratnapura",
      si: "රත්නපුර",
      ta: "இரத்தினபுரி",
    },
  },
  {
    id: "kegalle",
    code: "KE",
    provinceId: "sabaragamuwa",
    name: {
      en: "Kegalle",
      si: "කෑගල්ල",
      ta: "கேகாலை",
    },
  },
] as const;
