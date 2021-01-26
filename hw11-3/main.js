const fs = require('fs');
    fs.writeFile("hw11-3/test.txt" ,"", (err) => {
        if (err) return console.log(err.message);
})

//************Check if Fille exist */
if (fs.existsSync("hw11-3/test.txt")){
    console.log("File exists");
}else{
    console.log("File does not exist");
}