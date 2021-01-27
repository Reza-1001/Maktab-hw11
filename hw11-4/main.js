const fs = require("fs");
// let names=SplitFileData("hw11-4/files/names.txt");
// let numbers=SplitFileData("hw11-4/files/numbers.txt");
// show(names, numbers);
// function SplitFileData(path,){
// let a=[];
// let b={};
// let array=[];
// fs.readFile(path,"utf8",(err,data)=>{
//     for (let i of data.split(/\r\n/)){
//
// });
// return (array);
// }

// function show(names,numbers){
// console.log(names);
// console.log(numbers);
// }

function FileRead(path, key1, key2) {
  let data = fs.readFileSync(path).toString().split(/\r\n/);
  let data2 = [];
  let a;
  let b = {};
  for (let i of data) {
    a = i.split("-");

    data2.push({ [key1]: a[0].trim(), [key2]: a[1].trim() });
  }
  return data2;
}
let names = FileRead("hw11-4/files/names.txt", "id", "name");
let numbers = FileRead("hw11-4/files/numbers.txt", "id", "phoneNumber");
let found=false;
let merged=[];
for (let i in names){
    for (let j in numbers){
        if (names[i].id==numbers[j].id){
             obj={
                id:names[i].id,
                name:names[i].name,
                phoneNumber:function(){
                    return this.push(numbers[j].phoneNumber)
                },
            }
            merged.push(obj);
        }
    }
}
console.log(merged);

function Merge(a, b,index){
    let obj={};
for (let i in a){
    for (let j in b){
        obj["id"]=a[i];
        obj["name"]=a;
        names[index][j]=b[j];
    }
}
return
}




// [
//     { id: '001', name: 'mohammad' },
//     { id: '002', name: 'Ali' },
//     { id: '003', name: 'Zahra' }
//   ]
//   [
//     { id: '001', phoneNumber: '09111111111' },
//     { id: '002', phoneNumber: '09122222222' },
//     { id: '002', phoneNumber: '09333333333' }
//   ]
