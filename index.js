const express=require('express');
const app=express();
app.get('/',(request,response)=>{
    response.sendFile("index.html",{root:__dirname});
});
app.get('/resume',(request,response)=>{
    response.sendFile("PortFolio-main/index.html",{root:__dirname});
});
app.listen(3000,()=>{
    console.log("Server started at port no 3000");
});