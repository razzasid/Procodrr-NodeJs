import fs, { read } from "fs";

const readStream = fs.createReadStream("chars.txt", { highWaterMark: 4 });

// console.log(readStream.readableFlowing);
// console.log(readStream.readableEnded);
// console.log(readStream.isPaused());

readStream.on("data", (chunk) => {
  const { readableHighWaterMark, bytesRead } = readStream;
  if (readableHighWaterMark === bytesRead) {
    fs.writeFileSync("abc.txt", chunk);
  } else {
    fs.appendFileSync("abc.txt", chunk);
  }
  readStream.pause();

  setTimeout(() => {
    readStream.resume();
  }, 100);
});

readStream.on("resume", () => {
  console.log("Stream resumed");
});

readStream.on("pause", () => {
  console.log("Stream paused");
});

// readStream.on("end", (chunk) => {
//   console.log(readStream.readableFlowing);
//   console.log(readStream.readableEnded);
//   readStream.pause();
//   console.log(readStream.isPaused());
// });
