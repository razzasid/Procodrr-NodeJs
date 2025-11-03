// import fs from 'fs'
//import fs from 'node:fs'// we can also do this
// the above are normal way to use fs module in node js. it contains both and sync and async way of file reading such as readFileSync() and readFile() respectively.

// promises version of fs module it only contains readFile() method which is async in nature.
import fs from 'node:fs/promises' 
//console.log(fs)

//* Reading file synchronously:
// const fileData = fs.readFileSync('index.html')
// console.log(fileData) // it returns data in buffer format
// console.log(fileData.toString()) // here toString() function will convert the buffer data in actual data.

// const fileData2 = fs.readFileSync('index.html', 'utf-8') // here if we are specifying the 'encoding format' like text are generally encoded in 'utf-8' format so it will directing return the actual content instead of buffer.
// console.log(fileData2)

//* Reading file Asynchronously:
// it will not return anything unlike 'readFileSync' which returns the content after reading. here we pass a callback function which will be executed after once the file has been read.
// fs.readFile('test.txt', 'utf-8', (err, data)=>{
// console.log(data)
// })



// //* Reading file Asynchronously using fs module imported using promises:
console.time();
let i = 0;
const timerId = setInterval(()=>{
  console.log(i++);
  if(i === 100){
    clearInterval(timerId);
    console.timeEnd();
  }
  
},5)

// const fileData4 = await fs.readFileSync('file.txt','utf-8'); // it will take more time
const fileData4 = await fs.readFile('file.txt','utf-8');
console.log('Data Read Completed');

console.log('End'); // why the 'End' is printing after 'data read' while file is being read asynchronously