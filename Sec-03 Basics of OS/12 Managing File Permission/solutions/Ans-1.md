In **bash**, `echo "\n Hameed Khan"` **doesn't interpret `\n` as a newline** by default.

---

### ✅ Fix:

Use the `-e` flag with `echo` to enable **escape sequences** like `\n`:

```bash
echo -e "\nHameed Khan" >> abc
```
**Note:** The previous line must contains at least 3 characters otherwise the new word or sentence will start from a new line rather it will come on same line.
---

### 💡 VS Code shows `\n` literally because without `-e`, Bash treats it as plain text.
