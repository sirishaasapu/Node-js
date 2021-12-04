let http=require('http');
// let fileSys=require('fs');

let server=http.createServer(function(req,res){
    console.log(req.url);
    res.writeHead(200,{'content-Type':'text/html'});
    // let myReadStream=fileSys.createReadStream(__dirname + '/index.html','utf8');
    // myReadStream.pipe(res);
    //res.end("hello sirisha");
    let myObj={
        name:'sirisha asapu',
        age:21,
    };
    res.end(JSON.stringify(myObj));
   
});
server.listen(3000,'127.0.0.1');

console.log("Iam listening to port:3000");