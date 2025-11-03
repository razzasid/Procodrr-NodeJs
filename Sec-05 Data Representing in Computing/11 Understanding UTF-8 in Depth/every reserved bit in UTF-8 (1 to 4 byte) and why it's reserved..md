Great! Let's break down **every reserved bit** in **UTF-8 (1 to 4 byte)** and **why** it's reserved.

---

### ✅ 1-Byte Character (ASCII)

**Format:**

```
0xxxxxxx
```

**Bit-by-bit:**

| Bit | Value | Purpose                                           |
| --- | ----- | ------------------------------------------------- |
| 1   | 0     | Reserved to **identify 1-byte** (ASCII) character |
| 2–8 | x     | Stores actual character data                      |

📌 **Why reserved:** The `0` at the start marks it clearly as a single-byte UTF-8 character. No confusion.

---

### ✅ 2-Byte Character

**Format:**

```
110xxxxx 10xxxxxx
```

**Bit-by-bit:**

**Byte 1:**

| Bit | Value | Purpose                             |
| --- | ----- | ----------------------------------- |
| 1-3 | 110   | Reserved to **signal 2-byte** UTF-8 |
| 4-8 | xxxxx | 5 bits of actual data               |

**Byte 2:**

| Bit | Value  | Purpose                           |
| --- | ------ | --------------------------------- |
| 1-2 | 10     | Reserved to **mark continuation** |
| 3-8 | xxxxxx | 6 bits of data                    |

📌 **Why reserved:**

* `110` identifies the start of a 2-byte character.
* `10` in 2nd byte ensures it's **not mistaken for a start byte**.

---

### ✅ 3-Byte Character

**Format:**

```
1110xxxx 10xxxxxx 10xxxxxx
```

**Bit-by-bit:**

**Byte 1:**

| Bit | Value | Purpose                             |
| --- | ----- | ----------------------------------- |
| 1-4 | 1110  | Reserved to **signal 3-byte start** |
| 5-8 | xxxx  | 4 bits of data                      |

**Byte 2 & 3:**

| Bit | Value  | Purpose                           |
| --- | ------ | --------------------------------- |
| 1-2 | 10     | Reserved to **mark continuation** |
| 3-8 | xxxxxx | 6 bits of data each               |

📌 **Why reserved:**

* `1110` helps parser recognize **start of 3-byte**
* `10` makes sure next bytes are treated as **continuation only**

---

### ✅ 4-Byte Character

**Format:**

```
11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
```

**Bit-by-bit:**

**Byte 1:**

| Bit | Value | Purpose                             |
| --- | ----- | ----------------------------------- |
| 1-5 | 11110 | Reserved to **signal 4-byte start** |
| 6-8 | xxx   | 3 bits of data                      |

**Byte 2–4:**

| Bit | Value  | Purpose                           |
| --- | ------ | --------------------------------- |
| 1-2 | 10     | Reserved to **mark continuation** |
| 3-8 | xxxxxx | 6 bits of data each               |

📌 **Why reserved:**

* `11110` flags **start of 4-byte**
* `10` in other bytes keeps structure **clear and unambiguous**

---

### 🔍 Summary

| Byte Count | Start Byte Reserved Bits | Continuation Byte Reserved Bits | Why Reserved                             |
| ---------- | ------------------------ | ------------------------------- | ---------------------------------------- |
| 1          | 1 bit (`0`)              | –                               | Identify ASCII character (U+0000–U+007F) |
| 2          | 3 bits (`110`)           | 2 bits (`10`)                   | Start of 2-byte; continuation marker     |
| 3          | 4 bits (`1110`)          | 2 bits (`10`)                   | Start of 3-byte; continuation marker     |
| 4          | 5 bits (`11110`)         | 2 bits (`10`)                   | Start of 4-byte; continuation marker     |

Let me know if you want me to draw a visual or decode other examples!
