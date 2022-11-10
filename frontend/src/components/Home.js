import React,{useState,useEffect} from "react";

import {FcLike} from 'react-icons/fc'
import {AiFillLike,AiFillDislike} from 'react-icons/ai'
const Home=()=>{
  const [data,setData]=useState([])
  useEffect(()=>{
    fetch('/allpost',{
      headers:{
        "Authorization":"Bearer"+localStorage.getItem("jwt")
      }
    }).then(res=>res.json())
    .then(result=>{
      console.log(result)
      setData(result.mypost)
    })
  },[])
  
  return(
    <div className="home">
    {
      data.map(item=>{
        return(
          <div className="card home-card">
              <h5>{item.postedBy.name}</h5>
              <div className="card-image">
                <img alt="" src={item.pic}/>
              </div>
              <div className="card-content">
              <i className="material-icons" style={{color:" hsl(0, 37%, 30%)"}}> <FcLike/> </i>
              <i className="material-icons" style={{color:" hsl(0, 37%, 30%)"}}> <AiFillLike/> </i>
              <i className="material-icons" style={{color:" hsl(0, 37%, 30%)"}}> <AiFillDislike/> </i>
                <h6>{item.title}</h6>
                <p>{item.body}</p>
                <input type="text" placeholder="add a comment" />
              </div>
          </div> 

        )
      })
    }
  </div>

  )
}

export default Home;




    // <div className="card home-card">
    //     <h5>ramesh</h5>
    //     <div className="card-image">
    //       <img alt="" src="https://images.unsplash.com/photo-1664575196044-195f135295df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
    //     </div>
    //     <div className="card-content">
    //     <i className="material-icons" style={{color:" hsl(0, 37%, 30%)"}}>favorite</i>
    //       <h6>title</h6>
    //       <p>Amazing post</p>
    //       <input type="text" placeholder="add a comment" />
    //     </div>
    // </div>
    // <div className="card home-card">
    //     <h5>ramesh</h5>
    //     <div className="card-image">
    //       <img alt="" src="https://images.unsplash.com/photo-1664575196044-195f135295df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
    //     </div>
    //     <div className="card-content">
    //     <i className="material-icons" style={{color:" hsl(0, 37%, 30%)"}}>favorite</i>
    //       <h6>title</h6>
    //       <p>Amazing post</p>
    //       <input type="text" placeholder="add a comment" />
    //     </div>
    // </div>



// import React from "react";
// import "../App.css";

// const Home=()=>{
//   return(
//     <div className="home">
//       <div className="card home-card">
//           <h5>ramesh</h5>
//           <div className="card-image">
//             <img alt="" src="https://images.unsplash.com/photo-1664575196044-195f135295df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
//           </div>
//           <div className="card-content">
//           <i className="material-icons" style={{color:" hsl(0, 37%, 30%)"}}>favorite</i>
//             <h6>title</h6>
//             <p>Amazing post</p>
//             <input type="text" placeholder="add a comment" />
//           </div>
//       </div>
//       <div className="card home-card">
//           <h5>ramesh</h5>
//           <div className="card-image">
//             <img alt="" src="https://images.unsplash.com/photo-1664575196044-195f135295df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
//           </div>
//           <div className="card-content">
//           <i className="material-icons" style={{color:" hsl(0, 37%, 30%)"}}>favorite</i>
//             <h6>title</h6>
//             <p>Amazing post</p>
//             <input type="text" placeholder="add a comment" />
//           </div>
//       </div>
//       <div className="card home-card">
//           <h5>ramesh</h5>
//           <div className="card-image">
//             <img alt="" src="https://images.unsplash.com/photo-1664575196044-195f135295df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
//           </div>
//           <div className="card-content">
//           <i className="material-icons" style={{color:" hsl(0, 37%, 30%)"}}>favorite</i>
//             <h6>title</h6>
//             <p>Amazing post</p>
//             <input type="text" placeholder="add a comment" />
//           </div>
//       </div>
//     </div>
//   )
// }

// export default Home;







// import React,{useState,useEffect,useContext} from 'react'
// import {UserContext} from '../App'
// import {Link} from 'react-router-dom'
// const Home  = ()=>{
//     const [data,setData] = useState([])
//     const {state,dispatch} = useContext(UserContext)
//     useEffect(()=>{
//        fetch('/allpost',{
//            headers:{
//                "Authorization":"Bearer "+localStorage.getItem("jwt")
//            }
//        }).then(res=>res.json())
//        .then(result=>{
//            console.log(result)
//            setData(result.posts)
//        })
//     },[])

