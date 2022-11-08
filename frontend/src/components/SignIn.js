import React from "react";
// import "../App.css";
import {Link} from "react-router-dom";
const Signin=()=>{
  return(
   <div className="mycard">
    <div className="card auth-card input-field">
    <h2>Konekt</h2>
    <input
        type="text"
        placeholder="email"
    />
    <input
        type="Password"
        placeholder="Password"
    />
    <button class="btn waves-effect waves-light">
        Login
    </button>
    <h5>
        <Link to="/signup">Don't have an Account?</Link>
    </h5>
    </div>
   </div>
  )
}

export default Signin;


