#!/usr/bin/env node
import { readFile } from "node:fs/promises";
//import readline from 'readline';

const filePath = process.argv[2]
const specificWord = process.argv[3]?.toLowerCase()

const fileContent = await readFile(filePath, "utf-8")

const wordsArray = fileContent.split(/[\W]/).filter((word) => word);
const wordsCount = {}

let totalWords = 0
console.log(totalWords)
wordsArray.forEach((word) => {
  let wordLowercase = word.toLowerCase()
  if (wordLowercase in wordsCount) {
    wordsCount[wordLowercase] += 1
    ++totalWords
  } else {
    wordsCount[wordLowercase] = 1
    ++totalWords
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
  console.log(`Total Words: ${totalWords}`)
}


// readline.createInterface({ input: process.stdin, output: process.stdout })
//   .question("Press Enter to exit...", () => process.exit(0));

// setTimeout(() => {
//   console.log("HI")
// }, 10000)