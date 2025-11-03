### **Character Sets: ASCII vs. Unicode**

A **character set** is a defined list of characters (letters, numbers, symbols) mapped to numerical values (**code points**) so computers can represent text.

---

## **1. ASCII (American Standard Code for Information Interchange)**
- **Developed in 1963**, ASCII is a **7-bit** character encoding standard.
- **Total characters: 128** (0–127).
- Covers **English letters (A-Z, a-z), digits (0-9), punctuation, and control codes** (e.g., `\n`, `\t`).

### **ASCII Table (Partial)**
| Dec | Hex | Char | Description         |
|-----|-----|------|---------------------|
| 65  | 0x41 | A    | Uppercase 'A'       |
| 97  | 0x61 | a    | Lowercase 'a'       |
| 48  | 0x30 | 0    | Digit '0'           |
| 33  | 0x21 | !    | Exclamation mark    |
| 10  | 0x0A | \n   | Newline (LF)        |

### **Limitations of ASCII**
- **No support for non-English characters** (e.g., é, 你, ☺).
- **Extended ASCII (8-bit, 256 chars)** was introduced but still limited (e.g., ISO-8859-1 for European languages).

---

## **2. Unicode (Universal Character Encoding)**
- **Developed to replace ASCII**, supports **all languages & symbols**.
- **Current version: Unicode 15.1 (2023)** with **149,813 characters**.
- Uses **variable-length encoding** (UTF-8, UTF-16, UTF-32).

<details>

<summary>What is variable-length encoding</summary>

**Variable-length encoding** means:
👉 Different characters take **different numbers of bytes** based on their value.

---

### 🧠 In simple terms:

* Some characters = **1 byte**
* Others (like emojis or rare scripts) = **2, 3, or 4 bytes**

---

### ✅ Example in UTF-8:

| Character | Unicode | UTF-8 Bytes   | Byte Count |
| --------- | ------- | ------------- | ---------- |
| `A`       | U+0041  | `41`          | 1 byte     |
| `€`       | U+20AC  | `E2 82 AC`    | 3 bytes    |
| `😊`      | U+1F60A | `F0 9F 98 8A` | 4 bytes    |

---

### 📦 Why use it?

* **Saves space**: Common characters (like English letters) stay small.
* Still supports all Unicode characters.

---

### ⚠️ Trade-off:

* Reading by byte is tricky—you can’t tell how many bytes represent a character without checking the pattern.

---

Here’s a simple **Node.js demo** to check how many bytes each character takes in **UTF-8 variable-length encoding**:

---

### 📄 `utf8-byte-checker.js`

```js
const str = "A € 😊"; // Contains a 1-byte, 3-byte, and 4-byte character

for (const char of str) {
  const utf8Bytes = Buffer.from(char, 'utf8');
  console.log(`Character: "${char}" | Bytes: [${utf8Bytes.join(', ')}] | Length: ${utf8Bytes.length}`);
}
```

---

### ▶️ Output:

```
Character: "A" | Bytes: [65] | Length: 1
Character: " " | Bytes: [32] | Length: 1
Character: "€" | Bytes: [226, 130, 172] | Length: 3
Character: "😊" | Bytes: [240, 159, 152, 138] | Length: 4
```

---

### ✅ What this shows:

* **"A"** → 1 byte
* **"€"** → 3 bytes
* **"😊"** → 4 bytes


</details>


### **Unicode Encoding Schemes**
| Encoding | Bits per Char | Usage                     | Example (Char: 'A') |
|----------|--------------|---------------------------|---------------------|
| **UTF-8**  | 1–4 bytes     | Web, Linux, most systems  | `0x41` (1 byte)     |
| **UTF-16** | 2–4 bytes     | Java, Windows, legacy APIs | `0x0041` (2 bytes)  |
| **UTF-32** | 4 bytes       | Rare (fixed-width)         | `0x00000041`        |

### **Unicode Examples**
| Char | Unicode Name         | Code Point (Hex) | UTF-8 Bytes |
|------|----------------------|------------------|-------------|
| A    | Latin Capital 'A'    | U+0041           | `41`        |
| é    | Latin 'é' (acute)    | U+00E9           | `C3 A9`     |
| 你   | Chinese 'You'        | U+4F60           | `E4 BD A0`  |
| 😊   | Smiling Face         | U+1F60A          | `F0 9F 98 8A` |

### **Key Features of Unicode**
1. **Backward compatible with ASCII** (UTF-8 matches ASCII for 0–127).
2. **Supports emojis, ancient scripts, mathematical symbols** (e.g., `π`, `∀`).
3. **Used everywhere** (HTML, Python, Java, databases).

---

## **Comparison: ASCII vs. Unicode**
| Feature         | ASCII               | Unicode                     |
|----------------|---------------------|-----------------------------|
| **Bits**       | 7-bit (128 chars)   | 8–32 bit (149K+ chars)      |
| **Languages**  | English only        | All (Latin, Chinese, Arabic, etc.) |
| **Emojis**     | ❌ No               | ✅ Yes (e.g., 😊, 🚀)        |
| **Usage**      | Legacy systems      | Modern web, OS, programming |

---

### **Why Unicode Dominates?**
- **ASCII fails for multilingual text** (e.g., "こんにちは" or "नमस्ते").
- **UTF-8 is the web standard** (~98% of websites use it).
- **Future-proof** (new emojis & scripts added yearly).

---

### **Example in Programming**
```python
# ASCII (1 byte per char)
print(ord('A'))  # Output: 65

# Unicode (UTF-8, multi-byte)
print(ord('你'))  # Output: 20320 (U+4F60)
print('😊'.encode('utf-8'))  # Output: b'\xF0\x9F\x98\x8A'
```

Would you like a deeper dive into UTF-8 encoding or how emojis work in Unicode?