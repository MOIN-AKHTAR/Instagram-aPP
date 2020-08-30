const PostModel=require("../Models/PostModel");

exports.CreatePost=(req,res,next)=>{
    const {title,body,photo}=req.body;
    new PostModel({title,body,photo,postedBy:req.user._id}).save().then(doc=>{
        res.status(200).json({
            status:true,
            doc
        })
    }).catch(err=>{
        err.statusCode=500;
        next(err);
    })
}


exports.GetAll=(req,res,next)=>{
    PostModel.find({}).then(doc=>res.status(200).json({
        docs:doc,
        count:doc.length,
        status:true
    })).catch(err=>{
        err.statusCode=500;
        next(err);
    })
}


exports.GetSinglePost=(req,res,next)=>{
    PostModel.find({postedBy:req.user._id}).populate("postedBt","_id name").then(doc=>{
        if(!doc){
            const error=new Error("Post Not Found");
            error.statusCode=404;
            throw error;
        }else{
            res.status(200).json({
                doc,
                status:true
            })
        }
    }).then(err=>{
        next(err);
    })
}