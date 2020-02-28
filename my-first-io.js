const fs = require("fs");

let Buffer = fs.readFileSync(process.argv[2]);

console.log(Buffer.toString().split('\n').length-1);