console.log("Hello World");

const a = 10;
const b = 20;

console.log(a + b);

console.log("End of the module");

// Export the variables
module.exports = {
  a,
  b,
  sum: a + b,
};
