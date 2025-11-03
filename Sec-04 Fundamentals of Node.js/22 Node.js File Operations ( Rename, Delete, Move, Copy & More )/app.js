import { writeFile, appendFile, rename, copyFile, cp, unlink, mkdir, rmdir, rm, stat, readFile } from "node:fs/promises";
import { watch } from "node:fs";

//? create file
// await writeFile('style.css', "");
// await appendFile('index.html', "");
// console.log("File Created");

/////////////////////////////
//? rename file
// await rename('myImage.webp', 'image.webp');
// console.log('File Renamed')

///////////////////////////////////////
//? copy file to current directory
// await copyFile("image.webp", "myImage.webp");

//? copy file to different directory
// await copyFile("image.webp", "C:\\Users\\hameed\\Desktop\\nodejs-section-4-files\\myImage.webp");


//? copy entire directory and file inside it
// await cp("./src", "C:\\Users\\hameed\\Desktop\\nodejs-section-4-files\\src", { recursive: true });

// console.log("File Copied");

//////////////////////////////////
//? move file
// in  nodejs rename() method is used to rename as well as to move a file.
// await rename("image.webp", "C:\\Users\\hameed\\Desktop\\nodejs-section-4-files\\image.webp");

// This error happens because rename() cannot move files across different drives (like from D: to C:). This is a known Node.js limitation with fs.rename().


//? Solution: Use fs.copyFile() + fs.unlink()
// await copyFile("image.webp", "C:/Users/hameed/Desktop/nodejs-section-4-files/image.webp"); // here we are using unix path style that's why we are using single forward slashes ( / )

// await unlink("image.webp");

// console.log("File moved!");


//////////////////////////////////////
//? rename and move at same time
// await rename("app.js", "C:\\Users\\hameed\\Desktop\\nodejs-section-4-files\\script.js");

// console.log("Renamed and Moved")

//? delete a file
// await unlink("myImage.webp");
// console.log("File Deleted");

////////////////////////////////
//? remove empty directory
// await rmdir("./test");
// console.log(" Directory Removed");

//? remove non-empty directory
// await rm("image.webp"); // we can also delete file using rm

// to delete a non-empty directory we to pass the option {recursive:true}
// await rm("./src", { recursive: true });
//console.log(" Directory Removed");

//////////////////////////////////////
//? Create Directory
// await mkdir("test")
// console.log("Directory Created");

//////////////////////////////////
//? rename directory
// await rename("test", "testNew");
// console.log("Directory Renamed");

/////////////////////////////////////
//? view/see file or directory information
// const stats = await stat("app.js");
// const stats = await stat("src");
// console.log(stats)

//////////////////////////////////
//? track or watch file changes
// watch("index.html", async(eventType, fileName) => {
//   if(eventType === "change"){
//     console.log(await readFile(fileName, "utf-8"))
//   }
//   // console.log(eventType)
// });