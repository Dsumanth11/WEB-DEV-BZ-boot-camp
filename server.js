require("dotenv").config();
const userlib=require("./backend/lib/userLib");
const mongoose=require("mongoose");

const express=require('express');
const app=express();
const port=process.env.PORT || 5010;
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
        userlib.getAllUsers(function(err,res){
            if(res.length==0)
            {
                userlib.createFirstUser(function(err,res){
                    if(err)
                    {
                        console.error(err);
                    }
                    else{
                        console.log(res);
                    }
                });
            }
        });
        app.listen(3000,()=>{
            console.log("Server started at port no 3000");
        });
    }
});
