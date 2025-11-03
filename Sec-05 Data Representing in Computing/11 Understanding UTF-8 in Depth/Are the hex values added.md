Great question! Let's break it down:

### ✅ `अ` (Hindi character)

* Unicode: `U+0905`
* UTF-8 Hex: `e0 a4 85`

---

### ❓ Are the hex values added?

**No**, they are **not added**.
Instead, they are the **UTF-8 encoded representation** of the Unicode code point `U+0905`.

---

### 🔍 How it works (step by step):

#### 1. Unicode value of `अ` = `0905` (hex) = `0000100100000101` (binary, 16 bits)

#### 2. Since it needs 16 bits → it’s a **3-byte UTF-8** character

**UTF-8 format for 3 bytes:**

```
1110xxxx 10xxxxxx 10xxxxxx
```

Now we split the 16-bit binary into 3 parts:

```
0000 1001 0000 0101
→ Split as: xxxx, xxxxxx, xxxxxx
→ UTF-8 data bits: 
   Byte 1: 0000
   Byte 2: 100100
   Byte 3: 000101
```

Now insert into UTF-8 structure:

* Byte 1: `11100000` → `E0`
* Byte 2: `10100100` → `A4`
* Byte 3: `10000101` → `85`

---

### ✅ Final UTF-8 encoding of `अ`:

```
E0 A4 85
```

So:

* **Not added**
* **Each byte encodes part of the binary** of Unicode code point

Let me know if you want to reverse it from hex to character next!
