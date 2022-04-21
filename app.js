
const express=require("express");
const app=express()
const morgan=require("morgan")
const tourRouter=require("./routes/tourRoutes")
//middle ware for the client request body
app.use(express.json())

app.use(morgan('dev'))

//writting owm middleware for the application use next method to run middleware stack
//middle ware will run before the response cycle ends
app.use((req,res,next)=>{
    req.requestTime=new Date().toISOString();
    next()
})

app.use('/api/v4/tours',tourRouter)

module.exports=app;