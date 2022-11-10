import React, { useState } from "react";
// import "../App.css";
import {Link, useNavigate} from "react-router-dom";
import M from 'materialize-css'
const Signup=()=>{
    let navigate=useNavigate();
    const [fullName,setfullname]=useState("");
    const [email,setemail]=useState("");
    const [password,setpasssword]=useState("");
    const [passwordconfirm,setpassswordconfirm]=useState("");
  

    const inputEvent=(event)=>{
        setfullname(event.target.value);   
    };
      const inputEventemail=(event)=>{ 
        setemail(event.target.value);   
    };
      const inputEventpassword=(event)=>{
        setpasssword(event.target.value);   
    };
      const inputEventpasswordconfirm=(event)=>{
        setpassswordconfirm(event.target.value);   
    };
    
  
    const onSubmit=(event)=>{
        // for prevent default referace behavior
        event.preventDefault();
        console.log("haaay")
        fetch("/signup",{
          method:"post",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            fullname:fullName,
            email:email,
            password:password,
            confirmpassword:passwordconfirm
          })
        }).then(res=>res.json())
        .then(data=>{
          if(data.error){
            M.toast({html:data.error,classes:"#c62828 red darken-3"});  
            // alert("form unsubmitted");
          }else{
            console.log(data.message);
            if(data.message==="passwords are not matching"){
                M.toast({html:data.message,classes:"#c62828 red darken-3"});  
            }else{
                M.toast({html:data.message,classes:"#43a047 green darken-1"});  
            }
            navigate.push('/signin');
          }
        })
    
        // console.log(fullName);
      };
    

  return(
    <form onSubmit={onSubmit}>
   <div onSubmit={onSubmit} className="mycard">
    <div className="card auth-card input-field">
    <h2>Konekt</h2>
    <input
        type="text"
        placeholder="name"
        onChange={inputEvent}
        value={fullName}
    />
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
    <input
        type="Password"
        placeholder="Confirm Password"
        onChange={inputEventpasswordconfirm} 
        value={passwordconfirm}
    />
    <button class="btn waves-effect waves-light">
        Signup
    </button>
    <h5>
    <Link to="/signin"> Already have an account?</Link>
    </h5>
    </div>
   </div>
   </form>
  )
}

export default Signup;










