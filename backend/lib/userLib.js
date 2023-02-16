const userModel=require("../models/userModel");

module.exports.getAllUsers = async function(callback){
    try{
        var users=await userModel.find({isDeleted:false});
        callback(null,users);
    }
    catch(err)
    {
        callback(err,null);
    }
}

module.exports.createFirstUser = async function(callback){
    try{
        var user={
            username:"DSumanth",
            yearOfGraduation:2024,
        };
        var newUser = await new userModel(user);
        var result = await newUser.save();
        var users = await userModel.find({});
        callback(null,users);
    }
    catch(err)
    {
        callback(err,null);
    }
}

module.exports.getuserByFilter=async function(filter,callback){
    try{
        var user=await userModel.find(filter);
        callback(null,user);
    }
    catch(err)
    {
        callback(err,null);
    }
}