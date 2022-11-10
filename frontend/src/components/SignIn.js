import React, { useState } from "react";
// import "../App.css";
import {Link, useNavigate} from "react-router-dom";
import M from 'materialize-css'
const Signin=()=>{
    let navigate=useNavigate();
    const [email,setemail]=useState("");
    const [password,setpasssword]=useState("");

    const inputEventemail=(event)=>{
        setemail(event.target.value);   
    };
      const inputEventpassword=(event)=>{
        setpasssword(event.target.value);   
    };


    const onSubmit=(event)=>{
        // for prevent default referace behavior
        event.preventDefault();
        console.log(email);
        console.log(password);
        fetch("/signin",{
          method:"post",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            email:email,
            password:password,
          })
        }).then(res=>res.json())
        .then(data=>{
          if(data.error){
            M.toast({html:data.message,classes:"#c62828 red darken-3"});  
          }else{
            console.log(data.message);
            if(data.message==="passwords are not matching"){
                M.toast({html:data.message,classes:"#c62828 red darken-3"});  
            }else{
                M.toast({html:data.message,classes:"#43a047 green darken-1"});  
            }
            navigate("/profile");
          }
        })
    
      };

  return(
   <form onSubmit={onSubmit} className="mycard">
    <div className="card auth-card input-field">
    <h2>Konekt</h2>
    <input
        type="text"
        placeholder="email"
        onChange={inputEventemail} 
        value={email}
    />
    <input
        type="Password" 
        placeholder="Password"
        onChange={inputEventpassword} 
        value={password}
    />
    <button class="btn waves-effect waves-light">
        Login
    </button> 
    <h5>
        <Link to="/signup">Don't have an Account?</Link>
    </h5>
    </div>
   </form>
  )
}

export default Signin;


