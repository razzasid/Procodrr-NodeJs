# Command Execution in `Windows`: Priority Order & Examples


In **Windows**, especially using **Command Prompt (cmd.exe)** or **PowerShell**, command execution follows a **specific order** to decide *what* to run when you type a command. Here’s a detailed explanation:

---

## 🧠 Command Resolution Order in Windows (CMD & PowerShell)

When you run a command like `node` or `mytool`, Windows follows this **priority** order:

### ✅ 1. **Aliases (PowerShell only)**

PowerShell supports **aliases**, like:

```powershell
Get-Alias
```

Example:

```powershell
Set-Alias hi "Write-Host 'Hello World'"
hi   # Runs: Write-Host 'Hello World'
```

But CMD **does not support aliases**.

---

### ✅ 2. **Functions (PowerShell only)**

You can define functions in PowerShell:

```powershell
function greet { Write-Host "Hi there!" }
greet
```

Again, CMD doesn't support functions.

---

### ✅ 3. **Built-in Commands**

These are commands built into CMD or PowerShell, like:

* `cd`, `dir`, `echo`, `set`, `exit`, `cls`

To check in PowerShell:

```powershell
Get-Command cd
# Output shows if it's a BuiltInCommand
```

---

### ✅ 4. **Environment Variables**

You can create environment variable shortcuts to commands:

```cmd
set MYTOOL="C:\myfolder\mytool.exe"
%MYTOOL%
```

In PowerShell:

```powershell
$env:MYTOOL="C:\myfolder\mytool.exe"
& $env:MYTOOL
```

---

### ✅ 5. **Hash Table (Command Cache in PowerShell)**

PowerShell caches executable paths using a command cache. When you first run `node`, it searches the directories and caches the full path for faster use later.

You can clear cache using:

```powershell
Clear-CommandCache
```

---

### ✅ 6. **PATH Search (Executables & Scripts)**

Windows searches directories listed in the `PATH` environment variable, in **left-to-right** order.

To view:

```cmd
echo %PATH%
```

Example search order:

1. `C:\Windows\System32`
2. `C:\Program Files\nodejs`
3. `C:\MyScripts`

If your script or `.exe` isn’t in `PATH`, you must run it using full path:

```cmd
C:\Users\hameed\myscript.bat
```

Or go to that folder and run:

```cmd
.\myscript.bat
```

---

### ✅ 7. **File Extensions Order**

Windows uses the `PATHEXT` variable to decide **which extensions to try** if no extension is given.

```cmd
echo %PATHEXT%
# .COM;.EXE;.BAT;.CMD;.VBS;.JS;.WS;.MSC
```

So if you type:

```cmd
hello
```

Windows tries:

* `hello.com`
* `hello.exe`
* `hello.bat`
* `hello.cmd` (in this order)

---

## 🔁 Full Example

Let's say you run:

```powershell
node
```

PowerShell resolves this in order:

1. Is `node` an alias? ❌
2. Is `node` a function? ❌
3. Is `node` a built-in command? ❌
4. Is `node` in the command cache? ✅ (yes, after first run)
5. If not, look through `PATH` and try extensions `.exe`, `.cmd`, etc.

---

## 📝 Summary Table

| Priority | CMD | PowerShell | Notes                                    |
| -------- | --- | ---------- | ---------------------------------------- |
| 1️⃣      | ❌   | Aliases    | `Set-Alias` in PowerShell                |
| 2️⃣      | ❌   | Functions  | `function myFunc {}`                     |
| 3️⃣      | ✅   | ✅          | Built-in commands like `cd`, `dir`       |
| 4️⃣      | ✅   | ✅          | Env variables like `%MYTOOL%`            |
| 5️⃣      | ❌   | ✅          | Hash Table (command cache)               |
| 6️⃣      | ✅   | ✅          | Executables in `PATH` + extension search |
| 7️⃣      | ✅   | ✅          | `PATHEXT` decides file types tried       |

---

### ✅ 8. External Scripts & Programs

#### ✅ Is it same for Windows?

**Partially!**

In **Linux/macOS (and Git Bash/WSL)**:

```bash
./script.sh
```

means: run the script in the **current directory**, because current dir (`.`) is **not in `$PATH` by default**.

---

### ❌ But in **Windows CMD/PowerShell**:

You **don’t need `./`** for files in the current directory. Windows **automatically searches** the current folder *first* even if it's not in `PATH`.

Example (in CMD or PowerShell):

```powershell
script.bat   # will work, if script.bat is in current folder
```

---

### 🔁 Summary

| Feature                         | Linux/Git Bash | Windows CMD/PowerShell         |
| ------------------------------- | -------------- | ------------------------------ |
| Run script in current dir       | `./script.sh`  | `script.bat` or `.\script.bat` |
| Current dir in PATH by default? | ❌              | ✅ (searched first)             |

Let me know if you want to try examples!
