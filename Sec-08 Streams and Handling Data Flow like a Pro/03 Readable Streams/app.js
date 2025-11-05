import fs from "fs";
//import fs from 'fs/promises'

// const fileBufferSync = fs.readFileSync('chars.txt');

// const fileBuffer = await fs.readFile('chars.txt');
// console.log(fileBuffer.byteLength);
// console.log(fileBuffer.toString());

//* Reading file greater than 2 GiB using buffer
// const fileBuffer2 = await fs.readFile("D:\\Share\\Shubhankar.webm"); // we will get an error while reading this file, because this video file is greater than 2 GiB and we know that node.js buffer supports buffer only of 2GiB hence we can not read it using buffer. That's why we use stream to work with large file.
// console.log(fileBuffer2.byteLength); // RangeError [ERR_FS_FILE_TOO_LARGE]: File size (3967367749) is greater than 2 GiB
//console.log(fileBuffer2.toString());

//* Reading file less than 2 GiB using buffer
console.time();

// Time : 6 sec
// Memory : 1650 MB
// CPU : 8%
//const fileBuffer3 = await fs.readFile("D:\\03 Webdevelopment\\10_NextJS\\Master Next.js and React The Complete Guide Part 2.mp4"); // we will not get an error while reading this file, because this video file is less than 2 GiB hence we can read it using buffer. But i will occupy the large memory or RAM space. which is not efficient that's why we use Streams for large files.
// console.log(fileBuffer3.byteLength); // 1733289924 Bytes

// await fs.writeFile('bufferVideo.mp4', fileBuffer3);
//console.log(fileBuffer3.toString())

//* Reading file greater than 2 GiB using streams
// const readStream1 = fs.createReadStream("D:\\Share\\Shubhankar.webm"); // by default the stream size is of 64 KB means 64 * 1024 Bytes = 65536 Bytes but we can change it by setting 'highWaterMark' value like below.

// const readStream2 = fs.createReadStream("D:\\Share\\Shubhankar.webm", {highWaterMark:100 * 1024} ); // setting new stream size of 100 KB

const readStream3 = fs.createReadStream(
  "E:\\Movies\\The.Secret.Life.Of.Walter.Mitty.2013.1080p.WEB-DL.H264-PublicHD.mkv",
  { highWaterMark: 100 * 1024 * 1024 }
); // setting new stream size of 100 MB

//* writing stream file using appendFileSync() ( not efficient )
let readCount = 0;
let readPercent = 0;
const fileSize = fs.statSync(
  "E:\\Movies\\The.Secret.Life.Of.Walter.Mitty.2013.1080p.WEB-DL.H264-PublicHD.mkv"
).size;
console.log(fileSize);

readStream3.on("data", (chunkBuffer) => {
  // console.log(chunkBuffer)
  // console.log(chunkBuffer.byteLength)
  fs.appendFileSync("the secret life of walter mitty.mp4", chunkBuffer); // 'appendFileSync() is not an ideal way to write/append a readable streams into disk because if we append a file multiple times it's size will be increased.
  readCount++;

  if (chunkBuffer.byteLength < 100 * 1024 * 1024) {
    readPercent = 100;
  } else {
    readPercent = Math.floor(
      ((readCount * chunkBuffer.byteLength) / fileSize) * 100
    );
  }
  console.log("File Read:", readPercent, "%:");
});

readStream3.on("end", () => {
  console.log("File Read:", readPercent, "%");
  console.log({ readCount });

  console.timeEnd();
});
// console.timeEnd();

//* Task:
// let readCount2 = 0
// const readStream4 = fs.createReadStream("chars.txt", { highWaterMark: 16 }); // setting new stream size of 4 Byte
// readStream4.on('data', (chunkBuffer)=>{
// console.log(chunkBuffer.byteLength)
// readCount++
// });

// readStream4.on('end',()=>{
//   console.log({readCount});
// });
