const express = require("express")
const app = express()
const connectDB = require("./mongoDB")
const items = require("./routes/items")
const secret = require("dotenv").config()
app.use("/items",items)
app.listen(3330,()=>{
  console.log("server listening!");  
})