//     const likePost = (id)=>{
//           fetch('/like',{
//               method:"put",
//               headers:{
//                   "Content-Type":"application/json",
//                   "Authorization":"Bearer "+localStorage.getItem("jwt")
//               },
//               body:JSON.stringify({
//                   postId:id
//               })
//           }).then(res=>res.json())
//           .then(result=>{
//                    //   console.log(result)
//             const newData = data.map(item=>{
//                 if(item._id===result._id){
//                     return result
//                 }else{
//                     return item
//                 }
//             })
//             setData(newData)
//           }).catch(err=>{
//               console.log(err)
//           })
//     }
//     const unlikePost = (id)=>{
//           fetch('/unlike',{
//               method:"put",
//               headers:{
//                   "Content-Type":"application/json",
//                   "Authorization":"Bearer "+localStorage.getItem("jwt")
//               },
//               body:JSON.stringify({
//                   postId:id
//               })
//           }).then(res=>res.json())
//           .then(result=>{
//             //   console.log(result)
//             const newData = data.map(item=>{
//                 if(item._id===result._id){
//                     return result
//                 }else{
//                     return item
//                 }
//             })
//             setData(newData)
//           }).catch(err=>{
//             console.log(err)
//         })
//     }

//     const makeComment = (text,postId)=>{
//           fetch('/comment',{
//               method:"put",
//               headers:{
//                   "Content-Type":"application/json",
//                   "Authorization":"Bearer "+localStorage.getItem("jwt")
//               },
//               body:JSON.stringify({
//                   postId,
//                   text
//               })
//           }).then(res=>res.json())
//           .then(result=>{
//               console.log(result)
//               const newData = data.map(item=>{
//                 if(item._id===result._id){
//                     return result
//                 }else{
//                     return item
//                 }
//              })
//             setData(newData)
//           }).catch(err=>{
//               console.log(err)
//           })
//     }

//     const deletePost = (postid)=>{
//         fetch(`/deletepost/${postid}`,{
//             method:"delete",
//             headers:{
//                 Authorization:"Bearer "+localStorage.getItem("jwt")
//             }
//         }).then(res=>res.json())
//         .then(result=>{
//             console.log(result)
//             const newData = data.filter(item=>{
//                 return item._id !== result._id
//             })
//             setData(newData)
//         })
//     }
//    return (
//        <div className="home">
//            {
//                data.map(item=>{
//                    return(
//                        <div className="card home-card" key={item._id}>
//                             <h5 style={{padding:"5px"}}><Link to={item.postedBy._id !== state._id?"/profile/"+item.postedBy._id :"/profile"  }>{item.postedBy.name}</Link> {item.postedBy._id === state._id 
//                             && <i className="material-icons" style={{
//                                 float:"right"
//                             }} 
//                             onClick={()=>deletePost(item._id)}
//                             >delete</i>

//                             }</h5>
//                             <div className="card-image">
//                                 <img src={item.photo}/>
//                             </div>
//                             <div className="card-content">
//                             <i className="material-icons" style={{color:"red"}}>favorite</i>
//                             {item.likes.includes(state._id)
//                             ? 
//                              <i className="material-icons"
//                                     onClick={()=>{unlikePost(item._id)}}
//                               >thumb_down</i>
//                             : 
//                             <i className="material-icons"
//                             onClick={()=>{likePost(item._id)}}
//                             >thumb_up</i>
//                             }
                            
                           
//                                 <h6>{item.likes.length} likes</h6>
//                                 <h6>{item.title}</h6>
//                                 <p>{item.body}</p>
//                                 {
//                                     item.comments.map(record=>{
//                                         return(
//                                         <h6 key={record._id}><span style={{fontWeight:"500"}}>{record.postedBy.name}</span> {record.text}</h6>
//                                         )
//                                     })
//                                 }
//                                 <form onSubmit={(e)=>{
//                                     e.preventDefault()
//                                     makeComment(e.target[0].value,item._id)
//                                 }}>
//                                   <input type="text" placeholder="add a comment" />  
//                                 </form>
                                
//                             </div>
//                         </div> 
//                    )
//                })
//            }
          
          
//        </div>
//    )
// }


// export default Home




















// import React from "react";
// import "./Login/About.css";
// import image1 from "./Assets/img/slide/slide-1.jpg";
// import image2 from "./Assets/img/slide/slide-2.jpg";
// import image3 from "./Assets/img/slide/slide-3.jpg";

// function Home(){
//   return(
//       <div>
//        {/* <!-- ======= Hero Section ======= --> */}
//   <section id="hero">
//     <div id="heroCarousel" data-bs-interval="5000" class="carousel slide carousel-fade" data-bs-ride="carousel">
//       <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>
//       <div class="carousel-inner" role="listbox">

//         {/* <!-- Slide 1 --> */}
//       <div class="carousel-item active"
//         style={{
//           backgroundImage: `url(${image1})`,
//           backgroundSize: "cover",
//           height: "100vh",
//            color: "#f5f5f5"
//         }}
//          >
//           <div class="carousel-container">
//             <div class="container">
//               <h2 class="animated fadeInDown">Welcome to <span>Hidayah</span></h2>
//               <p class="animated fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
//               <a href="#about" class="btn-get-started animated fadeInUp scrollto">Read More</a>
//             </div>
//           </div>
//         </div>

