import React from "react";
import Post from "./blog/Post";
import "./home.css";

function Home() {
  return (
    // 
    
    <div className="post">
    <div className="image__1">
       <img src="https://img.freepik.com/free-vector/mysterious-gangster-character-illustration_23-2148460670.jpg?w=40&t=st=1667397153~exp=1667397753~hmac=2a05436d747db5fcf68238051262973c298607465beebb48cedb5f07b3913a1d"/>
       <h5 className="h5">Username</h5>
    </div>
    
      {/* header -> avatar + username */}
      <img className="post_image" src="https://img.freepik.com/free-photo/trees-each-other-forest-covered-by-creeping-mist_181624-16397.jpg?w=900&t=st=1667397576~exp=1667398176~hmac=1942c8e329cab112fe328944295e445dd9b44c337b462d0507ad75778cdb41d4" alt="random pic"/>
      {/* image */}
      <h6 className="post_text"><strong>Prashant </strong> &nbsp; this is comment</h6>
       
      {/*Username +caption*/}

    </div>
  );
}

export default Home;











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