const fs = require('fs');
const { createInflate } = require('zlib');
const path="hw11-3/test.txt";
createInflate(path){

}
    fs.writeFile(path,"", (err) => {
        if (err) return console.log(err.message);
})