const fs = require("fs");

// fs.writeFileSync("nodeChallenge/Bio.txt", "File Craeted,....")

// fs.appendFileSync("nodeChallenge/Bio.txt", "Its Awesome..")
// const data = fs.readFileSync("nodeChallenge/Bio.txt", "utf-8")

// console.log(data)

// fs.mkdir("AsyncNode",(err)=>{
//     console.log("err",err)
// })
 
// fs.writeFile("AsyncNode/data.txt", "data file created...",(err)=>{
//     console.log("err",err)
// })

// fs.appendFile("AsyncNode/data.txt", "Its Awesome..",(err)=>{
//     console.log("err",err)
// })

fs.readFile("AsyncNode/data.txt", "utf-8",(err, data)=>{
    console.log("check data-->",data)
})

// fs.unlink("AsyncNode/data.txt",(err)=>{
//     console.log("err",err)
// })

fs.rmdir("AsyncNode",(err)=>{
    console.log("err",err)
})
