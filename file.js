//file system

//creating directory
let fileSys=require('fs');
// fileSys.mkdir('./Doc',()=>{
//     console.log("directory created")
// })


//writing files
fileSys.writeFile('./Doc/bolg1.txt',"hello sirisha",()=>{
    console.log("file created")
})