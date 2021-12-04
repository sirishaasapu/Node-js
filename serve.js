let http=require('http')

let server=http.createServer(function(req,res){
    console.log(req.url);
    res.writeHead(200,{'content-Type':'text/plain'});
    res.end("hello sirisha");
   
});
server.listen(3000,'127.0.0.1');

console.log("Iam listening to port:3000");