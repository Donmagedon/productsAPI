const express = require("express")
const app = express()
const items = require("./routes/items")
const port = 3330
app.use("",(req,res)=>{
  res.send("hi I'm alive!")
})
app.use("/items",items)
app.listen(port,"0.0.0.0",()=>{
  console.log("server listening!");  
})

