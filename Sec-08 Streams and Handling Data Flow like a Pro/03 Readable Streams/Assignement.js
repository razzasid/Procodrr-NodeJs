import fs from "node:fs";

console.time();

let filePath = "ss.jpg";
let highWaterMark = 10 * 1024;
let desPath = "tmp.jpg";

function copyFile(filePath, highWaterMark, desPath) {
  let readCount = 0;
  const fileSize = fs.statSync(filePath).size;
  const stream = fs.createReadStream(filePath, { highWaterMark });

  stream.on("data", (chunk) => {
    readCount++;

    fs.appendFileSync(desPath, chunk); // 'appendFileSync() is not an ideal way to read file using streams because if we append a file multiple times it's size will be increased.

    let loadedPercent = ((readCount * chunk.byteLength) / fileSize) * 100;

    chunk.byteLength >= highWaterMark &&
      console.log("FILE COPIED : ", Math.floor(loadedPercent), "%");
  });

  stream.on("end", () => {
    console.log("FILE LOADED : ", 100, "%");

    console.timeEnd();
  });
}

copyFile(filePath, highWaterMark, desPath);


