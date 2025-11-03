//* base64 and base64url encoding
import fs from "fs/promises";

const a = await fs.readFile('file.txt'); // will read data in buffer format
const b = await fs.readFile('file.txt', 'utf-8'); // will read actual data

// console.log(a)
// console.log( b)

//* Reading with utf-8 encoding
const c = await fs.readFile('file.txt', 'utf-8'); 
fs.writeFile('utf-8.txt', c) // why we don't pass encoding while writing into file, while in case base64 we pass base64 encoding while writing into file.


//* Reading with base64 encoding
const d = await fs.readFile('file.txt', 'base64'); // it's equivalent to btoa(), returns base64 string

fs.writeFile('without-base64-encoding.txt', d) // will write base64 string to file
fs.writeFile('with-base64-encoding.txt', d, 'base64') // it's equivalent to atob() , will write actual data

//console.log(d)

//* converting image file file into base64 string 
const bufferContent = await fs.readFile("favicon\\favicon-16x16.png");
const e = bufferContent.toString('base64')
// fs.writeFile('image-data.txt', e)
//console.log(e)

//* generating the original image using base64 string 
const bufferContent2 = await fs.readFile('image-data.txt')
const imageBase64String = bufferContent2.toString()
fs.writeFile('a.png',imageBase64String,'base64' ) // this will generate the back image using base64 encoding.
// fs.writeFile('a.png','image-data.txt','base64' ) //? can't we pass the containing base64 string directly here.

//* Reading with base64url encoding
const bufferContent3 = await fs.readFile("favicon\\favicon-16x16.png")
const f = bufferContent3.toString('base64url')
fs.writeFile('new-image-data.txt',f) 

//* converting script.js file into base64 string 
const bufferContent4 = await fs.readFile('script.js', 'base64');
fs.writeFile('script.txt',bufferContent4)

//* converting style.css file into base64 string 
const bufferContent5 = await fs.readFile('style.css', 'base64');
fs.writeFile('style.txt',bufferContent5)