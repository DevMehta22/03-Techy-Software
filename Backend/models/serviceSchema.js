const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    serviceName:{
        type:String,
        requied:true        
    },
    description:{
        type:String
    },
    price:{
        type:Number,
        required:true
    },
    contactPersonName:{
        type:String,
        required:true
    },
    contactNo:{
        type:Number,
        required:true,      
    }
},{timestamps:true})

module.exports = mongoose.model("service",schema)