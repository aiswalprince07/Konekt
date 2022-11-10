require('dotenv').config();
const express =require("express");
const app =express();
const path=require("path");
const hbs=require("hbs");
const bcrypt=require("bcryptjs");
const reqireLogin=require("./middleware/reqireLogin");

require("./db/conn");


const User=require('./models/registers')  
const Post=require('./models/post')


const jwt=require("jsonwebtoken");
const { pseudoRandomBytes } = require('crypto');

const cookieParser=require("cookie-parser"); 
const auth=require("./middleware/auth");
const port=process.env.PORT || 3002;
 


const static_path=path.join(__dirname,"../public");
const templates_path=path.join(__dirname,"../templates/views");
const partials_path=path.join(__dirname,"../templates/partials");

app.use(express.json());// middle way
app.use(express.urlencoded({extended:false})); 

app.use(express.static(static_path));

//-----------------
app.use(cookieParser());

app.set("view engine","hbs");
app.set("views",templates_path);

hbs.registerPartials(partials_path);

app.get("/",auth,(req,res)=>{
    res.send("<h1>hello this is our Home Page</h1>");
}); 
 
app.get("/index",auth,(req,res)=>{
    // res.send("<h1>hello this is our Home Page</h1>");
        // res.status(201).render("index");
}) 

app.get("/signin",(req,res)=>{
    // res.status(201).render("login");
}) 
app.get("/signup",(req,res)=>{
    // res.status(201).render("register");
})


//LOGOUT
app.get("/logout",auth, async(req,res)=>{   // CHECKING user genuin or not in middle way
    try {
        res.clearCookie("jwt");
        await req.user.save();
        console.log("successfully logout");
    //     res.render("login",{
    //         flag:false,
    // });
    res.status(201).json({message:"You are logout"});
    } catch (error) {
        res.status(401).json({message:"You are not Signin"});
    } 
}) 


app.post("/signup",async(req,res)=>{

    try {
        const password=req.body.password;
        const cpassword=req.body.confirmpassword;
        // console.log(password);
        // console.log(cpassword);

        if(password==cpassword){
            const registerVillager = new User({
                
                fullname :req.body.fullname,
                email:req.body.email,
                password:password,
                confirmpassword:cpassword,
                // fullname :"Prashant",
                // email:"pkg@gmail.com",
                // password:"1234",
                // confirmpassword:"1234",
            })
            const token=await registerVillager.generateAuthToken();
            res.cookie("jwt",token,{
                expires:new Date(Date.now()+300000),
                httpOnly:true, 
                // secure:true 
            })
            console.log(registerVillager);
            const registered= await registerVillager.save();
            res.status(201).json({message:"saved successfully"});
            // res.status(201).render("index",{
            //     flag:true,
            //     username:`${req.body.fullname}`,
            // }); 
        }
        else{
            // console.log("error"); 
            res.json({message:"passwords are not matching"});
        }
    } catch (error) {
        res.send(400).send("error");
    }
})

 
app.post("/signin",async(req,res)=>{
    try {
        console.log("in backend");
        const email=req.body.email;
        const password=req.body.password;
        // console.log(`${email} + ${password}`);
        
        const useremail= await User.findOne({email:email});
        if(useremail==null){
            res.status(400).json({message:"email does not exist",error:true});
        }else{

            const ismatch= await bcrypt.compare(password,useremail.password);
            
            const token=await useremail.generateAuthToken();
            res.cookie("jwt",token,{
                    expires:new Date(Date.now()+3000000),
                    httpOnly:true
                    // secure:true   
                })
                
        
        if(ismatch){
            const str=useremail.fullname;
            const upper=str.toUpperCase();
            res.status(201).json({message:"successfully login"});
            // res.status(201).render("index",{
                //     flag:true,
                //     username:`${upper}`,
                // });
        }else{
            res.status(400).json({message:"invalid login Detials"});
        }
        }
    } catch (error) {
        res.status(400).json({message:"invalid login Detials"});
    } 
})



app.post('/createpost',reqireLogin,async(req,res)=>{
    try {
        console.log("sfsff");
        const createPost=new Post({
            title :req.body.title,
            body:req.body.body,
            pic:req.body.pic,
            postedBy:req.user
        })
        
        console.log(createPost);
        const registered= await createPost.save();
        res.status(201).json({message:"Image successfully post"});
        
    } catch (error) {
        res.status(400).json({message:"invalid login Detials",error:true});
    }
})

app.get('/mypost',reqireLogin,async(req,res)=>{
    try {
        const mypost=Post.find({postedBy:req.user._id});
        res.send({mypost});
    } catch (error) {
        res.status(400).json({message:"invalid Mypost request"});
    }
})

app.listen(port,()=>{
    console.log(`successfully work! on Port: ${port}`);
}) 