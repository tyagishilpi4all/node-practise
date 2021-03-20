const http = require("http");
const fs = require("fs");

// const dataIs ={
//     name : "Shilpi tyagi",
//     age : 26,
//     designation : "developer"
// }

// const currentData = JSON.stringify(dataIs);

// console.log("cdscdscd",currentData)

// fs.writeFile("jsonFile.json", currentData ,(err)=>{
//     console.log("err ----",err)
// })

// fs.readFile("jsonFile.json", "utf-8", (err, data)=>{
//    const orgData = JSON.parse(data)
//    console.log("file data-->",orgData)
// })


const server = http.createServer((req, res)=>{
     const data = fs.readFileSync("jsonFile.json", "utf-8");
    //  const orgData = JSON.parse(data);
    console.log(req.url)
    if(req.url === "/aboutUs"){
        res.end("This is about us page...")
    }else if(req.url === "/user"){
        res.writeHead(200, {"content-type": "application/json"})
        res.end(data)
    }else{
     res.writeHead(400, {"content-type" : "text/html"}) 
    res.end("<h3>Hlo shilpi....</h3>")
    }
})

server.listen(8000, "127.0.0.1",()=>{
    console.log("Server start on port 8000")
})