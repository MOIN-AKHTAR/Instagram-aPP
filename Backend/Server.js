const Express=require("express");
const Mongoose=require("mongoose");
const bodyParser = require("body-parser");
const Process=require("./Environment");
const UserRoute=require("./Routes/UserRoute")

// Making App As Express App-
const App=Express();

// Parsing Body-
App.use(bodyParser.urlencoded({extended:false}));


App.use("/api/v1/user",UserRoute);

Mongoose.connect(Process.MongoURI,{
    useCreateIndex:true,
    useFindAndModify:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
},(err)=>{
    if(err){
        const error=new Error(err.message);
        error.statusCode=500;
        throw error;
    }else{
        console.log("Connected To DB :)");
    }
})


// Path Not Found Middleware
App.all("*",(req,res,next)=>{
    res.status(404).json({
        message:"Coudn't Find Path",
        status:false
    })
})

// Error Middleware
App.use((err,req,res,next)=>{
    const errors=err.errors;
    const message=err.message;
    const statusCode=err.statusCode || 500;
    const status=false;
    res.status(statusCode).json({
        message,
        errors,
        status
    })
})

const Port=Process.PORT || 5000;
App.listen(Port,()=>{
    console.log("Server Is Running At Port "+Port);
})