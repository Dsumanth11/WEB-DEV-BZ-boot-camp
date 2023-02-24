require("dotenv").config();
const userlib=require("./backend/lib/userLib");
const todoLib=require("./backend/lib/todoLib");
const mongoose=require("mongoose");
const options={
    extensions:['htm','html','css','js','ico','jpg','jpeg','png','svg','pdf'],
    index:['index.html'],
};
const express=require('express');
const app=express();
app.use(express.json());
app.use(express.static("public",options));
const port=process.env.PORT || 3000;
app.get('/',(request,response)=>{
    response.sendFile("index.html",{root:__dirname});
});
app.get('/resume',(request,response)=>{
    response.sendFile(__dirname+"/PortFolio-main/resume.html");
});
app.get('/weather',(request,response)=>{
    response.sendFile("weather1.html",{root:__dirname});
});

///---------------//
app.get('/todo',(request,response)=>{
    response.sendFile("todolist.html",{root:__dirname});
});

app.get("/api/todos", function(req, res) {
    todoLib.getAllTodos(function(err, todos) {
        if (err) {
            res.json({
                status: "error",
                message: err,
                data: null
            });
        } else {
            res.json({
                status: "success",
                message: "Todos retrieved successfully",
                data: todos
            });
        }
    })
});


app.post("/api/todos", function(req, res) {
    const todo = req.body;
    todoLib.createTodo(todo, function(err, result) {
        if (err) {
            res.json({
                status: "error",
                message: err,
                data: null
            });
        } else {
            res.json({
                status: "success",
                message: "Todo created successfully",
                data: result
            });
        }
    })
});

app.put("/api/todos/:id", function(req, res) {
    const id = req.params.id;
    const data = req.body;
    todoLib.updateTodoById(id, data, function(err, result) {
        if (err) {
            res.json({
                status: "error",
                message: err,
                data: null
            });
        } else {
            res.json({
                status: "success",
                message: "Todo updated successfully",
                data: result
            });
        }
    })
});

app.delete("/api/todos/:id", function(req, res) {
    const id = req.params.id;
    todoLib.deleteTodoById(id, function(err, result) {
        if (err) {
            res.json({
                status: "error",
                message: err,
                data: null
            });
        } else {
            res.json({
                status: "success",
                message: "Todo deleted successfully",
                data: result
            });
        }
    })
});

app.get("/api/todos/completed", function(req, res) {
    todoLib.getAllCompletedTodos(function(err, todos) {
        if (err) {
            res.json({
                status: "error",
                message: err,
                data: null
            });
        } else {
            res.json({
                status: "success",
                message: "Deleted Todos retrieved successfully",
                data: todos
            });
        }
    })
});

app.get("/api/todos/deleted", function(req, res) {
    todoLib.getAllDeletedTodos(function(err, todos) {
        if (err) {
            res.json({
                status: "error",
                message: err,
                data: null
            });
        } else {
            res.json({
                status: "success",
                message: "Deleted Todos retrieved successfully",
                data: todos
            });
        }
    })
});

mongoose.set('strictQuery',true);
mongoose.connect(process.env.MONGO_CONNECTION_STRING,{},function (err){
    if(err)
    {
        console.error(err);
    }
    else{
        console.log("DB connected");
        // userlib.getAllUsers(function(err,res){
        //     if(res.length==0)
        //     {
        //         userlib.createFirstUser(function(err,res){
        //             if(err)
        //             {
        //                 console.error(err);
        //             }
        //             else{
        //                 console.log(res);
        //             }
        //         });
        //     }
        //     else{
        //         if(err)
        //         {
        //             console.error(err);
        //         }
        //         else{
        //             console.log(res);
        //         }
        //     }
        // });
        // userlib.getuserByFilter({username:"BittuSumanth"},function(err,result){
        //     if(err)
        //     {
        //         console.error(err);
        //     }
        //     else{
        //         console.log(result);
        //     }
        // });
        // userlib.createUser({username:"BittuSumanth",yearOfGraduation:2025},function(err,result){
        //     if(err)
        //     {
        //         console.error(err);
        //     }
        //     else{
        //         console.log(result);
        //     }
        // });
        // userlib.updateUser(function(err,result){
        //     if(err)
        //     {
        //         console.log(err);
        //     }
        //     else{
        //         console.log(result);
        //     }
        // });
        // userlib.deleteUser("BittuSumanth",function(err,result){
        //     if(err)
        //     {
        //         console.error(err);
        //     }
        //     else{
        //         console.log(result);
        //     }
        // });
        app.listen((port+10),()=>{
            console.log("Server running on http://localhost:"+(port+10));
			console.log(`Server running on http://localhost:${port+10}`);
        });
    }
});

