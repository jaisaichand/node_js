const notes = require('./notes.js');

const msg = notes();

console.log(msg);







// const fs = require('fs');
// const add = require('./util.js');
// // fs.writeFileSync('notes.txt', 'my name is jai.');  // we can append even without this, this line is just for reference of what I have done.

// fs.appendFileSync('notes.txt', 'this is appended text');

// const sum = add(3,-4);

// console.log(sum);