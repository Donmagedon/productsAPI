const express = require("express")
const app = express()
const router = express.Router()
router.use("/",(req,res)=>{
    res.status(200,"hi there,this is items!")
})

module.exports = router