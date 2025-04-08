const fs = require("fs");

const myArr = new Uint8Array(8);

myArr[0] = 0x50; // 'P'
myArr[1] = 0x72; // 'r'
myArr[2] = 0x6f; // 'o'
myArr[3] = 0x43; // 'C'
myArr[4] = 0x6f; // 'o'
myArr[5] = 0x64; // 'd'
myArr[6] = 0x72; // 'r'
myArr[7] = 0x72; // 'r'

const decoder = new TextDecoder();
const readableString = decoder.decode(myArr);
console.log(readableString);

fs.writeFile("buffer-text.txt", readableString, (err) => {
  if (err) {
    console.error("Error writing to file:", err);
  } else {
    console.log("File written successfully!");
  }
});
