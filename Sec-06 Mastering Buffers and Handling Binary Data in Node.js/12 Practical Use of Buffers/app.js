//* what are scenarios where node.js provides buffer
import fs from 'fs/promises'

// 1: while file reading
const a = await fs.readFile('file.txt') // will return data in the form buffer.
console.log(a); 

// 2: while file reading