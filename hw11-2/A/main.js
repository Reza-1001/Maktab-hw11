console.log(process.cwd())
const fs = require('fs')
fs.readFile("hw11-2/files/from.txt", 'utf8',(err,data)=>{
    if (err) return console.log(err.message);
    fs.writeFile("hw11-2/files/to.txt", `${data} *Copied by Async Method*`,err=>{
        if (err) return console.log(err.message);
      console.log("Done");
    })
})