const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    custName:{
        type:String,
        requied:true        
    },
    custEmail:{
        type:String,
        requied:true
    },
    password:{
        type:String,
        required:true
    },
    contactNo:{
        type:BigInt,
        required:true,      
    }
},{timestamps:true})

module.exports = mongoose.model("customer",schema)