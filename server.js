require("dotenv").config();
const mongoose=require("mongoose");

const express=require('express');
const app=express();
app.get('/',(request,response)=>{
    response.sendFile("index.html",{root:__dirname});
});
app.get('/resume',(request,response)=>{
    response.sendFile("PortFolio-main/index.html",{root:__dirname});
});
mongoose.set('strictQuery',true);
mongoose.connect(process.env.MONGO_CONNECTION_STRING,{},function (err){
    if(err)
    {
        console.error(err);
    }
    else{
        console.log("DB connected");
        app.listen(3000,()=>{
        
            console.log("Server started at port no 3000");
        });
    }
});

