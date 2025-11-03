## 📚 **Buffer Pool in Node.js**

### 🔹 When we create a Buffer (`Buffer.alloc()` or `Buffer.allocUnsafe()`):

* The buffer size (byteLength) is exactly what we specify.
* But **under the hood**, `ArrayBuffer` behaves differently.

---

### 🔸 `Buffer.alloc(size)`

* Allocates a **new ArrayBuffer** of the exact size.
* Clean and zero-filled memory.
* No use of shared memory pool.

---

### 🔸 `Buffer.allocUnsafe(size)`

* Uses a shared **Buffer pool** of **8192 bytes (8KB)**.
* Skips the first **8 bytes** due to `byteOffset`.
* Data is inserted **after the offset**.

---

### ⚙️ Shared Pool Logic

* `allocUnsafe()` shares the same pool (`ArrayBuffer`) for multiple buffers **only if:**

  ```js
  byteLength < poolSize >>> 1  // i.e., less than half of 8KB
  ```

* If the buffer size is **too large**, a **new ArrayBuffer** is created.

---

### 🔁 `Buffer.poolSize`

* Default: `8192` bytes (8KB)

* You can change it using:

  ```js
  Buffer.poolSize = 16 * 1024; // 16KB
  ```

* Note: This applies **only to buffers created after the first one**.

---

### ⚡ Why `allocUnsafe()` is faster?

* Uses **pre-allocated 8KB memory**
* Doesn't request zeroed memory
* Ideal for **performance-critical** tasks

---

### 📦 Related Methods

* `Buffer.from()` and `Buffer.concat()` internally use `allocUnsafe()`.

---

### 🛑 `Buffer.allocUnsafeSlow()`

* Similar to `allocUnsafe()`, but **does NOT use the pool**.
* Avoid unless you need a completely **independent** memory buffer.

---

### 📊 `buffer.constants`

When importing:

```js
import { Buffer, constants } from 'buffer';
```

* `constants.MAX_LENGTH` – Max buffer size supported
* `constants.MAX_STRING_LENGTH` – Max string length supported

---
