const mongoose =require("mongoose");
const jwt=require("jsonwebtoken");

// const Users= mongoose.model("User");
const User=require('../models/registers')


const requireLogin=async(req,res, next)=>{
    try{
        // console.log("dfdf");
        const token=req.cookies.jwt;   //token which are present in pc 
        // console.log(token);
        const verifyUser=jwt.verify(token,process.env.SECRET_KEY);
        // console.log(verifyUser);
        // console.log("varified User")
        
        const user= await User.findOne({_id:verifyUser._id});
        console.log(user)

        req.user=user;
        next();
    }catch(error){
        // console.log("error hai bhai");
        res.status(401).json({message:"You are not Signin"});
        // res.status(401).send(error);
    } 
}
module.exports=requireLogin;