import React from 'react';
import "./postt.css";


function Postt({username,caption , imageUrl}){
    return(
        <div className="post">
           <div className="post_header">
              <img src="https://img.freepik.com/free-vector/mysterious-gangster-character-illustration_23-2148460670.jpg?w=40&t=st=1667397153~exp=1667397753~hmac=2a05436d747db5fcf68238051262973c298607465beebb48cedb5f07b3913a1d"/>
              <h5 className="h5">{username}</h5>
           </div>
            
             {/* header -> avatar + username */}
             <img className="post_image" src={imageUrl} alt="random pic"/>
             {/* image */}
              <h6 className="post_text"><strong>Prashant </strong> &nbsp; {caption}</h6>
               
             {/*Username +caption*/}
              
            </div>
    );
}
export default Postt;