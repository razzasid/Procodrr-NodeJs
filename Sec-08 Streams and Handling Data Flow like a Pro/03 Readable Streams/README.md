# Readable Streams in Node.js

## 📚 **Why Streams Are Important in Node.js**

---

### 🚫 **Problems Without Streams**

* Using `Buffer`:

  * ❌ Cannot handle files larger than **2 GiB**
  * ❌ Large file reading/writing consumes too much **RAM**
  * ❌ Increases **CPU usage** for big files

---

### 📥 **Readable Streams**

#### ✅ Why use them?

* Efficiently handle large files in **chunks**
* Reduces memory and CPU usage

---

#### 📦 Creating a Readable Stream:

Use the **regular `fs` module**, not `fs/promises`, because:

* It directly supports **stream methods**

```js
const fs = require('fs');
const stream = fs.createReadStream("image.jpg", { highWaterMark: 20 * 1024 });
```

* `highWaterMark` defines **chunk size** (here 20 KB per chunk)

---

#### 🔄 Handling Stream Events:

```js
stream.on("data", (chunk) => {
  console.log(chunk.byteLength);
});

stream.on("end", () => {
  console.log("Ended");
});
```

* `data` → Fires every time a chunk is read
* `end` → Fires when all data has been read

---
