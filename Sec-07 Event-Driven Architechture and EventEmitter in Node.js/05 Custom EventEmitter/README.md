### **Custom EventEmitter in Node.js**

In Node.js, the `EventEmitter` class is a core module that allows you to create objects capable of emitting and listening to events. While you can use the built-in `EventEmitter` directly, creating a **custom EventEmitter** by extending the `EventEmitter` class is a common practice to encapsulate event-driven logic within your own classes. This makes your code more modular, reusable, and easier to maintain.

---

### **Why Use a Custom EventEmitter?**

1. **Encapsulation**:
   - Encapsulate event-driven logic within a class.
2. **Reusability**:
   - Reuse the custom EventEmitter across different parts of your application.
3. **Abstraction**:
   - Hide implementation details and expose only necessary methods and events.
4. **Customization**:
   - Add custom methods and properties to enhance functionality.

---

### **Steps to Create a Custom EventEmitter**

1. Import the `events` module.
2. Create a class that extends `EventEmitter`.
3. Add custom methods and properties.
4. Emit and listen to events within the class.

---

### **Example: Basic Custom EventEmitter**

```javascript
const EventEmitter = require("events");

// Step 1: Create a custom class that extends EventEmitter
class MyEmitter extends EventEmitter {
  constructor() {
    super(); // Call the constructor of the parent class (EventEmitter)
  }

  // Step 2: Add a custom method
  performTask() {
    console.log("Task started...");

    // Step 3: Emit a custom event
    this.emit("taskCompleted", "Task finished successfully!");
  }
}

// Step 4: Create an instance of the custom EventEmitter
const myEmitter = new MyEmitter();

// Step 5: Listen for the custom event
myEmitter.on("taskCompleted", (message) => {
  console.log(message);
});

// Step 6: Call the custom method
myEmitter.performTask();

// Output:
// Task started...
// Task finished successfully!
```

---

### **Example: Custom EventEmitter with Multiple Events**

```javascript
const EventEmitter = require("events");

class MyEmitter extends EventEmitter {
  constructor() {
    super();
  }

  startProcess() {
    console.log("Process started...");
    this.emit("processStarted", "Process has started!");
  }

  endProcess() {
    console.log("Process ended...");
    this.emit("processEnded", "Process has ended!");
  }
}

const myEmitter = new MyEmitter();

// Listen for 'processStarted' event
myEmitter.on("processStarted", (message) => {
  console.log(message);
});

// Listen for 'processEnded' event
myEmitter.on("processEnded", (message) => {
  console.log(message);
});

// Call the methods
myEmitter.startProcess();
myEmitter.endProcess();

// Output:
// Process started...
// Process has started!
// Process ended...
// Process has ended!
```

---

### **Example: Custom EventEmitter with Error Handling**

Handling errors in a custom EventEmitter is crucial. If an `error` event is emitted and no listeners are registered, Node.js will throw an exception.

```javascript
const EventEmitter = require("events");

class MyEmitter extends EventEmitter {
  constructor() {
    super();
  }

  simulateError() {
    console.log("Simulating an error...");
    this.emit("error", new Error("Something went wrong!"));
  }
}

const myEmitter = new MyEmitter();

// Listen for the 'error' event
myEmitter.on("error", (err) => {
  console.error("An error occurred:", err.message);
});

// Call the method that emits an error
myEmitter.simulateError();

// Output:
// Simulating an error...
// An error occurred: Something went wrong!
```

---

### **Example: Custom EventEmitter with Async Operations**

You can use a custom EventEmitter to handle asynchronous operations, such as fetching data from an API.

```javascript
const EventEmitter = require("events");
const axios = require("axios");

class MyEmitter extends EventEmitter {
  constructor() {
    super();
  }

  async fetchData(url) {
    try {
      console.log("Fetching data...");
      const response = await axios.get(url);
      this.emit("dataFetched", response.data);
    } catch (err) {
      this.emit("error", err);
    }
  }
}

const myEmitter = new MyEmitter();

// Listen for the 'dataFetched' event
myEmitter.on("dataFetched", (data) => {
  console.log("Data received:", data);
});

// Listen for the 'error' event
myEmitter.on("error", (err) => {
  console.error("Error:", err.message);
});

// Call the method to fetch data
myEmitter.fetchData("https://jsonplaceholder.typicode.com/posts/1");

// Output (example):
// Fetching data...
// Data received: { userId: 1, id: 1, title: '...', body: '...' }
```

---

### **Example: Custom EventEmitter with Once-Only Listeners**

You can use the `.once()` method to register listeners that execute only once.

```javascript
const EventEmitter = require("events");

class MyEmitter extends EventEmitter {
  constructor() {
    super();
  }

  triggerEvent() {
    console.log("Event triggered...");
    this.emit("myEvent", "This event will only fire once!");
  }
}

const myEmitter = new MyEmitter();

// Register a once-only listener
myEmitter.once("myEvent", (message) => {
  console.log(message);
});

// Call the method to trigger the event
myEmitter.triggerEvent(); // Output: Event triggered... This event will only fire once!
myEmitter.triggerEvent(); // No output (listener was removed after the first call)
```

---

### **Best Practices for Custom EventEmitter**

1. **Encapsulate Logic**:
   - Keep event-driven logic within the custom class.
2. **Use Meaningful Event Names**:
   - Choose descriptive names for events to improve readability.
3. **Handle Errors**:
   - Always listen for `error` events to prevent crashes.
4. **Avoid Too Many Listeners**:
   - Limit the number of listeners for a single event to avoid complexity.
5. **Use `.once()` for One-Time Events**:
   - Use `.once()` for events that should only trigger once.

---

### **Conclusion**

Creating a custom `EventEmitter` in Node.js allows you to encapsulate event-driven logic within your own classes, making your code more modular, reusable, and maintainable. By extending the `EventEmitter` class, you can define custom methods, emit events, and handle them in a structured way. This pattern is especially useful for building scalable and responsive applications.
