import React from "react";
// import "../App.css";
import {Link} from "react-router-dom";
const Signup=()=>{
  return(
   <div className="mycard">
    <div className="card auth-card input-field">
    <h2>Konekt</h2>
    <input
        type="text"
        placeholder="name"
    />
    <input
        type="text"
        placeholder="email"
    />
    <input
        type="Password"
        placeholder="Password"
    />
    <button class="btn waves-effect waves-light">
        Signup
    </button>
    <h5>
    <Link to="/signin"> Already have an account?</Link>
    </h5>
    </div>
   </div>
  )
}

export default Signup;










