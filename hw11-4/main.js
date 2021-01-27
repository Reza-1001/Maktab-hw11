const fs= require('fs');
// let names=SplitFileData("hw11-4/files/names.txt");
// let numbers=SplitFileData("hw11-4/files/numbers.txt");
// show(names, numbers);
// function SplitFileData(path,){
// let a=[];
// let b={};
// let array=[];
// fs.readFile(path,"utf8",(err,data)=>{
//     for (let i of data.split(/\r\n/)){
//         a=(i.split("-"));
//         b={
//             id:a[0].trim(),
//             name:a[1].trim()
//         };
//         array.push(b);
//     }
// });
// return (array);
// }

// function show(names,numbers){
// console.log(names);
// console.log(numbers);
// }


let names=fs.readFileSync("hw11-4/files/names.txt").toString().split(/\r\n/);
let numbers=fs.readFileSync("hw11-4/files/numbers.txt").toString().split(/\r\n/);
for (let i of names)
console.log(names);
console.log(numbers);