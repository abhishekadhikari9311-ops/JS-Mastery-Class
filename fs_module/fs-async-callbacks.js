const fs = require("fs");
const path = require("path");

let filePath = path.join(__dirname, "text.txt");
let newFilePath = path.join(__dirname, "text1.txt");

// fs.writeFile(
//   filePath,
//   "i love you nepal..mine pride land of birth..",
//   (err) => {
//     if (err) {
//       console.log("error occured:---", err);
//       return;
//     }
//     console.log("file written successfully:---");
//   },
// );

// fs.readFile(
//   filePath,
//   {
//     encoding: "utf-8",
//   },
//   (err, data) => {
//     if (err) {
//       console.log("err:---", err);
//     }
//     console.log("data:----", data);
//   },
// );

// append file

// fs.appendFile(filePath, "\nhey saathi\nhey nepali", (err) => {
//   if (err) {
//     console.log("error occured:---", err);
//   }
//   console.log("data appended:")
// });

// unlink file

// fs.unlink(filePath, (err) => {
//   if (err) {
//     console.log("err occured:", err);
//   }
//   console.log("file deleted successfully---->");
// });

// fs.rename(filePath, newFilePath, (err) => {
//   if (err) {
//     console.error("error occured:---", err);
//   }
//   console.log("file renamed successfully");
// });
