# 📦 `@cybertale/resolver`

**A lightweight, framework-agnostic resolver engine** used to transform, compute, update, and manage `ObjectTemplate` structures from `@cybertale/interface`.

This package extracts core logic from UI components (Vue/React) into a clean, reusable, testable library.

---

<p align="center">
  <img src="https://img.shields.io/npm/v/%40cybertale%2Fresolver.svg?style=for-the-badge" />
  <img src="https://img.shields.io/npm/dm/%40cybertale%2Fresolver.svg?style=for-the-badge" />
  <img src="https://img.shields.io/bundlephobia/minzip/%40cybertale%2Fresolver?style=for-the-badge" />
  <img src="https://img.shields.io/github/license/cybertale/resolver?style=for-the-badge" />
</p>

## 🚀 Why this exists
Modern UI frameworks shouldn't contain domain logic.

Before this package:
- Buttons processed JSON in the component  
- Fields decided validation class  
- SelectList parsed arrays  
- Many duplicated helpers across components  

Now all that logic is extracted into:
```
@cybertale/resolver
```

Your UI becomes dumb — your resolver becomes smart.

---

# 🧩 Features

### ✔ JSON parsing & normalization  
### ✔ Template stat utilities  
### ✔ Template actions  
### ✔ Computed helpers  
### ✔ Finalization helpers

---

# 📥 Installation

```bash
npm install @cybertale/resolver
```

---

# 🧱 Architecture Overview

```
resolver/
├── transform/
├── form/
├── compute/
├── finalize/
└── handlers/
```

---

# 📚 Usage Examples

## Extracted Field Logic (Vue)

```ts
import { getValueFromTemplate } from '@cybertale/resolver/form/value'
```

## Updating Template Data

```ts
import { updateValueForTemplate } from '@cybertale/resolver/handlers/update'
```

---

# 🤝 Contributing

1. Clone repo  
2. Install deps  
3. Run tests  
4. Submit PR

---

# 📜 License

MIT © Cybertale
