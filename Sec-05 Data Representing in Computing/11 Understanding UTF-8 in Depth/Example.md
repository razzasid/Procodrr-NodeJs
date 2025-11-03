Sure! Here's one UTF-8 example for each character size: 1-byte, 2-byte, 3-byte, and 4-byte — with **binary, reserved bits, data bits, Unicode**, and **hex**:

---

### ✅ 1-Byte Character: **`A`**

* **Char:** `A`
* **Unicode:** `U+0041`
* **UTF-8 Binary:** `01000001`
* **Reserved Bits:** `0` (1st bit)
* **Data Bits:** `1000001` (7 bits)
* **Hex:** `41`

---

### ✅ 2-Byte Character: **`©`**

* **Char:** `©`
* **Unicode:** `U+00A9`
* **UTF-8 Binary:** `11000010 10101001`
* **Reserved Bits:**

  * Byte 1: `110`
  * Byte 2: `10`
* **Data Bits:**

  * Byte 1: `00010`
  * Byte 2: `101001`
    → Combined: `00010101001` (11 bits)
* **Hex:** `C2 A9`

---

### ✅ 3-Byte Character: **`ह` (Hindi 'ha')**

* **Char:** `ह`
* **Unicode:** `U+0939`
* **UTF-8 Binary:** `11100000 10100100 10111001`
* **Reserved Bits:**

  * Byte 1: `1110`
  * Bytes 2 & 3: `10`
* **Data Bits:**

  * Byte 1: `0000`
  * Byte 2: `100100`
  * Byte 3: `111001`
    → Combined: `0000100100111001` (16 bits)
* **Hex:** `E0 A4 B9`

---

### ✅ 4-Byte Character: **`😊`**

* **Char:** 😊
* **Unicode:** `U+1F60A`
* **UTF-8 Binary:** `11110000 10011111 10011000 10001010`
* **Reserved Bits:**

  * Byte 1: `11110`
  * Bytes 2–4: `10`
* **Data Bits:**

  * Byte 1: `000`
  * Byte 2: `011111`
  * Byte 3: `001000`
  * Byte 4: `001010`
    → Combined: `000011111001000001010` (21 bits)
* **Hex:** `F0 9F 98 8A`

---

Want to decode one yourself next? 😊
