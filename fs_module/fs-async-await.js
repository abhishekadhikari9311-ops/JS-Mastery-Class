// const fs = require("fs/promises");
// const path = require("path");

// const filePath = path.join(__dirname, "text.txt");
// let filePath1 = path.join(__dirname, "text1.txt");

// async function writeFile() {
//   try {
//     await fs.writeFile(filePath, "i love nepal...", "utf8");
//   } catch (error) {
//     console.error("error occured:---", error);
//   }
// }
// writeFile();

// read file

// async function readFile() {
//   try {
//     const data = await fs.readFile(filePath, "utf8");
//     console.log(data);
//   } catch (error) {
//     console.log(error, "err occured");
//   }
// }
// readFile();

//append file

// async function appendFile() {
//   try {
//     await fs.appendFile(
//       filePath,
//       "\n hi new government\n  lllllllllllllllllllll   hi sarkar",
//       "utf8",
//     );
//   } catch (error) {
//     console.log("err occured:----", error);
//   }
// }
// appendFile()

//unlink file

// async function unlinkFile() {
//   try {
//     await fs.unlink(filePath);
//   } catch (error) {
//     console.log(error, "err occured:---");
//   }
// }
// unlinkFile();
// rename file

// async function renameFile() {
//   try {
//     await fs.rename(filePath, filePath1);
//   } catch (error) {
//     console.log(error, "err occured:---");
//   }
// }
// renameFile();
