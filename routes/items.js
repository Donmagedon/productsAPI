const express = require("express")
const app = express()
const router = express.Router()
router.use("/",(req,res)=>{
    res.send("hi this is items")
})

module.exports = router