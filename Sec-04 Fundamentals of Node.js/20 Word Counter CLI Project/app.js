#!/usr/bin/env node

import { readFile } from "node:fs/promises";

// console.log(process.argv); the 'process.argv' stores the arguments that we pass wile doing 'node app.js'
// it returns an array of the paths the first path will 'node.exe' and the second path will of our 'app.js' file and if we pass any extra arguments after app.js like 'file-1.txt' and 'file-2.txt' then it will return path of third arguments i.e file-1.txt and path of fourth argument i.e file-2.txt and so on. 

// Eg : node app.js file-1.txt file-2.txt

const filePath = process.argv[2]
const specificWord = process.argv[3]?.toLowerCase()
//console.log(specificWord)

const fileContent = await readFile(filePath, "utf-8")
//console.log(fileContent)

// console.log(fileContent.split(/[\W]/));
// console.log(fileContent.split(/[\W]/).filter((word) => word)); // filtering empty string ("") from the fileContent.

const wordsArray = fileContent.split(/[\W]/).filter((word) => word);
const wordsCount = {}

wordsArray.forEach((word) => {
  let wordLowercase = word.toLowerCase()
  if (wordLowercase in wordsCount) {
    wordsCount[wordLowercase] += 1
  } else {
    wordsCount[wordLowercase] = 1
  }
})

if (specificWord) {
  if (specificWord in wordsCount) {
    console.log(wordsCount[specificWord]); // Count of specific word
  } else {
    console.log('Word Not Found');
  }
} else {
  console.log(wordsCount); // All word counts
}

