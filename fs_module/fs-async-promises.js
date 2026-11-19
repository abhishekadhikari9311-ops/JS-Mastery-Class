const fs = require("fs/promises");
const path = require("path");

const filePath = path.join(__dirname, "text.txt");
const filePath1 = path.join(__dirname, "text2.txt");

// write file

// fs.writeFile(filePath, "i love pdf");

// read file

// fs.promises
//   .readFile(filePath, "utf8")
//   .then((data) => {
//     console.log("data:---", data);
//   })
//   .catch((err) => {
//     console.error("err occured:---", err);
//   });

// append file

// fs.promises.appendFile(filePath, "\nhello government", "utf8");

//unlink file

// fs.unlink(filePath);

//rename file

// fs.rename(filePath, filePath1);
