const mongoose=require("mongoose");

const userScheme=new mongoose.Schema({
    username:{type:String,required:true,unique:true},
    yearOfGraduation:{type:Number,min:2000,max:9000},
    createdAt:{type:Date,default:Date.now},
    isDeleted:{type:Boolean,default:false}
});

module.exports=mongoose.model("user",userScheme);