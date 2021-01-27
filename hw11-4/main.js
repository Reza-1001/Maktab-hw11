const fs = require("fs");
//Readint names.txt and numbers.txt
let names = fs.readFileSync("hw11-4/files/names.txt","utf8").split(/\r\n/);
let numbers = fs.readFileSync("hw11-4/files/numbers.txt","utf8").split(/\r\n/);
//split id and names
for (let i in names){
    names[i]=names[i].split("-")
}
//split id and phoneNumbers
for (let i in numbers){
   numbers[i]=numbers[i].split("-")
    
}
//add ids and names to info array
let info=[];
for (let i of names){
        info.push({
            id:i[0],
            name:i[1],
            phoneNumber:[],
    })
}
//adding phoneNumbers to info array based on id
for (let i of numbers){
    for (let j in info){
        if (i[0]===info[j].id)
        info[j].phoneNumber.push(i[1]);
}
}
//converting info array to String
let myString="";
for (let i of info){
    if (i.phoneNumber.length==1){
        myString+=`${i.name}'s phone number is${i.phoneNumber}\n`;
        continue;
    }
    if (i.phoneNumber.length>1){
        myString+=`${i.name}'s phone numbers are${i.phoneNumber}\n`;
        continue;
    }
    if (i.phoneNumber.length==0){
        myString+=`${i.name} hasn't any phone number\n`;
        continue;
    }
}
fs.writeFileSync("hw11-4/files/result.txt",myString)

