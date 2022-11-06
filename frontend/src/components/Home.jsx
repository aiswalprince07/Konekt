import React ,{useState ,useEffect} from "react";
import Postt from "./Postt";


function Home() {
  const [posts,setPosts] = useState([
   {
    username:"Prince Kumar",
    caption:"wow",
    imageUrl:"https://img.freepik.com/free-photo/red-yellow-watercolor_95678-448.jpg?size=626&ext=jpg"
   },
   {
    username:"Prashant Kumar",
    caption:"wow",
    imageUrl:"https://img.freepik.com/free-photo/red-yellow-watercolor_95678-448.jpg?size=626&ext=jpg"
   },
   {
    username:"Sachin Kumar",
    caption:"wow",
    imageUrl:"https://img.freepik.com/free-photo/red-yellow-watercolor_95678-448.jpg?size=626&ext=jpg"
   }

  ]);

  //useEffect -> Runs a piece of code based on a specific condition !!

  useEffect(()=>{
    // this is where the code runs 
  },[posts])
  // posts me ---> run everytime the variable posts changes !!
  
  return (
    <div className="home">
      
      {
        posts.map(postt =>(
          <Postt username={postt.username} caption={postt.caption} imageUrl={postt.imageUrl}/>
        ))
      }
      {/* <Postt username="prince Kumar" caption="Fuck the react" imageUrl="https://img.freepik.com/premium-vector/abstract-lines-purple-gradient-background_126240-20.jpg?w=740"/>
      <Postt username="Prashant Kumar" caption="Nice picture" imageUrl="https://img.freepik.com/free-vector/realistic-diwali-diya-banner-with-text-space_1017-33944.jpg?size=626&ext=jpg"/>
      <Postt username="Sachin Kumar" caption="Awesome" imageUrl="https://img.freepik.com/free-vector/white-gold-geometric-pattern-background-vector_53876-140726.jpg?size=626&ext=jpg"/> */}
    </div>
  );
}

export default Home;


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