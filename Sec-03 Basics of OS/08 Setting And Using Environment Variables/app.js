import fs from 'fs'
import {exec} from 'child_process'

// exec(`powershell -Command "setx VARIABLE_NAME 'Hameed Khan' /M"`)

const environmentVariables = process.env;
// setInterval(()=>{
//   console.log(environmentVariables)
// }, 1000)

const fileData = fs.readFileSync('./.env').toString();
//console.log(fileData);

//console.log(fileData.split("n/"))

//?in windows a line is break with two characters \r and \n so that zyz=npm is actually like this : zyz=npm\r\n that's why we are splitting it with \r and \n to remove it.
//? while in unix base environment there is only \n so the below code will not work for unix base system because \r is not there.
//? This is due to CRLF snd LF ( windows uses CRLF for character encoding while unix based systems uses LF for character encoding)

// \r is carriage return — moves the cursor to the beginning of the line.
// \n is line feed — moves the cursor to the next line.

//fileData.split("\r\n").forEach((data)=>{
// The above code using regex:
fileData.split(/\r?\n/).forEach((data)=>{
  const [key,value] = data.split('=')
  process.env[key]=value;
});

setInterval(()=>{
  const a = process.env
  console.log('hii')

},1000)