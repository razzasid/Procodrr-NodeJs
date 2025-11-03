### ✅ Node.js also supports `ArrayBuffer` and `Uint8Array`!

Let’s clarify:

---

### 📌 `ArrayBuffer` and `Uint8Array`

* **Standard JavaScript features** (part of ECMAScript)
* Supported in **Node.js** and **browsers**
* Mostly used for low-level memory and binary data
* You’ll often see them in **Web APIs**, **crypto**, **WebAssembly**, etc.

---

### 📦 `Buffer.alloc()` (Node.js only)

* Specific to **Node.js**
* Built for **file I/O**, **networking**, and **binary encoding**
* Offers many **extra methods** (e.g., `toString()`, `write()`, `readInt8()`)

---

### 🔁 Example: Mixing them

```js
// Node.js supports this
const ab = new ArrayBuffer(4);
const view = new Uint8Array(ab);
view[0] = 100;

const buf = Buffer.from(view);
console.log(buf); // <Buffer 64 00 00 00>
```

So:

* ✔️ `ArrayBuffer` and `Uint8Array`: Standard + Node.js
* ✔️ `Buffer`: Node.js only, more powerful for binary/string handling

Want examples using `Buffer` for reading files or sending network data?
