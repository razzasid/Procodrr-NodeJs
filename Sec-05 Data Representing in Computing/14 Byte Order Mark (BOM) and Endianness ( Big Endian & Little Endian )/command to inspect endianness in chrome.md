### Command to inspect and visualize endianness ( Big Endian and Little Endian) in chrome:

```bash
node --inspect-brk app.js
```

**`app.js file:`**
```js
import fs from "fs/promises"
const contentBuffer = await fs.readFile("text.txt");
console.log(contentBuffer.toString("utf16le"))
```