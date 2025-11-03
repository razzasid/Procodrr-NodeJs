## 📚 What is a MIME Type?

**MIME type** (Multipurpose Internet Mail Extensions) tells the browser **what type of data** is being sent or received.

---

### 🧠 Think of it like a **label** for your file:

* `"text/html"` → This is an HTML file
* `"text/css"` → This is a CSS stylesheet
* `"text/javascript"` → This is a JavaScript file
* `"image/png"` → This is a PNG image

---

### 🧪 Example:

```html
<link rel="stylesheet" href="data:text/css;base64,...">
```

➡️ `text/css` tells the browser to treat it as CSS.

---

### ✅ Why it matters:

* Helps browsers and servers handle files correctly.
* Prevents security issues like executing CSS as JS.


---

## List of **common MIME types** grouped by file type:

---

### 📝 **Text & Code**

| File Type  | MIME Type                                     |
| ---------- | --------------------------------------------- |
| HTML       | `text/html`                                   |
| CSS        | `text/css`                                    |
| JavaScript | `text/javascript` or `application/javascript` |
| JSON       | `application/json`                            |
| XML        | `application/xml`                             |
| Plain Text | `text/plain`                                  |

---

### 🖼️ **Images**

| File Type     | MIME Type       |
| ------------- | --------------- |
| PNG           | `image/png`     |
| JPEG          | `image/jpeg`    |
| GIF           | `image/gif`     |
| SVG           | `image/svg+xml` |
| ICO (favicon) | `image/x-icon`  |
| WebP          | `image/webp`    |

---

### 🎵 **Audio**

| File Type | MIME Type    |
| --------- | ------------ |
| MP3       | `audio/mpeg` |
| WAV       | `audio/wav`  |
| OGG       | `audio/ogg`  |

---

### 🎬 **Video**

| File Type | MIME Type    |
| --------- | ------------ |
| MP4       | `video/mp4`  |
| WebM      | `video/webm` |
| OGG       | `video/ogg`  |

---

### 📁 **Other**

| File Type | MIME Type             |
| --------- | --------------------- |
| PDF       | `application/pdf`     |
| ZIP       | `application/zip`     |
| CSV       | `text/csv`            |
| Form Data | `multipart/form-data` |

