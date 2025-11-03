## 📚 **Buffer Methods and Properties in Node.js**

---

### 🔹 **Common Buffer Methods**

| Method                                                                 | Description                                              |
| ---------------------------------------------------------------------- | -------------------------------------------------------- |
| `Buffer.from(content, [encoding])`                                     | Creates a buffer from a string, array, or another buffer |
| `buffer.toString([encoding])`                                          | Converts buffer content to string                        |
| `buffer.write(content, [encoding])`                                    | Writes data into buffer                                  |
| `buffer.toJSON()`                                                      | Returns buffer data as a JSON object (binary values)     |
| `buffer.slice(start, end)`                                             | Creates a shallow copy of a portion of the buffer        |
| `buffer.subarray(start, end)`                                          | Like `slice()`, but returns a view over the same memory  |
| `buffer.copy(targetBuffer, [targetStart], [sourceStart], [sourceEnd])` | Copies data to another buffer                            |
| `buffer.includes(content, [start], [encoding])`                        | Checks if buffer contains specific content               |
| `buffer.readInt8([offset])`                                            | Reads signed 8-bit integer                               |
| `buffer.readInt16LE([offset])`                                         | Reads signed 16-bit integer in Little Endian             |
| `buffer.readInt16BE([offset])`                                         | Reads signed 16-bit integer in Big Endian                |

> 📝 Similar `write` methods are available like `writeInt8()`, `writeInt16LE()`, etc.

---

### 🔸 **Important Properties**

| Property            | Description                                          |
| ------------------- | ---------------------------------------------------- |
| `buffer.buffer`     | Returns the underlying `ArrayBuffer`                 |
| `buffer.byteLength` | Size of the buffer in bytes                          |
| `buffer.byteOffset` | Offset inside the underlying `ArrayBuffer`           |
| `buffer.length`     | Same as `byteLength` – number of bytes in the buffer |

---
