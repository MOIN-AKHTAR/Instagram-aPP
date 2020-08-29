const User=require("../Models/UserModel");
const Bcryptjs=require("bcryptjs");
const JWT=require("jsonwebtoken");
const Process=require("../Environment");


exports.CreateUser=(req,res,next)=>{
    const {name,email,password}=req.body;
    User.findOne({email}).then(savedUser=>{
        if(savedUser){
          const error=new Error("Use anyother email");
          error.statusCode=500;
          throw error;
        }else{
        Bcryptjs.hash(password,12).then(hashedPassword=>{
            const user=new User({name,email,password:hashedPassword});
            user.save(doc=>{
                 res.status(200).josn({
                     message:"Saved Successfully!!!",
                     status:true,
                 })
            }).catch(err=>{
                if(err.statusCode){
                    err.statusCode=500;
                }
                next(err);
            })
        })
    }
    }).catch(err=>{
        if(err.statusCode){
            err.statusCode=500;
        }
        next(err);
    })
}




exports.Signin=(req,res,next)=>{
    const {email,password}=req.body;
    User.findOne({emai}).then(doc=>{
        if(!doc){
         const error=new Error("Invaid Email Or Password");
         error.statusCode=404;
         throw error;
        }else{
            Bcryptjs.compare(password,doc.password).then(isMatched=>{
                  if(!isMatched){
                    const error=new Error("Invaid Email Or Password");
                    error.statusCode=404;
                    throw error;
                  }else{
                      const token=JWT.sign({id:doc._id},Process.JWT_SECRET);
                      res.status(200).json({
                          status:true,
                          token
                      })
                  }
            })
        }
    }).catch(err=>{
        if(!err.statusCode){
            err.statusCode=500;
        }
        next(err);
    })
}