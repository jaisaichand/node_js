

const os = require('os');

var totalMem = os.totalmem();
var freeMem = os.freemem();

console.log(`total memory is ${totalMem}`);
console.log(`free memory is ${freeMem}`);