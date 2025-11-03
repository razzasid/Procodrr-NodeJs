# Difference between `Buffer.alloc()` and `Buffer.allocUnsafe()`

## 🧠 Core Difference

| Feature        | `Buffer.alloc(size)`      | `Buffer.allocUnsafe(size)`       |
| -------------- | ------------------------- | -------------------------------- |
| Initialization | Fills buffer with `0`     | **Does NOT initialize** (faster) |
| Security       | Safe, clean memory        | Unsafe – may contain old data    |
| Performance    | Slower (due to zero fill) | Faster (no initialization)       |

---

## ✅ `Buffer.alloc(size)`

* Creates a buffer of given size
* Fills it with **zeroes** (safe and clean)

```js
const buf = Buffer.alloc(4);
console.log(buf); // <Buffer 00 00 00 00>
```

Use it when:

* You care about security
* You want clean memory (like user input)

---

## ⚠️ `Buffer.allocUnsafe(size)`

* Creates buffer without cleaning
* May contain **random garbage values** (old memory)

```js
const unsafeBuf = Buffer.allocUnsafe(4);
console.log(unsafeBuf); // Might be <Buffer 9f a1 03 4b> (random)
```

Use it when:

* You will **immediately overwrite** the buffer
* Performance matters, and you know what you're doing

---

## 🔐 Why is `allocUnsafe` called *unsafe*?

Because it can leak **sensitive memory data** if not handled properly:

Example:

```js
const buf = Buffer.allocUnsafe(10);
console.log(buf.toString()); // May show leftover memory data
```

---

## 🧪 Safe usage of `allocUnsafe`

```js
const buf = Buffer.allocUnsafe(5);
buf.fill(0); // Now safe
console.log(buf); // <Buffer 00 00 00 00 00>
```

But in that case, just use `Buffer.alloc(5)` instead 😄

---

## 🔁 Summary

* 🔐 `Buffer.alloc()` → **Safe, slower**
* ⚡ `Buffer.allocUnsafe()` → **Fast, but risky**
* ✅ Use `alloc` for general cases, `allocUnsafe` for advanced, high-performance needs

