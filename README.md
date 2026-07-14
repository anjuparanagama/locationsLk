# 📍 locationslk

A typed Sri Lankan locations SDK for provinces and districts.

It provides deterministic lookups, search support (Sinhala / Tamil / English), translation utilities, and validation helpers for Sri Lankan administrative divisions.

---

## 🚀 Installation

```bash
npm install locationslk
# or
pnpm add locationslk
```

---

## ⚡ Quick Start (TypeScript / ES Modules)

```ts
import {
  getProvinceById,
  getDistrictById,
  getDistrictsByProvince,
  searchDistrict,
  searchProvince,
  translateLocation,
  validateAddress,
} from "locationslk";

// Province lookup
const western = getProvinceById("western");

// District lookup
const colombo = getDistrictById("colombo");

// Get districts in a province
const westernDistricts = getDistrictsByProvince("western");

// Search (supports Sinhala / Tamil / English)
const districtMatches = searchDistrict("කො");
const provinceMatches = searchProvince("West");

// Translation
const translated = translateLocation("Colombo", "si");

// Validation
const isValid = validateAddress({
  provinceId: "western",
  districtId: "colombo",
});
```

---

## 📦 CommonJS Usage

```js
const { getDistrictById, searchDistrict } = require("locationslk");

console.log(getDistrictById("colombo"));
console.log(searchDistrict("Amp"));
```

---

## 🎯 Features

- 🇱🇰 Sri Lanka provinces & districts dataset
- 🔎 Fast search (Sinhala / Tamil / English support)
- 🧭 Deterministic ID-based lookups
- 🌐 Translation support
- ✅ Address validation
- ⚡ Lightweight and tree-shakable

---

## 🧩 API Reference

### Provinces

```ts
getProvinces();
getProvinceById(id);
getProvinceByCode(code);
```

---

### Districts

```ts
getDistricts();
getDistrictById(id);
getDistrictByCode(code);
getDistrictsByProvince(provinceId);
```

---

### Search

```ts
searchProvince(query);
searchDistrict(query);
```

Supports partial matching and multilingual input.

---

### Translation

```ts
translateLocation(input, language);
```

**Languages:**

```ts
type Language = "en" | "si" | "ta";
```

---

### Validation

```ts
isValidProvince(id);
isValidDistrict(id);

validateAddress({
  provinceId,
  districtId,
});
```

---

## 🧪 Development

```bash
pnpm install
pnpm build
pnpm test
```

Watch mode:

```bash
pnpm dev
```

---

## 🧪 Testing

Uses **Vitest** for unit testing.

```bash
pnpm test
```

---

## 📁 Use Cases

- 🏠 Sri Lankan address form validation
- 🔍 Autocomplete dropdowns (province/district)
- 🌍 Multi-language location search
- 🗄️ Database seeding with stable location IDs
- 🧾 Backend validation without external APIs

---

## 📌 Example: Form Validation Flow

```ts
const input = {
  provinceId: "western",
  districtId: "colombo",
};

if (validateAddress(input)) {
  console.log("Valid Sri Lankan address");
} else {
  console.log("Invalid address");
}
```