//         {/* <!-- Slide 2 --> */}
//         <div class="carousel-item"
//         style={{
//           backgroundImage: `url(${image2})`,
//           backgroundSize: "cover",
//           height: "100vh",
//           color: "#f5f5f5"
//         }}
//           >
//           <div class="carousel-container">
//             <div class="container">
//               <h2 class="animated fadeInDown">Lorem Ipsum Dolor</h2>
//               <p class="animated fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
//               <a href="#about" class="btn-get-started animated fadeInUp scrollto">Read More</a>
//             </div>
//           </div>
//         </div>

//         {/* <!-- Slide 3 --> */}
//         {/* style="background-image: url(assets/img/slide/slide-3.jpg)" */}
//         <div class="carousel-item" 
//         style={{
//           backgroundImage: `url(${image3})`,
//           backgroundSize: "cover",
//           height: "100vh",
//           color: "#f5f5f5"
//         }}
//           >
//           <div class="carousel-container">
//             <div class="container">
//               <h2 class="animated fadeInDown">Sequi ea ut et est quaerat</h2>
//               <p class="animated fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
//               <a href="#about" class="btn-get-started animated fadeInUp scrollto">Read More</a>
//             </div>
//           </div>
//         </div>

//       </div>

//       {/* <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
//         <span class="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
//       </a>
//       <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
//         <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
//       </a> */}
//       <link to="">
        
//       </link>

//     </div>
//   </section>
//   {/* <!-- End Hero --> */}
 
//       </div>
//   );
// }

// export default Home;















// import React ,{useState ,useEffect} from "react";
// import Postt from "./Postt";









// function Home() {
//   const [posts,setPosts] = useState([
//    {
//     username:"Prince Kumar",
//     caption:"wow",
//     imageUrl:"https://img.freepik.com/free-photo/red-yellow-watercolor_95678-448.jpg?size=626&ext=jpg"
//    },
//    {
//     username:"Prashant Kumar",
//     caption:"wow",
//     imageUrl:"https://img.freepik.com/free-photo/red-yellow-watercolor_95678-448.jpg?size=626&ext=jpg"
//    },
//    {
//     username:"Sachin Kumar",
//     caption:"wow",
//     imageUrl:"https://img.freepik.com/free-photo/red-yellow-watercolor_95678-448.jpg?size=626&ext=jpg"
//    }

//   ]);

//   //useEffect -> Runs a piece of code based on a specific condition !!

//   useEffect(()=>{
//     // this is where the code runs 
//   },[posts])
//   // posts me ---> run everytime the variable posts changes !!

//   return (
//     <div className="home">
      
//       {
//         posts.map(postt =>(
//           <Postt username={postt.username} caption={postt.caption} imageUrl={postt.imageUrl}/>
//         ))
//       }
//       {/* <Postt username="prince Kumar" caption="Fuck the react" imageUrl="https://img.freepik.com/premium-vector/abstract-lines-purple-gradient-background_126240-20.jpg?w=740"/>
//       <Postt username="Prashant Kumar" caption="Nice picture" imageUrl="https://img.freepik.com/free-vector/realistic-diwali-diya-banner-with-text-space_1017-33944.jpg?size=626&ext=jpg"/>
//       <Postt username="Sachin Kumar" caption="Awesome" imageUrl="https://img.freepik.com/free-vector/white-gold-geometric-pattern-background-vector_53876-140726.jpg?size=626&ext=jpg"/> */}
//     </div>
//   );
// }

// export default Home;






/* <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://www.freepik.com/premium-vector/diwali-festival-patterned-background-vector_25425121.htm#query=background&position=12&from_view=keyword"
              alt="some random pic"
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Home</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>

          </div>
        </div>
      </div> */




























// import React from "react";
// // import Post from "./blog/Post";
// import "./home.css";

// function Home() {
//   return (
//     // 
    
//     <div className="post">
//     <div className="image__1">
//        <img src="https://img.freepik.com/free-vector/mysterious-gangster-character-illustration_23-2148460670.jpg?w=40&t=st=1667397153~exp=1667397753~hmac=2a05436d747db5fcf68238051262973c298607465beebb48cedb5f07b3913a1d"/>
//        <h5 className="h5">Hello</h5>
//     </div>
    
//       {/* header -> avatar + username */}
//       <img className="post_image" src="https://img.freepik.com/free-photo/trees-each-other-forest-covered-by-creeping-mist_181624-16397.jpg?w=900&t=st=1667397576~exp=1667398176~hmac=1942c8e329cab112fe328944295e445dd9b44c337b462d0507ad75778cdb41d4" alt="random pic"/>
//       {/* image */}
//       <h6 className="post_text"><strong>Prashant </strong> &nbsp; this is comment</h6>
       
//       {/*Username +caption*/}
      
//     </div>
//   );
// }

// export default Home;











/* <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Home</h1>
            <p>
             
            </p>
          </div>
        </div>
      </div> */