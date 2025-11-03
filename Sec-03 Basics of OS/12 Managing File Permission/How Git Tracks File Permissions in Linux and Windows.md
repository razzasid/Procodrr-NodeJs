# **How Git Tracks File Permissions in Linux and Windows**

Git tracks file content, not just filenames, but it also records **file permissions (modes)** in its index. However, Git’s handling of permissions differs between **Linux/macOS** and **Windows** due to OS-level differences.

---

## **1. How Git Tracks Permissions**
Git stores **three types of file modes** in its index:
1. **`100644`** → Regular file (read/write for owner, read-only for others).  
   - Default for non-executable files.
2. **`100755`** → Executable file (read/write/execute for owner, read/execute for others).  
   - Used for scripts (`*.sh`, `*.py` with `+x`).
3. **`120000`** → Symbolic link (rarely used in Windows).

### **Checking File Permissions in Git**
```bash
git ls-files --stage
```
**Example Output:**
```
100644 e69de29... 0 file.txt
100755 7c9a6e2... 0 script.sh
```
- The first column (`100644`, `100755`) indicates the file mode.

---

## **2. Linux vs. Windows Behavior**
### **Linux/macOS (Preserves Permissions)**
- Git **respects and tracks** `chmod` changes.
- If you modify permissions (`chmod +x script.sh`), Git detects it:
  ```bash
  git diff
  ```
  **Output:**
  ```
  old mode 100644
  new mode 100755
  ```
- Committing this change **preserves** the executable bit.

### **Windows (Ignores Executable Bit by Default)**
- Windows **does not use** Unix-style permissions (`chmod` is not native).
- Git for Windows **defaults all files to `100644`** (non-executable).
- **Exception:** If a file has a **shebang (`#!/bin/bash`)**, Git may auto-set `100755`.

---

## **3. Forcing Git to Track Executable Permissions**
### **Method 1: Explicitly Mark as Executable**
```bash
git update-index --chmod=+x script.sh  # Linux/macOS/Windows (Git Bash)
```
- This forces Git to record `100755` even on Windows.

### **Method 2: Configuring Git to Honor Filemode**
```bash
git config core.filemode true  # Enable permission tracking (Linux/macOS)
git config core.filemode false # Disable (Windows default)
```
- **Windows users:** Typically set `core.filemode false` to avoid issues.

### **Method 3: Using `.gitattributes`**
Create/update `.gitattributes`:
```bash
*.sh text eol=lf
*.py text eol=lf
*.sh executable  # Force .sh files to be executable in Git
```
- This ensures `.sh` files are treated as executable across platforms.

---

## **4. Common Issues & Fixes**
### **Problem:** Permissions change unnecessarily in Linux
- **Cause:** Git detects `100644` ↔ `100755` changes due to `core.filemode true`.
- **Fix:** Set `git config core.filemode false` (if permissions aren’t critical).

### **Problem:** Scripts lose `+x` on Windows
- **Cause:** Windows doesn’t support `chmod`.
- **Fix:** Use:
  ```bash
  git update-index --chmod=+x script.sh
  ```

### **Problem:** Cloned repo has wrong permissions
- **Fix:** Manually run:
  ```bash
  chmod +x script.sh  # Linux/macOS
  ```

---

## **5. Summary Table**
| **Action**                     | **Linux/macOS** | **Windows** |
|--------------------------------|----------------|-------------|
| Git tracks `chmod +x`          | ✅ Yes         | ❌ No       |
| Default file mode              | `100644`       | `100644`    |
| Shebang auto-detection         | ✅ Yes         | ⚠️ Partial  |
| Force `100755` with `--chmod`  | ✅ Works       | ✅ Works    |
| `core.filemode` default        | `true`         | `false`     |

---

## **6. Best Practices**
1. **For cross-platform projects:**
   - Use `.gitattributes` to enforce permissions.
   - Avoid relying on `chmod` in Windows.
2. **For Linux/macOS:**
   - Set `core.filemode true` if permissions matter.
3. **For Windows:**
   - Use `git update-index --chmod=+x` for scripts.

---

## **Conclusion**
- **Linux/macOS:** Git tracks `100644` (non-executable) vs. `100755` (executable).
- **Windows:** Ignores `chmod` by default but supports manual `--chmod`.
- **Solution:** Use `git update-index --chmod=+x` or `.gitattributes` for consistency.

Would you like a deeper dive into any specific scenario? 🚀