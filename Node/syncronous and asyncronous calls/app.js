//javascript works on a single thread only. This means all previous commands should be executed run the next command
let fs=require('fs')

 const textIn=fs.readFileSync('./txt/input.txt','utf-8');
 console.log(textIn);
//blocks the execution of further lines. This is a syncronous call.
 console.log(fs.readFileSync('./txt/final.txt','utf-8'));
console.log("Reading file....");

//non-blocking code.It executes in background and then returns the result.
fs.readFile('./txt/input.txt','utf-8',(error,data)=>{
console.log(data);
})
console.log("Reading file....");
