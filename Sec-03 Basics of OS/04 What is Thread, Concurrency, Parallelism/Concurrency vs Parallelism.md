### 🧠 Concurrency vs Parallelism:

| Concept         | Meaning                                     | Example                                          |
| --------------- | ------------------------------------------- | ------------------------------------------------ |
| **Concurrency** | Handling **multiple tasks** by switching    | A chef cooking 3 dishes by rotating between them |
| **Parallelism** | Running **multiple tasks at the same time** | 3 chefs cooking 3 dishes at once                 |

---

### 🧵 Concurrency (1 CPU Core)

* Tasks are **interleaved** (not really simultaneous)
* Good for **I/O-bound** tasks

---

### ⚙️ Parallelism (Multi-Core)

* Tasks run **truly at the same time**
* Best for **CPU-bound** tasks

