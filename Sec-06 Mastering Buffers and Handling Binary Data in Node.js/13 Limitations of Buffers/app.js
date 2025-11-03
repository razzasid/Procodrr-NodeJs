//* Limitations of Buffers

// When we try to read a large/heavy files. Buffer loads the whole file in the RAM, and thus it makes the process slow. 

// Therefore, we use Streams for reading/Writing large files.

import fs from 'fs/promises'

const a = await fs.readFile("D:\\03 Webdevelopment\\10_NextJS\\Master Next.js and React The Complete Guide Part 1.mp4");
const b = await fs.readFile("D:\\03 Webdevelopment\\10_NextJS\\Master Next.js and React The Complete Guide Part 2.mp4");
const c = await fs.readFile("D:\\03 Webdevelopment\\10_NextJS\\Master Next.js and React The Complete Guide Part 3.mp4");

console.log(a.byteLength);
console.log(b.byteLength)
console.log(c.byteLength)

console.log("End")