# locationslk

locationslk is a typed Sri Lankan locations SDK for provinces, districts and cities. It provides deterministic lookups, multilingual search, translation helpers, and validation utilities without requiring any external API.

## What this package provides

- Province, district, and city lookups by id or code.
- Multilingual search across English, Sinhala, and Tamil names.
- Location translation between supported languages.
- Validation helpers for province and district combinations.
- Typed data models that work well with TypeScript and JavaScript.

## Installation

```bash
npm install locationslk
```

```bash
pnpm add locationslk
```

```bash
yarn add locationslk
```

## Quick Start

```ts
import {
  getProvinceById,
  getDistrictById,
  getCityById,
  getDistrictsByProvince,
  getCitiesByDistrict,
  searchProvince,
  searchDistrict,
  searchCity,
  translateLocation,
  validateAddress,
} from "locationslk";

const western = getProvinceById("western");
const colombo = getDistrictById("colombo");
const uhana = getCityById("uhana");

const westernDistricts = getDistrictsByProvince("western");
const amparaCities = getCitiesByDistrict("ampara");

const provinceMatches = searchProvince("west");
const districtMatches = searchDistrict("කො");
const cityMatches = searchCity("katt");

const tamilName = translateLocation("Colombo", "ta");

const validation = validateAddress({
  provinceId: "western",
  districtId: "colombo",
});
```

## CommonJS

```js
const { getDistrictById, searchDistrict, translateLocation } = require("locationslk");

console.log(getDistrictById("colombo"));
console.log(searchDistrict("Amp"));
console.log(translateLocation("Western Province", "si"));
```

## Public API

### Province helpers

- `getProvinces(): readonly Province[]`
- `getProvinceById(id: string): Province | undefined`
- `getProvinceByCode(code: string): Province | undefined`

### District helpers

- `getDistricts(): readonly District[]`
- `getDistrictById(id: string): District | undefined`
- `getDistrictByCode(code: string): District | undefined`
- `getDistrictsByProvince(provinceId: string): readonly District[]`

### City helpers

- `getCities(): readonly Cities[]`
- `getCityById(id: string): Cities | undefined`
- `getCityByCode(code: string): Cities | undefined`
- `getCitiesByDistrict(districtId: string): readonly Cities[]`
- `getCitiesByProvince(provinceId: string): readonly Cities[]`

### Search helpers

- `searchProvince(query: string): readonly Province[]`
- `searchDistrict(query: string): readonly District[]`
- `searchCity(query: string): readonly Cities[]`

### Translation helper

- `translateLocation(input: string, language: Language): string | null`

### Validation helpers

- `isValidProvince(id: string): boolean`
- `isValidDistrict(id: string): boolean`
- `validateAddress(input: { provinceId: string; districtId: string }): { valid: boolean; errors: string[] }`

For the full reference, object shapes, and behavior notes, see [docs/API.md](docs/API.md).

## Data Models

```ts
type Language = "en" | "si" | "ta";

interface Province {
  id: string;
  code: string;
  name: Record<Language, string>;
}

interface District {
  id: string;
  code: string;
  provinceId: string;
  name: Record<Language, string>;
}

interface Cities {
  id: string;
  code: string;
  provinceId: string;
  districtId: string;
  name: Record<Language, string>;
}
```

## Behavior Notes

- Lookups normalize input by trimming and lowercasing before matching.
- Search performs partial matching across English, Sinhala, and Tamil names.
- `translateLocation` returns `null` when the input cannot be matched.
- `validateAddress` returns both a boolean and a list of validation errors.

## Use Cases

- Sri Lankan address form validation.
- Province, district, and city autocomplete.
- Multilingual search interfaces.
- Database seeding with stable location ids and codes.
- Backend validation without external services.

## Development

```bash
pnpm install
pnpm build
pnpm test
```

Watch mode:

```bash
pnpm dev
```

## Testing

The project uses Vitest for unit testing.

```bash
pnpm test
```

## Package Contents

The package exports its public API from `src/index.ts` and compiles to:

- `dist/index.js`
- `dist/index.mjs`
- `dist/index.d.ts`

## Example Validation Flow

```ts
import { validateAddress } from "locationslk";

const result = validateAddress({
  provinceId: "western",
  districtId: "colombo",
});

if (result.valid) {
  console.log("Valid Sri Lankan address");
} else {
  console.log(result.errors);
}
```
