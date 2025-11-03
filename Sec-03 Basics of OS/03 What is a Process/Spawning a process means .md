**Spawning a process** means creating a **new child process** from the current (parent) process to run another program or command.

---

### 🔧 Example 1: Linux

When you run:

```bash
ls
```

The shell **spawns a process** to run the `ls` binary.

---

### 🔧 Example 2: Node.js

```js
const { spawn } = require('child_process');
const ls = spawn('ls', ['-l']);
```

This creates a new process to run `ls -l`.

---

### 🔁 Summary

* **Parent process** (like terminal, shell, or a script)
* **Spawns** → **Child process** (to run a command/program)
* Useful in multitasking or running external tools
