const Mongoose=require("mongoose");

const Schema=Mongoose.Schema;

const UserSchema=Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{
    timeStamps:true
});

module.exports=Mongoose.model("User",UserSchema);