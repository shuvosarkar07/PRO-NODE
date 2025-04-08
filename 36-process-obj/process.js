console.log(`Process ID: ${process.pid}`);
console.log(`Node.js Version: ${process.version}`);
console.log(`Platform: ${process.platform}`);
console.log(`CPU Architecture: ${process.arch}`);
console.log(`Command-line arguments:`, process.argv);

process.on("exit", (code) => {
  console.log(`Process is exiting with code: ${code}`);
});

setTimeout(() => {
  console.log("Exiting process...");
  process.exit(0);
}, 3000);
