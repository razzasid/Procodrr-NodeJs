import fs from 'node:fs/promises'

//? both the writeFile() and appendFile() function create the file if the file is not already existing.

//? in the second argument we can pass the data in the form string as well as buffer

const filePath = "d:\\file2.txt"

//* Reading image file
const imageFileBuffer = await fs.readFile('image.webp');
//console.log(imageFileBuffer)

//* Reading text file
const fileContentBuffer = await fs.readFile(filePath); // this will return data in buffer format since we are not using utf-8
// console.log(fileContentBuffer)

//* writing text file
// fs.writeFile('file-1.txt', 'hello world') //? this override previous data

//* writing image file to desktop
//fs.writeFile("C:\\Users\\hameed\\Desktop\\nodejs-section-4-files\\myImage.webp", imageFileBuffer) //? copy or paste image to desktop

//* Appending or writing file
// fs.appendFile('file-2.txt', 'hello world') // this append new data and keeps previous data as well but by default it does not add space of new line.

// fs.appendFile('file-2.txt', '\nhello world') //? append data to new line

// fs.appendFile('file-2.txt', fileContentBuffer)


//* Writing time to file-3.txt
// const timer = setInterval(() => {
//   //clearInterval(timer)
//   fs.writeFile('file-3.txt', new Date().toLocaleTimeString())
// }, 500)

//* Creating err.log file and Writing error message in it.
// try {
//   const fileContent = await fs.readFile('node.jss');
//   fs.writeFile("C:\\Users\\hameed\\Desktop\\nodejs-section-4-files\\myImage.webp", fileContent)

// } catch (err) {
//   fs.appendFile('error.log', `\n\n${new Date().toLocaleTimeString()}\n${err.message}\n\n${err.stack}`)
//   console.log(err)
//   console.log('To see full error message go to ./error.log file')
// }