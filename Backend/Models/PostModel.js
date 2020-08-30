const Mongoose=require("mongoose");

const Schema=Mongoose.Schema;

const UserSchema=Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        default:"No Photo"
    },
    postedBy:{
        type:Mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{
    timeStamps:true
});

module.exports=Mongoose.model("User",UserSchema);