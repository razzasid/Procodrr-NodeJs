To see how data is converted and stored we can use some bash commands and extension.

## COMMANDS:
```bash
xxd <fileName> #  Give the content UNICODE value
```
```bash
xxd -b <fileName> #  Give the content in binary form 
```
```bash
xxd -g 1 <fileName> #  Group the UNICODE based on 1 byte, by default it groups with 2 byte.
```
## HEX EDITOR EXTENSION
- open a file using `Hex Editor` to properly visualize the binary and hexadecimal representation of a file contents.

## Encoding generally happens on occasions:

1. when we save a file.
2. when we open a file.

- UTF-8 uses variable byte system till 007F in Unicode (127 in ASCII)

- It uses 7 bits only to store a character.


### ✅ UTF-8 Byte Structure/Rules:

| Bytes | Bits used for data | Prefix pattern                        | Unicode Range       |
| ----- | ------------------ | ------------------------------------- | ------------------- |
| 1     | 7 bits             | `0xxxxxxx`                            | U+0000 to U+007F    |
| 2     | 11 bits            | `110xxxxx 10xxxxxx`                   | U+0080 to U+07FF    |
| 3     | 16 bits            | `1110xxxx 10xxxxxx 10xxxxxx`          | U+0800 to U+FFFF    |
| 4     | 21 bits            | `11110xxx 10xxxxxx 10xxxxxx 10xxxxxx` | U+10000 to U+10FFFF |

### Example:

* Character `ह` (Devanagari) = U+0939 → UTF-8: `E0 A4 B9` → uses **3 bytes**
* Character `😊` = U+1F60A → UTF-8: `F0 9F 98 8A` → uses **4 bytes**

Each extra byte after the first starts with `10` and carries 6 bits of data.



