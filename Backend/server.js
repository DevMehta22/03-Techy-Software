require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const custRoutes = require('./routes/custRoutes')
const serviceRoutes = require('./routes/serviceRoutes')
const feedbackRoutes = require('./routes/feedbackRoutes')

app.use(express.json())
app.use('/api/customer',custRoutes)
app.use('/api/services',serviceRoutes)
app.use('/api/feedback',feedbackRoutes)

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Connected to DB!")
    const port = process.env.PORT || 5500
    app.listen(port,(err)=>{
        if (err) throw err
        console.log(`Server is running on port ${port}`) 
    })
}).catch((err)=>{
    console.log(err);
})