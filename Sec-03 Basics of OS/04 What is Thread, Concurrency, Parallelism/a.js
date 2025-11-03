const { workerData, parentPort, threadId } = require("worker_threads");
//const threadData = { workerData, parentPort, threadId };
console.log("a file started");
console.time();
//debugger
for (let i = 0; i < 1000; i++) {
  if (i % 100 == 0) {
    console.log(`Running loop 1 ${i}`);
  }
}
console.timeEnd();
