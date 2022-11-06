

import React, { useState } from "react";
// import ReactDOM from "react-dom";
import "./Login.css";

function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Login</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default Login;














// import React, { useState } from "react";

// import Form from "react-bootstrap/Form";

// import Button from "react-bootstrap/Button";

// // import "./Login.css";

// export default function Login(){

//   const [email, setEmail] = useState("");

//   const [password, setPassword] = useState("");

//   function validateForm() {

//     return email.length > 0 && password.length > 0;

//   }

//   function handleSubmit(event) {

//     event.preventDefault();

//   }

//   return (

//     <div className="Login">

//       <Form onSubmit={handleSubmit}>

//         <Form.Group size="lg" controlId="email">

//           <Form.Label>Email</Form.Label>
            
//           <Form.Control autoFocus type="email" value={email}  onChange={(e) => setEmail(e.target.value)} />

//         </Form.Group>

//         <Form.Group size="lg" controlId="password">

//           <Form.Label>Password</Form.Label>

//           <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)}

//           />

//         </Form.Group>

//         <Button block size="lg" type="submit"  disabled={!validateForm()}>
//           Login
//         </Button>

//       </Form>

//     </div>

//   );

// }