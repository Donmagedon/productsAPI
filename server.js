const express = require("express")
const app = express()
const items = require("./routes/items")
app.use("",(req,res)=>{
  res.send("hi I'm alive!")
})
app.use("/items",items)
app.listen(3330,()=>{
  console.log("server listening!");  
})

