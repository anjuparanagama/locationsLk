# API Reference

This document describes the public API exported by `locationslk`.

## Types

### `Language`

```ts
type Language = "en" | "si" | "ta";
```

### `Province`

```ts
interface Province {
  id: string;
  code: string;
  name: Record<Language, string>;
}
```

### `District`

```ts
interface District {
  id: string;
  code: string;
  provinceId: string;
  name: Record<Language, string>;
}
```

### `Cities`

```ts
interface Cities {
  id: string;
  code: string;
  provinceId: string;
  districtId: string;
  name: Record<Language, string>;
}
```

## Province helpers

### `getProvinces()`

Returns the full province dataset as a readonly array.

```ts
const provinces = getProvinces();
```

### `getProvinceById(id)`

Returns the province with a matching id, or `undefined` when no province exists.

Input is normalized before matching.

### `getProvinceByCode(code)`

Returns the province with a matching code, or `undefined` when no province exists.

Input is normalized before matching.

## District helpers

### `getDistricts()`

Returns the full district dataset as a readonly array.

### `getDistrictById(id)`

Returns the district with a matching id, or `undefined` when no district exists.

### `getDistrictByCode(code)`

Returns the district with a matching code, or `undefined` when no district exists.

### `getDistrictsByProvince(provinceId)`

Returns all districts for the given province id.

If no districts match, this returns an empty readonly array.

## City helpers

### `getCities()`

Returns the full city dataset as a readonly array.

### `getCityById(id)`

Returns the city with a matching id, or `undefined` when no city exists.

### `getCityByCode(code)`

Returns the city with a matching code, or `undefined` when no city exists.

### `getCitiesByDistrict(districtId)`

Returns all cities for the given district id.

If no cities match, this returns an empty readonly array.

### `getCitiesByProvince(provinceId)`

Returns all cities for the given province id.

If no cities match, this returns an empty readonly array.

## Search helpers

### `searchProvince(query)`

Searches province names in English, Sinhala, and Tamil.

### `searchDistrict(query)`

Searches district names in English, Sinhala, and Tamil.

### `searchCity(query)`

Searches city names in English, Sinhala, and Tamil.

Search is partial and case-insensitive after normalization.

## Translation

### `translateLocation(input, language)`

Attempts to match the input against a province, district, or city using:

- id
- code
- English name
- Sinhala name
- Tamil name

If a match is found, the name is returned in the requested language.
If no match is found, the function returns `null`.

```ts
translateLocation("Colombo", "si");
translateLocation("කොළඹ", "en");
```

## Validation

### `isValidProvince(id)`

Returns `true` when a province with the given id exists.

### `isValidDistrict(id)`

Returns `true` when a district with the given id exists.

### `validateAddress({ provinceId, districtId })`

Validates that both identifiers exist and that the district belongs to the province.

Returns:

```ts
{
  valid: boolean;
  errors: string[];
}
```

Possible error messages:

- `Province does not exist`
- `District does not exist`
- `District does not belong to province`

## Normalization rules

All id/code matching uses a simple normalization strategy that trims whitespace and lowercases the input.

## Example

```ts
import {
  getProvinceByCode,
  getDistrictsByProvince,
  searchDistrict,
  translateLocation,
  validateAddress,
} from "locationslk";

const province = getProvinceByCode("WP");
const westernDistricts = getDistrictsByProvince("western");
const matches = searchDistrict("කො");
const tamil = translateLocation("Western Province", "ta");
const validation = validateAddress({ provinceId: "western", districtId: "colombo" });
```
