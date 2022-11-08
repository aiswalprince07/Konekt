import React from "react";

const Profile=()=>{
  return(
    <div style={{maxWidth:"350px",margin:"0px auto"}}>
        <div style={{
            display:"flex",
            justifyContent:"space-around",
            margin:"18px 0px",
            borderBottom:"1px solid grey"
        }}>
            <div>
                <img alt="" style={{width:"160px",height:"160px",borderRadius:"80px"}}
                src="https://images.unsplash.com/photo-1519625594242-7db544018926?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBlcnNvbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=400&q=60"
                />
            </div>
            <div>
                <h4>Prashant's Gf</h4>
                <div style={{display:"flex",justifyContent:"space-between",width:"108%"}}>
                    <h6>40 Posts</h6>
                    <h6>40 followers</h6>
                    <h6>40 following</h6>
                </div>
            </div>
        </div>
        <div className="gallery">
        <img alt="" className="item" style={{width:"160px",height:"160px",borderRadius:"80px"}}
                src="https://images.unsplash.com/photo-1519625594242-7db544018926?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBlcnNvbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=400&q=60"
                />
         <img alt="" className="item" style={{width:"160px",height:"160px",borderRadius:"80px"}}
                src="https://images.unsplash.com/photo-1519625594242-7db544018926?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBlcnNvbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=400&q=60"
                />
        <img alt="" className="item" style={{width:"160px",height:"160px",borderRadius:"80px"}}
                src="https://images.unsplash.com/photo-1519625594242-7db544018926?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBlcnNvbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=400&q=60"
                />
        <img alt="" className="item" style={{width:"160px",height:"160px",borderRadius:"80px"}}
                src="https://images.unsplash.com/photo-1519625594242-7db544018926?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBlcnNvbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=400&q=60"
                />
                
                
        </div>
    </div>
  )
}

export default Profile;


















// import React,{useEffect,useState,useContext} from 'react'
// import {UserContext} from '../App'

// const Profile  = ()=>{
//     const [mypics,setPics] = useState([])
//     const {state,dispatch} = useContext(UserContext)
//     const [image,setImage] = useState("")
//     useEffect(()=>{
//        fetch('/mypost',{
//            headers:{
//                "Authorization":"Bearer "+localStorage.getItem("jwt")
//            }
//        }).then(res=>res.json())
//        .then(result=>{
//            console.log(result)
//            setPics(result.mypost)
//        })
//     },[])
//     useEffect(()=>{
//        if(image){
//         const data = new FormData()
//         data.append("file",image)
//         data.append("upload_preset","insta-clone")
//         data.append("cloud_name","cnq")
//         fetch("https://api.cloudinary.com/v1_1/cnq/image/upload",{
//             method:"post",
//             body:data
//         })
//         .then(res=>res.json())
//         .then(data=>{
    
       
//            fetch('/updatepic',{
//                method:"put",
//                headers:{
//                    "Content-Type":"application/json",
//                    "Authorization":"Bearer "+localStorage.getItem("jwt")
//                },
//                body:JSON.stringify({
//                    pic:data.url
//                })
//            }).then(res=>res.json())
//            .then(result=>{
//                console.log(result)
//                localStorage.setItem("user",JSON.stringify({...state,pic:result.pic}))
//                dispatch({type:"UPDATEPIC",payload:result.pic})
//                //window.location.reload()
//            })
       
//         })
//         .catch(err=>{
//             console.log(err)
//         })
//        }
//     },[image])
//     const updatePhoto = (file)=>{
//         setImage(file)
//     }
//    return (
//        <div style={{maxWidth:"550px",margin:"0px auto"}}>
//            <div style={{
//               margin:"18px 0px",
//                borderBottom:"1px solid grey"
//            }}>

         
//            <div style={{
//                display:"flex",
//                justifyContent:"space-around",
              
//            }}>
//                <div>
//                    <img style={{width:"160px",height:"160px",borderRadius:"80px"}}
//                    src={state?state.pic:"loading"}
//                    />
                 
//                </div>
//                <div>
//                    <h4>{state?state.name:"loading"}</h4>
//                    <h5>{state?state.email:"loading"}</h5>
//                    <div style={{display:"flex",justifyContent:"space-between",width:"108%"}}>
//                        <h6>{mypics.length} posts</h6>
//                        <h6>{state?state.followers.length:"0"} followers</h6>
//                        <h6>{state?state.following.length:"0"} following</h6>
//                    </div>

//                </div>
//            </div>
        
//             <div className="file-field input-field" style={{margin:"10px"}}>
//             <div className="btn #64b5f6 blue darken-1">
//                 <span>Update pic</span>
//                 <input type="file" onChange={(e)=>updatePhoto(e.target.files[0])} />
//             </div>
//             <div className="file-path-wrapper">
//                 <input className="file-path validate" type="text" />
//             </div>
//             </div>
//             </div>      
//            <div className="gallery">
//                {
//                    mypics.map(item=>{
//                        return(
//                         <img key={item._id} className="item" src={item.photo} alt={item.title}/>  
//                        )
//                    })
//                }

           
//            </div>
//        </div>
//    )
// }


// export default Profile