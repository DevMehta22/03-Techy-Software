const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    feedback:{
        type:Text
    }
    
},{timestamps:true})

module.exports = mongoose.model("feedback",schema)