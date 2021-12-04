//file system

//creating directory
let fileSys=require('fs');
// fileSys.mkdir('./Doc',()=>{
//     console.log("directory created")
// })


//writing files
// fileSys.writeFile('./Doc/bolg1.txt',"hello hulk",()=>{
//     console.log("file created")
// })



//reading file

fileSys.readFile("./Doc/bolg1.txt",(err,blogData)=>{
    if(err){
        console.log(err);
    }
    console.log(blogData.toString());
});
console.log("done");