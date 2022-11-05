const mongoose =require("mongoose");
// const Users= mongoose.model("User");
const User=require('../models/registers')


const requireLogin=async(req,res, next)=>{
    try{
        const token=req.cookies.jwt;   //token which are present in pc 
        const verifyUser=jwt.verify(token,process.env.SECRET_KEY);
        console.log("varified User")
        
        const user= await User.findOne({_id:verifyUser._id});
        console.log(user)

        req.user=user;
        next();
    }catch(error){
        res.status(401).send(error);
    } 
}
module.exports=requireLogin;