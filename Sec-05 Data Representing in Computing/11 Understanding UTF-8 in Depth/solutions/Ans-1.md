Yes! Each **hex digit** always represents **4 binary bits (a nibble)**. Hex is **base-16**, and binary is **base-2**.

---

### 🔢 Hex to Binary Conversion:

| Hex | Binary | Reason                        |
| --- | ------ | ----------------------------- |
| 0   | 0000   | lowest 4-bit binary           |
| 1   | 0001   |                               |
| 2   | 0010   |                               |
| 3   | 0011   |                               |
| 4   | 0100   |                               |
| 5   | 0101   |                               |
| 6   | 0110   |                               |
| 7   | 0111   |                               |
| 8   | 1000   |                               |
| 9   | 1001   |                               |
| A   | 1010   | 10 in decimal                 |
| B   | 1011   | 11 in decimal                 |
| C   | 1100   | 12 in decimal                 |
| D   | 1101   | 13 in decimal                 |
| E   | 1110   | 14 in decimal                 |
| F   | 1111   | highest 4-bit binary (15 dec) |

---

- file text.txt contain an emoji 😊 which comes in the category of `4 byte` character in unicode system.
#### Example: 
```bash
$ xxd -g 1 text.txt
```
**Output:** 00000000: f0 9f 98 8a
- here `f0` are two hex digits and they both are representing 1 byte of memory 4 binary bits occupied by each one of them `f` and `0`
- the same way the remaining three pairs: `9f` `98` `8a` are also representing 1 byte by each pair. so the total `byte` becomes `4 byte`.

So yes, **every hex digit = exactly 4 binary bits**, always! Let me know if you want to reverse it (binary to hex).
