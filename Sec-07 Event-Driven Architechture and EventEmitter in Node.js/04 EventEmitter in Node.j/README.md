### **EventEmitter in Node.js**

The `EventEmitter` class is a core module in Node.js that facilitates event-driven programming. It allows objects to emit named events and register listeners (callback functions) to handle those events. This is the foundation of Node.js's asynchronous, event-driven architecture.

---

### **Key Features of EventEmitter**

1. **Event Emission**:
   - Objects can emit events using the `.emit()` method.
2. **Event Listening**:
   - Listeners can be registered for specific events using the `.on()` or `.addListener()` methods.
3. **Multiple Listeners**:
   - Multiple listeners can be registered for the same event.
4. **Error Handling**:
   - Special `error` events can be emitted to handle errors.
5. **Once-Only Listeners**:
   - Listeners can be registered to execute only once using the `.once()` method.

---

### **Using EventEmitter**

To use `EventEmitter`, you need to import the `events` module and create an instance of the `EventEmitter` class.

#### Example: Basic Usage

```javascript
const EventEmitter = require("events");

// Create an instance of EventEmitter
const myEmitter = new EventEmitter();

// Register an event listener
myEmitter.on("greet", (name) => {
  console.log(`Hello, ${name}!`);
});

// Emit the event
myEmitter.emit("greet", "John"); // Output: Hello, John!
```

---

### **Methods of EventEmitter**

#### 1. **`.on(eventName, listener)`**

Registers a listener for the specified event.

```javascript
myEmitter.on("sayHello", () => {
  console.log("Hello, World!");
});

myEmitter.emit("sayHello"); // Output: Hello, World!
```

#### 2. **`.emit(eventName, [...args])`**

Emits an event, optionally passing arguments to the listeners.

```javascript
myEmitter.on("add", (a, b) => {
  console.log(`Sum: ${a + b}`);
});

myEmitter.emit("add", 5, 10); // Output: Sum: 15
```

#### 3. **`.once(eventName, listener)`**

Registers a listener that will be called **only once**.

```javascript
myEmitter.once("welcome", () => {
  console.log("Welcome! (This will only run once)");
});

myEmitter.emit("welcome"); // Output: Welcome! (This will only run once)
myEmitter.emit("welcome"); // No output
```

#### 4. **`.removeListener(eventName, listener)`**

Removes a specific listener for the event.

```javascript
const listener = () => console.log("Listener called");
myEmitter.on("test", listener);

myEmitter.emit("test"); // Output: Listener called
myEmitter.removeListener("test", listener);
myEmitter.emit("test"); // No output
```

#### 5. **`.removeAllListeners([eventName])`**

Removes all listeners for a specific event (or all events if no event name is provided).

```javascript
myEmitter.on("event1", () => console.log("Event 1"));
myEmitter.on("event2", () => console.log("Event 2"));

myEmitter.removeAllListeners("event1");
myEmitter.emit("event1"); // No output
myEmitter.emit("event2"); // Output: Event 2
```

#### 6. **`.listenerCount(eventName)`**

Returns the number of listeners registered for the event.

```javascript
myEmitter.on("eventA", () => {});
myEmitter.on("eventA", () => {});

console.log(myEmitter.listenerCount("eventA")); // Output: 2
```

---

### **Error Handling with EventEmitter**

If an `error` event is emitted and no listeners are registered, Node.js will throw an exception. Always handle `error` events.

#### Example: Error Handling

```javascript
myEmitter.on("error", (err) => {
  console.error("An error occurred:", err.message);
});

myEmitter.emit("error", new Error("Something went wrong!")); // Output: An error occurred: Something went wrong!
```

---

### **Real-World Example: Custom EventEmitter Class**

You can create a custom class that extends `EventEmitter` to encapsulate event-driven logic.

```javascript
const EventEmitter = require("events");

class MyClass extends EventEmitter {
  constructor() {
    super();
  }

  performTask() {
    console.log("Task started...");
    this.emit("taskCompleted", "Task finished successfully!");
  }
}

const myObject = new MyClass();

myObject.on("taskCompleted", (message) => {
  console.log(message);
});

myObject.performTask();
// Output:
// Task started...
// Task finished successfully!
```

---

### **Example: EventEmitter in HTTP Server**

Node.js's `http` module uses `EventEmitter` internally. You can also use it to extend functionality.

```javascript
const http = require("http");
const EventEmitter = require("events");

class MyServer extends EventEmitter {
  constructor() {
    super();
    this.server = http.createServer((req, res) => {
      this.emit("requestReceived", req, res);
    });
  }

  start(port) {
    this.server.listen(port, () => {
      this.emit("serverStarted", port);
    });
  }
}

const server = new MyServer();

server.on("requestReceived", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, World!\n");
});

server.on("serverStarted", (port) => {
  console.log(`Server started on port ${port}`);
});

server.start(3000);
```

---

### **Best Practices**

1. **Use Meaningful Event Names**:
   - Choose descriptive names for events to improve code readability.
2. **Avoid Too Many Listeners**:
   - Limit the number of listeners for a single event to avoid complexity.
3. **Handle Errors**:
   - Always listen for `error` events to prevent crashes.
4. **Use `.once()` for One-Time Events**:
   - Use `.once()` for events that should only trigger once.
5. **Encapsulate Logic**:
   - Extend `EventEmitter` in custom classes to encapsulate event-driven logic.

---

### **Conclusion**

`EventEmitter` is a powerful tool in Node.js for implementing event-driven architecture. It allows objects to emit events and register listeners to handle those events, enabling non-blocking and scalable applications. By mastering `EventEmitter`, you can build modular, efficient, and responsive systems in Node.js.
