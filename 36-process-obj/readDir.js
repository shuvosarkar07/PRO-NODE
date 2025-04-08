const fs = require("fs");
const path = require("path");

// Get the current working directory
const currentDir = process.cwd();
console.log(`Current Directory: ${currentDir}`);

// Read the files in the current directory
fs.readdir(currentDir, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }
  console.log("Files and Folders:", files);
});
