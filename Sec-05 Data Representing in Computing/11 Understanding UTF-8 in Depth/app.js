//import fs from 'fs/promises'

//const contentBuffer = await fs.readFile("test.txt");
//console.dir(contentBuffer);
//console.log(contentBuffer)

// const bufferToString = (buffer)=>{
// buffer.map((char)=>{

// })
// }
// bufferToString(contentBuffer)


// let binaryString = ""
// contentBuffer.forEach((character)=> {
//   binaryString += character.toString(2) + " ";
// });

// console.log(binaryString)

import  fs from 'fs';

function bufferToString(buffer) {
  return buffer.toString("utf-8"); // or 'utf16le', 'ascii', etc.
}

fs.readFile('test.txt', (err, data) => {
  if (err) throw err;
  const content = bufferToString(data);
  console.log(content);
});
