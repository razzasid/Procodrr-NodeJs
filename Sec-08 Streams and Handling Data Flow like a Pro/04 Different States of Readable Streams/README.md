
## 📚 Readable Stream States in Node.js

---

### 🔹 **Different States of Readable Streams**

| State     | Description                 |
| --------- | --------------------------- |
| `Initial` | Stream is initialized       |
| `Flowing` | Data is actively being read |
| `Paused`  | Reading is paused           |
| `Ended`   | No more data to read        |

---

### 🔸 **Common Properties**

| Property          | Meaning                                          |
| ----------------- | ------------------------------------------------ |
| `readableFlowing` | `true`, `false`, or `null` based on stream state |
| `readableEnded`   | `true` if stream has ended                       |

---

### 🔧 **Common Methods**

| Method       | Description                |
| ------------ | -------------------------- |
| `pause()`    | Pauses the stream          |
| `resume()`   | Resumes the stream         |
| `isPaused()` | Checks if stream is paused |

---

### 🎯 **Events**

* `pause` – Emitted when stream is paused
* `resume` – Emitted when stream resumes
* `end` – Emitted when no more data is available

💡 **Note:**
>  When the `end` event fires, `readableEnded` becomes `true`, but `readableFlowing` may still remain `true`.
>  By default `resume` event is fired when `data` event is fired.

---
