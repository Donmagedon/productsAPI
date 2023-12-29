const express = require("express")
const app = express()
const router = express.Router()
const mongoose = require("mongoose")
const items = require("./schemas")
const itemsModel = mongoose.model("Items",items)
const fs = require("fs")
const path = require("path")


function addToDB(){
  arry.forEach(entry => {
    const img_path = entry.img_path
    const img_data = fs.readFileSync(img_path)
    const toBinary = Buffer.from(img_data).toString("base64")
    itemsModel.create({
        name:entry.name,
        price:entry.price,
        season_compatibility:entry.season_compatibility,
        category:entry.category,
        manufacturer:entry.manufacturer,
        img_path:toBinary,
        sub_category:entry.sub_category,
        type_details:entry.type_details,
    }).then(()=> console.log("added successfully")).catch((err)=> {throw new Error(err)})
})
}
async function connectDB(){
try{
    await mongoose.connect(`mongodb+srv://donmagedon7:$${process.env.MONGODB_PASSWORD}@cluster0.lnwbnuf.mongodb.net/?retryWrites=true&w=majority`,{dbName:"EcommerceShop"}).then((data)=>{
 

}).catch((err)=>{
    console.log(err)
})
}catch{
    throw new Error(err)
}}



module.exports = connectDB