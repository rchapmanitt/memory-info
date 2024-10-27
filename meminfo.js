const os = require('os');

console.log("\n\n-----------------------------------------");
console.log("       System Memory Information         ");
console.log("-----------------------------------------");
console.log("      Total Memory: ", os.totalmem());
console.log("       Free Memory: ", os.freemem());
console.log("-----------------------------------------\n");
