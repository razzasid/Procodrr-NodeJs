## 📘 Typed Arrays – Notes

### 🔹 Overview

* **Typed arrays** are special array-like objects used to work with **binary data** efficiently.
* They store data of a **single numeric type** (e.g., Int, Float).
* They provide **Array-like methods** but **cannot change size** after creation.

---

### 🔹 DataView vs Typed Arrays

* `DataView` gives **full control over bytes** in an `ArrayBuffer`.
* Unlike `DataView`, Typed Arrays don't have a unified constructor.
* `DataView` is useful for custom structures and byte-level operations.

---

### 🔹 Types of Typed Arrays

#### 🟢 Signed:

* `Int8Array`
* `Int16Array`
* `Int32Array`
* `BigInt64Array`

#### 🟡 Unsigned:

* `Uint8Array`
* `Uint16Array`
* `Uint32Array`
* `BigUint64Array`
* `Float32Array`
* `Float64Array`


#### 🔵 Special:

* `Uint8ClampedArray` – clamps values between `0-255`

---

### 🔹 Size Meaning

* `8` → 1 byte per element
* `16` → 2 bytes per element
* `32` → 4 bytes per element

---

### 🔹 Typed Array Features

* Cannot store non-numeric values (only int/float types)
* Cannot resize once created
* Inherits most **Array methods**

---

### 🔹 Ways to Create Typed Arrays

1. **From ArrayBuffer:**

   ```js
   const buffer = new ArrayBuffer(3);
   const view = new Uint8Array(buffer);
   ```

2. **With a fixed size:**

   ```js
   const arr = new Uint8Array(4); // Zero-filled
   ```

3. **With an initial array:**

   ```js
   const arr = new Uint8Array([0xfe, 0x53, 0xde, 0x99]);
   ```

4. **With fill:**

   ```js
   const arr = new Uint8Array(4).fill(5); // [5, 5, 5, 5]
   ```

---

### 📝 Extra Notes

* You can create a **resizable ArrayBuffer** by passing `maxByteLength`:

  ```js
  new ArrayBuffer(byteLength, { maxByteLength });
  ```

* **Detached ArrayBuffer**: Happens when memory is transferred to another context (e.g., `structuredClone().transfer()`).

* 🔴 `detached` and `transfer` are **new features** and **not yet supported in Node.js**.

---

Let me know if you want it as a downloadable PDF or formatted Markdown!
