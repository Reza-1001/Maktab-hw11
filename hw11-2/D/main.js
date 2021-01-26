const fs = require('fs')
let fromText = `${fs.readFileSync("hw11-2/files/from.txt", 'utf8')} ==>from.txt\n`;
fromText += `${fs.readFileSync("hw11-2/files/append.txt", 'utf8')} ==>append.txt`;
fs.writeFileSync('hw11-2/files/to.txt', `${fromText}\n*Copied by Sync Method*`);