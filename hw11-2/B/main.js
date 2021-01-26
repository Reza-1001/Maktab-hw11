const fs = require('fs')
const fromText = fs.readFileSync("hw11-2/files/from.txt", 'utf8');
fs.writeFileSync('hw11-2/files/to.txt', `${fromText} *Copied by Sync Method*`);
console.log("Done");