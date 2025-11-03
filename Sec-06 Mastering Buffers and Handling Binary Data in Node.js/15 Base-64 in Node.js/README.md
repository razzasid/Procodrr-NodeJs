# **Base64** and **Base64URL** in Node.js

---

## 📚 Base64 Encoding in Node.js

### 🔸 What is Base64?

* Base64 encodes **binary data** (like images, files) into **text format**.
* It uses **64 characters**: `A-Z`, `a-z`, `0-9`, `+`, `/`
* Common in:

  * Emails
  * HTML image embedding
  * JWT (JSON Web Tokens)

---

### 📦 File size note:

When binary is encoded to base64, its size increases by **\~33%**:

> ✅ About **8/6** times bigger.

---

### 🔧 Encoding/Decoding in Node.js

```js
const fs = require("fs");

const image = fs.readFileSync("image.png");
const base64 = image.toString("base64");
fs.writeFileSync("output.b64.txt", base64);
```

---

### 💻 Shell Commands

* Encode a file:

  ```bash
  base64 image.png
  ```

* Get image as data URL:

  ```bash
  echo "data:image/png;base64,$(base64 image.png)"
  ```

Useful when embedding images directly in HTML.

---

## 🔐 Why Base64?

Some systems (email, URLs, JSON, etc.) only support **text**, not binary.
Base64 makes it safe to send **any file or data as a string**.

---

## 🔁 Base64URL Encoding

### 🔸 What is Base64URL?

* A variant of base64 that’s **safe for URLs and query strings**
* It:

  * Replaces `+` with `-`
  * Replaces `/` with `_`
  * Removes trailing `=`

### 📍 Used in:

* JWT tokens
* URL query parameters
* OAuth, APIs

---

### 🔧 Convert Base64 → Base64URL in Node.js:

```js
function toBase64URL(base64) {
  return base64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
```

---

### 🧪 Example:

```js
const data = Buffer.from("Hameed").toString("base64"); // "SGFtZWVk"
const urlSafe = toBase64URL(data);                    // "SGFtZWVk" (no +, /, or =)

console.log("Base64:", data);
console.log("Base64URL:", urlSafe);
```

---

### ✅ Summary

| Feature         | Base64 | Base64URL                |
| --------------- | ------ | ------------------------ |
| Safe for URLs   | ❌ No   | ✅ Yes                    |
| Uses `+` & `/`  | ✅ Yes  | ❌ Replaced with `-`, `_` |
| Has `=` padding | ✅ Yes  | ❌ Removed                |

