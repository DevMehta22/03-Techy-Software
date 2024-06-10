const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    feedback:{
        type:String
    }
    
},{timestamps:true})

module.exports = mongoose.model("feedback",schema)