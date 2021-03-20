const path = require("path");
const express = require("express");
const app = express();

console.log(path.join(__dirname,"../public"))

const pathIs = path.join(__dirname,"../public");

app.use(express.static(pathIs))

app.get("/", (req, res)=>{
    res.send("<h3>Hello Shilpi.....</h3>")
})

app.get("/about", (req, res)=>{
    res.send({
        id: "1",
        name: "Shilpi tyagi"
    })
})

app.listen(8000, ()=>{
    console.log("server listning on port 8000")
})