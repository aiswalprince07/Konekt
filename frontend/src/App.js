import React ,{useEffect,createContext,useReducer,useContext} from "react";
import NavBar from "./components/Navbar";
import {BrowserRouter,Route, Routes,useNavigate} from "react-router-dom";
import Home from './components/Home'
import Signin from './components/SignIn'
import Profile from './components/Profile'
import Signup from './components/Signup'
import CreatePost from './components/CreatePost'
import {reducer,initialState} from './reducers/userReducer'
// import UserProfile from './components/UserProfile'
// import SubscribedUserPosts from './components/SubscribesUserPosts'
// import Reset from './components/Reset'

export const UserContext=createContext() 

const Routing=()=>{
  let navigate=useNavigate();
  const {state,dispatch}=useContext(UserContext);
  useEffect(()=>{
    const user=JSON.parse(localStorage.getItem("user"));
    dispatch({type:"USER",payload:user});
    if(user){
      navigate("/");
    }else{
      navigate("/signin");
    }
  },[])

  return (
    <Routes>
    <Route exact path="/" element={<Home />} /> 
      <Route path="/signin" element={<Signin />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/profile" element={<Profile />}/>
      <Route path="/create" element={<CreatePost />}/>
    </Routes>
  );
}

function App(){
  const [state,dispatch]=useReducer(reducer,initialState);
    return(
      <UserContext.Provider value={{state,dispatch}}>
        <div>
          <BrowserRouter>
            <NavBar/>
            <Routing/>
          </BrowserRouter>
        </div>
      </UserContext.Provider>
    )
}
export default App;












// {/* <Route path="/profile/:userid" element={<UserProfile/>}/> */}
// {/* <Route path="/myfollowingpost" element={<SubscribedUserPosts />}/> */}
// {/* <Route path="/reset" element={<Reset />}/> */}
// {/* //       <Route path="/reset/:token" element={<NewPassword />}/> */}







// import React,{useEffect,createContext,useReducer,useContext} from 'react';
// import NavBar from './components/Navbar'
// import "./App.css"
// import {BrowserRouter,Route,Routes,useNavigate} from 'react-router-dom'
// import Home from './components/Home'
// import Signin from './components/SignIn'
// import Profile from './components/Profile'
// import Signup from './components/Signup'
// import CreatePost from './components/CreatePost'
// import {reducer,initialState} from './components/reducers/userReducer'
// import UserProfile from './components/UserProfile'
// import SubscribedUserPosts from './components/SubscribesUserPosts'
// import Reset from './components/Reset'
// import NewPassword from './components/Newpassword'
// export const UserContext = createContext()


// const Routing = ()=>{
//   const history = useNavigate()
//   const {state,dispatch} = useContext(UserContext)
//   useEffect(()=>{
//     const user = JSON.parse(localStorage.getItem("user"))
//     if(user){
//       dispatch({type:"USER",payload:user})
//     }else{
//       if(!history.location.pathname.startsWith('/reset'))
//            history.push('/signin')
//     }
//   },[])
//   return(
//     <Routes>
//      <Route path="/" element={<Home />} /> 
//       <Route path="/signin" element={<Signin />}/>
//       <Route path="/signup" element={<Signup />}/>
//       <Route path="/profile" element={<Profile />}/>
//       <Route path="/create" element={<CreatePost />}/>
//       <Route path="/profile/:userid" element={<UserProfile/>}/>
//       <Route path="/myfollowingpost" element={<SubscribedUserPosts />}/>
//       <Route path="/reset" element={<Reset />}/>
//       <Route path="/reset/:token" element={<NewPassword />}/>
      
//     </Routes>
//   )
// }

// function App() {
//   const [state,dispatch] = useReducer(reducer,initialState)
//   return (
//     <UserContext.Provider value={{state,dispatch}}>
//     <BrowserRouter>
//       <NavBar />
//       <Routing />
      
//     </BrowserRouter>
//     </UserContext.Provider>
//   );
// }

// export default App;






















// // import { render } from "@testing-library/react";
// import React from "react";

// class App extends React.Component{
//     constructor(props){
//       super(props);
//       this.state = {apiResponse:""};
//     }
//     callAPI(){
//       fetch("https://localhost:9000/testAPI")
//       .then(res=>res.text())
//       .then(res => this.setState({apiResponse:res}));
//     }
//     componentWillMount(){
//       this.callAPI();
//     }
//     render(){
//         return(
//             <div>
//             <p>{this.state.apiResponse}</p>
//             <p>Hello i am App.js</p>
//             </div>
//         );
//     }
// }

// export default App;


