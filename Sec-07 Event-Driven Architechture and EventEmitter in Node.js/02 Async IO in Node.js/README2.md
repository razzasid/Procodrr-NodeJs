## What is Node.js ?

> Node.js is a single-threaded, event-driven, non-blocking, asynchronous I/O runtime that allows developers to build scalable and high-performance applications, particularly suited for I/O-bound tasks such as file handling and network requests.

> 

**Async I/O (Asynchronous Input/Output)** in **Node.js** refers to a non-blocking way of handling I/O operations like reading files, querying databases, or making API calls. Instead of waiting for one task to finish before starting the next, Node.js can start a task and **move on to other work**, then come back when the task is done.


### 🔧 How It Works

Node.js uses a **single-threaded event loop** with a background thread pool. Here’s the flow:

1. **You start an I/O operation** (e.g., file read).

2. Node.js **delegates this task** to the OS or thread pool.

3. Instead of waiting, Node.js **continues executing other code**.

4. When the I/O is done, a **callback or promise** is triggered with the result.


### 🧠 Real-World Analogy

Imagine a chef (Node.js) who puts something in the oven (file read). Instead of standing there waiting, the chef continues cooking other dishes. Once the oven timer rings, the chef handles the cooked item. That’s async I/O.