//file system

//creating directory
let fileSys=require('fs');
fileSys.mkdir('./Doc',()=>{
    console.log("directory created")
})
