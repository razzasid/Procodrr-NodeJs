## **Q1:** Explain everything about this in detail how it's working:

Unicode: `U+1F60A = 0001 1111 0110 0000 1010`

UTF-8: `F0 9F 98 8A`

Binary: `11110000 10011111 10011000 10001010 `

---

# Solution:

Great question! Let’s **break down** how `Unicode`, `UTF-8`, and `Binary` work using your example:

---

## 🧡 Emoji: 😊

* Unicode code point: `U+1F60A`

---

## 🔸 Step 1: What is **Unicode**?

* Unicode assigns a **unique number (code point)** to every character in every language.
* Your emoji 😊 has a Unicode code point of:
  `U+1F60A` → In binary: `0001 1111 0110 0000 1010` (21 bits)

---

## 🔸 Step 2: Convert Unicode to UTF-8

**UTF-8** is a way to store Unicode characters as bytes (8-bit chunks).
It uses **1 to 4 bytes** depending on the character.

For `U+1F60A` (which is > `U+0800`), UTF-8 uses **4 bytes**.

### 📚 UTF-8 format for 4 bytes:

```
11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
```

We now insert the **21 bits** of the Unicode code point into those `x` positions.

---

## 🔍 Step 3: Fill the UTF-8 pattern

Unicode binary:
`0001 1111 0110 0000 1010` → Remove leading zeros → `11111011000001010`

Now split into 6-bit groups from the **right**:

```
000001 111101 100000 1010  → pad to 21 bits: 00011111011000001010
```

Now insert into UTF-8 byte pattern:

```
11110xxx → 11110000  
10xxxxxx → 10011111  
10xxxxxx → 10011000  
10xxxxxx → 10001010
```

So the UTF-8 bytes are:

```
F0 9F 98 8A
```

---

## 🔸 Step 4: Binary Representation

Each UTF-8 byte:

* `F0` = `11110000`
* `9F` = `10011111`
* `98` = `10011000`
* `8A` = `10001010`

So full binary:

```
11110000 10011111 10011000 10001010
```

---

## ✅ Summary

| Step            | Value                                 |
| --------------- | ------------------------------------- |
| Unicode         | `U+1F60A`                             |
| Binary (21-bit) | `00011111011000001010`                |
| UTF-8 Bytes     | `F0 9F 98 8A`                         |
| Binary UTF-8    | `11110000 10011111 10011000 10001010` |

---

## 🧠 Why is UTF-8 popular?

* Backward compatible with ASCII
* Saves space for common characters
* Works with all Unicode characters

