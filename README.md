# @srilanka/locations-core

ශ්‍රී ලංකාවේ ප්‍රදේශ (provinces) සහ දිස්ත්‍රික් (districts) පිළිබඳ ස්ථිර, ටයිප් කරන ලද SDK එකකි.

`@srilanka/locations-core` is a typed Sri Lankan locations SDK for provinces and districts. It provides deterministic lookups, simple search, translation helpers, and validation utilities with a small, tree-shakable API.

**Quick Install**

```bash
pnpm install
# when using as a dependency
pnpm add @srilanka/locations-core
```

**Build & Test (local)**

```bash
pnpm build
pnpm test
```

**Quick Start (TypeScript)**

```ts
import {
  getProvinceById,
  getDistrictById,
  getDistrictsByProvince,
  searchDistrict,
  searchProvince,
  translateLocation,
  validateAddress,
} from "@srilanka/locations-core";

// Lookups
const western = getProvinceById("western");
const colombo = getDistrictById("colombo");
const westernDistricts = getDistrictsByProvince("western");

// Search (partial strings supported, works with Sinhala/Tamil/English)
const districtMatches = searchDistrict("කො");
const provinceMatches = searchProvince("West");

// Translation
const translated = translateLocation("Colombo", "si");

// Validation
const ok = validateAddress({ provinceId: "western", districtId: "colombo" });
```

Sample JavaScript usage (CommonJS):

```js
const { getDistrictById, searchDistrict } = require("@srilanka/locations-core");

console.log(getDistrictById("colombo"));
console.log(searchDistrict("කො"));
```

**Use Cases**

- Form validation for Sri Lankan addresses (ensure province/district IDs are valid).
- Autocomplete/search UI for selecting provinces or districts (supports Sinhala/Tamil/English queries).
- Localisation: mapping display names to different languages using `translateLocation`.
- Static datasets for seeding databases or server-side validation without external lookups.

**API Reference (public exports)**

- Types:
  - `Language` = `"en" | "si" | "ta"`
  - `Province`, `District` — typed records
- Province functions:
  - `getProvinces()`
  - `getProvinceById(id)`
  - `getProvinceByCode(code)`
- District functions:
  - `getDistricts()`
  - `getDistrictById(id)`
  - `getDistrictByCode(code)`
  - `getDistrictsByProvince(provinceId)`
- Search:
  - `searchProvince(query)`
  - `searchDistrict(query)`
- Translation:
  - `translateLocation(input, language)`
- Validation:
  - `isValidProvince(id)`
  - `isValidDistrict(id)`
  - `validateAddress({ provinceId, districtId })`

For exact signatures and types see the source exports in [src/index.ts](src/index.ts#L1-L20).

**Testing & Development**

- Run tests: `pnpm test` (uses Vitest)
- Build for distribution: `pnpm build` (uses `tsup`)
- Dev mode (watch): `pnpm dev`

**Contributing / Local verification**

- Clone repo and run `pnpm install`
- Run `pnpm build` then `pnpm test` to verify changes

If you'd like, I can also add a small example script under `examples/` demonstrating a search + validation flow.

## License

ISC
