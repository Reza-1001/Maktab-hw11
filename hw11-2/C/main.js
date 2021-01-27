
const fs = require("fs");
var text;
fs.readFile("hw11-2/files/from.txt", "utf8", (err, data) => {
  if (err) return console.log(err.message);
   text=`${data} ==>from.txt`;
   fs.readFile("hw11-2/files/append.txt", "utf8", (err, data) => {
    if (err) return console.log(err.message);
    text+=`\n${data} ==>append.txt\n*Copied by Async Method*`;
    fs.writeFile("hw11-2/files/to.txt", text, (err) => {
        if (err) return console.log(err.message);
    });
});
});



  
    
    
      


