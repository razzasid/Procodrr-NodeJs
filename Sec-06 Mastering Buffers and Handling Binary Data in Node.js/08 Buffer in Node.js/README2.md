## 📦 Buffer in Node.js

* A **typed array** (based on `Uint8Array`) with **extra features** provided by Node.js.
* **Available globally** in Node.js (no need to import), but **not available in browsers**.

---

## 🚫 Deprecated Usage

* Using `new Buffer()` is **deprecated** for **security reasons**.
* Use `Buffer.alloc()` or `Buffer.from()` instead.

---

## 🛠 Tips for IntelliSense & Types

If you're not getting method/property suggestions:

1. `import { Buffer } from 'buffer'` ✅ (recommended by Node.js)
2. Or install types: `npm i @types/node -D`

---

## 🧱 Buffer Methods

### 🔹 `Buffer.alloc(size)`

* Creates an empty buffer of given `size` (in bytes).
* Internally uses `ArrayBuffer` of exact size.

### 🔹 `Buffer.from(data)`

* Creates a buffer from:

  * **ArrayBuffer**
  * **String**
  * **Array**
* May allocate **more bytes internally** than expected.

---

## 📌 `toString()` Differences

| Type         | `.toString()` Result                              |
| ------------ | ------------------------------------------------- |
| `Uint8Array` | Returns `[object Uint8Array]` or incorrect string |
| `Buffer`     | ✅ Returns actual string content                   |

---
