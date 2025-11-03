### 🔸 What is Base64?

* Base64 is a **character encoding** that converts **binary data to text**.
* It is commonly used to transmit binary data (like images) in text-based formats (e.g., JSON, HTML).

---

### 🔠 Base64 Character Set

* Total **64 characters**:
  `A-Z`, `a-z`, `0-9`, `+`, `/`
* Uses only **6 bits per character**
* It's a **subset of ASCII**

---

### 🌐 Browser Methods

| Method   | Purpose                 |
| -------- | ----------------------- |
| `btoa()` | Binary → ASCII (Base64) |
| `atob()` | ASCII (Base64) → Binary |

> ⚠️ These work only with **strings**, not actual binary buffers.

---

### ⚙️ How it Works

* Converts a string → UTF-8 binary → Base64
* To decode: Base64 → binary → string

---

### 📏 Padding Behavior

* Base64 needs data in **3-byte chunks**
* If not enough bytes, it **pads with zeros**
* These extra zero-bytes are **replaced with `=`** at the end


