//In Browser window is used to see the global objects

console.log(global);

//setTimeout
setTimeout(()=>{
    console.log("hello sirisha"),
    clearInterval(time);
},3000);

//setInterval
let time=setInterval(()=>{
    console.log("Time Intervals");
},1000);

