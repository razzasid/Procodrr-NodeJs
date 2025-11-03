# Command Execution in `Linux`: Priority Order & Examples

In **Linux (bash shell)**, when you run a command like `ls`, the shell looks for what to execute in a specific **priority order**. Let’s go step-by-step and explain with examples.

---

## 🧠 Command Resolution Order in Linux (bash)

When you type a command, bash resolves it in the following order:

| Priority | Type            | Description                                         |
| -------- | --------------- | --------------------------------------------------- |
| 1️⃣      | **Aliases**     | Custom shortcuts for commands (`alias ll='ls -la'`) |
| 2️⃣      | **Functions**   | User-defined shell functions                        |
| 3️⃣      | **Built-ins**   | Commands built into bash (`cd`, `echo`, etc.)       |
| 4️⃣      | **Hash Table**  | Cached paths of previously executed commands        |
| 5️⃣      | **Executables** | Searches for executables in `$PATH` directories     |

---

### ✅ 1. Alias – Highest Priority

**Alias** is a shortcut for a longer command.

```bash
alias ll='ls -la'
```

Now if you type `ll`, bash will run `ls -la`. Even if there's a function named `ll`, alias runs first.

```bash
type ll
# ll is aliased to `ls -la`
```

---

### ✅ 2. Function – Second Priority

If alias doesn't match, bash looks for a function.

```bash
hello() {
  echo "Hello from function"
}
hello
```

```bash
type hello
# hello is a function
```

---

### ✅ 3. Built-in Commands

If no alias or function, bash checks for **built-ins**.

Example:

```bash
type cd
# cd is a shell builtin
```

Some built-ins: `cd`, `echo`, `exit`, `read`, `pwd`, etc.

---

### ✅ 4. Hash Table (Command Cache)

When you run a command, bash caches its path to speed up future executions.

Example:

```bash
which node
# /usr/bin/node

hash
# Shows cached commands
```

Use `hash -r` to clear the cache.

---

### ✅ 5. Executables in `$PATH`

If nothing matches above, bash searches `$PATH` directories for an executable file.

```bash
echo $PATH
# /usr/local/sbin:/usr/local/bin:/usr/bin:/bin

which node
# /usr/bin/node

type node
# node is /usr/bin/node
```

---

## 🧪 Full Example

```bash
alias greet='echo "Hi from alias!"'

greet() {
  echo "Hi from function!"
}

greet
```

### Output:

```bash
Hi from alias!
```

Because alias takes priority over function.

---

## 🔧 How to Check What Will Run

Use:

```bash
type <command>
```

It tells you whether it's an alias, function, builtin, or file.

Example:

```bash
type ls
type cd
type hello
```

---

## ✅ Summary Table

| Priority | What bash checks for   |
| -------- | ---------------------- |
| 1️⃣      | Aliases                |
| 2️⃣      | Functions              |
| 3️⃣      | Built-in commands      |
| 4️⃣      | Hash table (cached)    |
| 5️⃣      | Executables in `$PATH` |


Great point! That falls under the **"Executables"** section in command resolution.

---
### ✅ 6. External Scripts & Programs

If a script or program **is not in `$PATH`**, you **must specify the path explicitly**, like:

```bash
./script.sh   # current directory
../script.sh  # parent directory
/path/to/script.sh  # full/relative path
```

---

### 🔍 Why?

Linux **does NOT search the current directory (`./`)** by default for security reasons.

So if you have:

```bash
# script.sh in current directory
echo "Hello from script"
```

To run it:

```bash
./script.sh     ✅ Works
script.sh       ❌ Command not found (if not in $PATH)
```

---

### ✅ Fixing with PATH

If you want to run `script.sh` without `./`, add its folder to `$PATH`:

```bash
export PATH=$PATH:/home/user/my-scripts
```

Now `script.sh` will run like any global command.
