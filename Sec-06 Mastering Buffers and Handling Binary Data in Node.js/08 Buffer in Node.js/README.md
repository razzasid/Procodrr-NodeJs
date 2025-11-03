## 💡 What is a Buffer in Node.js?

A **Buffer** is a built-in object in Node.js used to handle **binary data** (like files, images, audio, network data) directly in memory.

Unlike regular strings (UTF-16), Buffer works with **raw bytes** — very useful in low-level operations.

---

## 📦 Why Buffers?

* Node.js is built for I/O (files, TCP, etc.)
* Buffers allow **efficient data handling**
* Used when streaming or dealing with non-text data

---

## 🧱 Creating Buffers

### 1. `Buffer.alloc(size)`

Creates a zero-filled buffer.

```js
const buf = Buffer.alloc(4);
console.log(buf); // <Buffer 00 00 00 00>
```

---

### 2. `Buffer.from(array)`

Creates buffer from byte array.

```js
const buf = Buffer.from([72, 97, 109]); 
console.log(buf.toString()); // "Ham"
```

---

### 3. `Buffer.from(string[, encoding])`

Creates buffer from a string.

```js
const buf = Buffer.from('Hello');
console.log(buf);             // <Buffer 48 65 6c 6c 6f>
console.log(buf.toString());  // Hello
```

---

## ✏️ Writing and Reading from Buffer

```js
const buf = Buffer.alloc(5);
buf.write('Hi');
console.log(buf.toString()); // Hi
```

---

## 📐 Buffer Length

```js
const buf = Buffer.from('Hello');
console.log(buf.length); // 5 (bytes)
```

---

## 🧮 Access Bytes

```js
const buf = Buffer.from('ABC');
console.log(buf[0]); // 65 (A in ASCII)
```

---

## 🛠 Common Methods

| Method       | Description            |
| ------------ | ---------------------- |
| `toString()` | Converts to string     |
| `write()`    | Writes to buffer       |
| `slice()`    | Returns part of buffer |
| `length`     | Buffer size in bytes   |
| `copy()`     | Copies buffer          |
| `compare()`  | Compares two buffers   |

---

## 🧪 Example: Copy file using Buffer

```js
const fs = require('fs');

const input = fs.readFileSync('input.txt');
fs.writeFileSync('copy.txt', input);

console.log('Copied using Buffer!');
```

---

## 🚀 Summary

* **Buffer** = raw memory
* Used in **file handling, streams, sockets**
* More powerful than `ArrayBuffer` for Node.js tasks

---

Want me to explain how Buffers work with Streams, or how to decode binary data?
