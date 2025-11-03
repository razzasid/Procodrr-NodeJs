// import fsPromises from 'fs/promises'
import fs from 'fs'

setTimeout(()=>{
console.log('hi')
},0)

// Async IO
// const fileContent = await fsPromises.readFile('file.txt', 'utf-8'); // Using Promises
 fs.readFile('file.txt', 'utf-8', (err, data)=>{  // Using Callback
  console.log(data)
 })

 console.log("123")

 // sync IO
 const fileContent = fs.readFileSync('file.txt', 'utf-8'); // Using Promises
 console.log(fileContent)