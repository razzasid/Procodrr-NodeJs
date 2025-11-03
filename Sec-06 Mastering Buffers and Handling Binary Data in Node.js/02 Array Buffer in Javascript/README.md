### 🧠 What is `ArrayBuffer` in JavaScript?

`ArrayBuffer` is a **fixed-length binary data buffer**. It's used to store raw binary data, often needed in low-level tasks like file processing, WebSockets, or WebAssembly.

---

### 🔹 Key Points:

* It stores **bytes (not characters or numbers)**
* You **can’t directly read/write** — use `TypedArray` or `DataView` for that

---

### ✅ Example:

```js
// Create a buffer of 4 bytes
const buffer = new ArrayBuffer(4);

// Create a typed array to interact with it
const view = new Uint8Array(buffer);

view[0] = 10;
view[1] = 20;
view[2] = 30;
view[3] = 40;

console.log(view); // Uint8Array(4) [10, 20, 30, 40]
```

---

### 🆕 Modern `ArrayBuffer` Properties & Features

| Property/Option                       | Description                                          |
| ------------------------------------- | ---------------------------------------------------- |
| `byteLength`                          | ✅ Total bytes in the buffer (even if resizable)      |
| `maxByteLength`                       | ✅ If resizable, shows maximum size allowed           |
| `resizable` (option)                  | ⚙️ Enables changing the buffer size using `resize()` |
| `detached` (via `isDetachedBuffer()`) | ✅ If buffer is detached (inaccessible)               |

---

### 📏 Max Size?

* Depends on the **JavaScript engine** and **system memory**
* In modern browsers like Chrome (V8), around **1–2 GB** max per `ArrayBuffer`
* To check limit (trial):

  ```js
  try {
    const big = new ArrayBuffer(2 ** 31); // 2GB
  } catch (e) {
    console.log("Too big:", e.message);
  }
  ```
---

### 🧹 Are `ArrayBuffers` garbage collected?

Yes!

* Just like objects, `ArrayBuffer` is **garbage collected** when no references remain.

---

### 🔧 Use Cases:

* Working with binary files (images, audio)
* WebSockets (binary frames)
* Streams or network protocols
* Interacting with binary APIs or WebAssembly

Want a `DataView` example too?


