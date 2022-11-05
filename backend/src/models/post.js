const mongoose =require("mongoose");
const {ObjectId}=mongoose.Schema.Types




const postSchema=new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    body:{
        type:String,
        require:true
    },
    photo:{
        type:String,
        default:"No photo"
    },
    postedBy:{
        type:ObjectId,
        ref:"User"
    }

})

// middle way before save
// postSchema.pre("save",async function(next){
//     User.findById(_id).then(userdata=>{
//         this.postedBy=userdata
//     })
//     next();
// })

const Post= new mongoose.model("Post",postSchema);
module.exports=Post;