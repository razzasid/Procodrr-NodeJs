const fs = require('fs');

//? Reading File form the current directory.
// const text = fs.readFileSync('./text.txt');

//? Reading File form the Desktop
const text = fs.readFileSync("C:\\Users\\khanh\\Desktop\\text.txt"); // since backslash (\) in javascript is a special charaacter and used as escape sequence ( to break line eg: \n ) therefore for path we have to use two backslash '\\'.

console.log(text.toString());
console.log(global)
console.log('End')