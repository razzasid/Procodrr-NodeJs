## **What is a Process? (Detailed Explanation with Examples & Diagram)**

A **process** is a **program in execution**. It is a fundamental concept in operating systems (OS) that represents a running instance of a software application. Each process has its own memory space, system resources, and execution state.

## Note: An `individual process` is always `executed` by a single `core` of the `processor` or `cpu`.

---

### **1. Definition & Key Characteristics of a Process**

- A process is an **active entity** (unlike a program, which is just static code stored on disk).
- It consists of:
  - **Executable code** (instructions).
  - **Data** (variables, files, etc.).
  - **Resources** (CPU, memory, I/O devices).
  - **Process Control Block (PCB)** (stores process state & metadata).

#### **Example:**

- When you open **Google Chrome**, the OS creates a **process** for it.
- If you open **two Chrome windows**, they may run as **two separate processes** (for stability).

---

### **2. Process vs. Program**

| **Feature**    | **Program**                                  | **Process**                                   |
| -------------- | -------------------------------------------- | --------------------------------------------- |
| **Definition** | Static set of instructions stored in a file. | Active instance of a program in execution.    |
| **Lifetime**   | Exists on disk until deleted.                | Exists only while running in memory.          |
| **Resources**  | No CPU/memory allocation.                    | Uses CPU, RAM, I/O devices.                   |
| **Example**    | `chrome.exe` (file on disk).                 | Running Chrome browser (consuming RAM & CPU). |

---

### 🔹 **Process State or Life Cycle Diagram:**

A process goes through different states during its execution:

```
        +-----------+
        |  New      |
        +-----------+
              |
              v
        +-----------+     Waits for CPU
        |  Ready    |<------------------+
        +-----------+                   |
              |                         |
              v                         |
        +-----------+        +------------------+
        | Running   |------->|   Waiting (I/O)  |
        +-----------+        +------------------+
              |
              v
        +-----------+
        | Terminated|
        +-----------+
```

---

1. **New** → Process is being created.
2. **Ready** → Process is loaded in RAM, waiting for CPU time.
3. **Running** → CPU is executing the process.
4. **Waiting** → Process is paused (e.g., waiting for I/O).
5. **Terminated** → Process finishes execution.

#### **Example:**

- When you launch **Microsoft Word**:
  - **New** → OS loads Word into memory.
  - **Ready** → Word waits for CPU time.
  - **Running** → CPU executes Word’s code.
  - **Waiting** → Word pauses if you open a large file.
  - **Terminated** → You close Word.

---

### **4. Process Control Block (PCB)**

The OS maintains a **PCB** for each process, storing critical information:

| **PCB Component**    | **Description**                                  |
| -------------------- | ------------------------------------------------ |
| **Process ID (PID)** | Unique identifier (e.g., `PID 1425`).            |
| **Process State**    | Running, Ready, Waiting, etc.                    |
| **Program Counter**  | Next instruction to execute.                     |
| **CPU Registers**    | Current register values (for context switching). |
| **Memory Limits**    | Address space (stack, heap, code).               |
| **I/O Status**       | List of open files/devices.                      |

#### **Example:**

- In **Windows Task Manager**, each process has a **PID**, CPU usage, and memory consumption (part of PCB).

---

### **5. Types of Processes**

| **Type**               | **Description**                         | **Examples**                             |
| ---------------------- | --------------------------------------- | ---------------------------------------- |
| **Foreground Process** | Interactive (user-controlled).          | Chrome, Word, Games.                     |
| **Background Process** | Runs without user input.                | Antivirus, Windows Update.               |
| **Parent Process**     | Creates child processes.                | `explorer.exe` (Windows shell).          |
| **Child Process**      | Spawned by a parent.                    | A tab in Chrome (child of `chrome.exe`). |
| **Daemon (Service)**   | Background system process (Linux/Unix). | `httpd` (web server).                    |

---

### **6. Real-World Examples of Processes**

1. **Web Browser (Chrome/Firefox)**

   - Each tab may run as a **separate process** (for security).
   - Uses multiple processes for rendering, plugins, and networking.

2. **Video Game (e.g., Fortnite)**

   - Main game process handles graphics.
   - Background processes for updates, anti-cheat.

3. **Operating System (Windows/Linux)**
   - `systemd` (Linux) / `svchost.exe` (Windows) manages services.
   - `explorer.exe` (Windows GUI shell).

---

### **7. How Processes Work in an OS?**

1. **Creation** → `fork()` (Linux) or `CreateProcess()` (Windows).
2. **Execution** → CPU runs process instructions.
3. **Scheduling** → OS decides which process runs next.
4. **Termination** → Process exits or is killed (`kill -9 PID` in Linux).

#### **Example in Code (Linux):**

```bash
# List all running processes
ps -aux

# Kill a process by PID
kill 1234
```

---

## **Summary**

- A **process** is a **running instance of a program**.
- It has its own **memory, state, and resources**.
- The OS manages processes via **PCBs and scheduling**.
- Examples: Chrome tabs, Word documents, game executables.
