const http = require("http");
const fs = require("fs");

const server = http.createServer();

server.on("request", (req, res)=>{
    // 1 way
//    fs.readFile("stream.txt", "utf-8", (err, data)=>{
//        res.end(data)
//    })

    // 2 way

  const rsStream = fs.createReadStream("stream.txt");

//   rsStream.on("data",(chunkData)=>{
//       res.write(chunkData)
//   })

//   rsStream.on("end", ()=>{
//       res.end();
//   })

//   rsStream.on("error", (err)=>{
//       console.log("err",err)
//     res.end("file Not Found...")
//   })

    // 3 way
 rsStream.pipe(res)

})

server.listen("8000", "127.0.0.1")