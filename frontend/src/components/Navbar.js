import React from "react";
import "../App.css";
import {Link} from "react-router-dom"


const NavBar =()=>{
    return(
      <nav>
        <div className="nav-wrapper white">
      <a to="/" className="brand-logo left">Konekt</a>
      <ul id="nav-mobile" className="right">
        <li><Link to="/signin">Signin</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
      </div>
      </nav>
    )
}
export default NavBar;















// import React,{useContext,useRef,useEffect,useState} from 'react'
// import {Link ,useNavigate} from 'react-router-dom'
// import {UserContext} from '../App'
// import M from 'materialize-css'
// const NavBar = ()=>{
//     const  searchModal = useRef(null)
//     const [search,setSearch] = useState('')
//     const [userDetails,setUserDetails] = useState([])
//      const {state,dispatch} = useContext(UserContext)
//      const history = useNavigate()
//      useEffect(()=>{
//          M.Modal.init(searchModal.current)
//      },[])
//      const renderList = ()=>{
//        if(state){
//            return [
//             <li key="1"><i  data-target="modal1" className="large material-icons modal-trigger" style={{color:"black"}}>search</i></li>,
//             <li key="2"><Link to="/profile">Profile</Link></li>,
//             <li key="3"><Link to="/create">Create Post</Link></li>,
//             <li key="4"><Link to="/myfollowingpost">My following Posts</Link></li>,
//             <li  key="5">
//              <button className="btn #c62828 red darken-3"
//             onClick={()=>{
//               localStorage.clear()
//               dispatch({type:"CLEAR"})
//               history.push('/signin')
//             }}
//             >
//                 Logout
//             </button>
//             </li>
         
            
//            ]
//        }else{
//          return [
//           <li  key="6"><Link to="/signin">Signin</Link></li>,
//           <li  key="7"><Link to="/signup">Signup</Link></li>
         
//          ]
//        }
//      }


//      const fetchUsers = (query)=>{
//         setSearch(query)
//         fetch('/search-users',{
//           method:"post",
//           headers:{
//             "Content-Type":"application/json"
//           },
//           body:JSON.stringify({
//             query
//           })
//         }).then(res=>res.json())
//         .then(results=>{
//           setUserDetails(results.user)
//         })
//      }
//     return(
//         <nav>
//         <div className="nav-wrapper white">
//           <Link to={state?"/":"/signin"} className="brand-logo left">Instagram</Link>
//           <ul id="nav-mobile" className="right">
//              {renderList()}
  
//           </ul>
//         </div>
//         <div id="modal1" className="modal" ref={searchModal} style={{color:"black"}}>
//           <div className="modal-content">
//           <input
//             type="text"
//             placeholder="search users"
//             value={search}
//             onChange={(e)=>fetchUsers(e.target.value)}
//             />
//              <ul className="collection">
//                {userDetails.map(item=>{
//                  return <Link to={item._id !== state._id ? "/profile/"+item._id:'/profile'} onClick={()=>{
//                    M.Modal.getInstance(searchModal.current).close()
//                    setSearch('')
//                  }}><li className="collection-item">{item.email}</li></Link> 
//                })}
               
//               </ul>
//           </div>
//           <div className="modal-footer">
//             <button className="modal-close waves-effect waves-green btn-flat" onClick={()=>setSearch('')}>close</button>
//           </div>
//         </div>
//       </nav>
//     )
// }


// export default NavBar










// import React from "react";
// import { NavLink } from "react-router-dom";

// const styles={

// }


// function Navigation() {
//   return (
//     <div className="navigation">
//       <nav className="navbar navbar-expand navbar-dark bg-dark">
//         <div className="container">
//           <NavLink className="navbar-brand" style={styles} to="/">
//             Konekt
//           </NavLink>
//           <div>
//             <ul className="navbar-nav ml-auto">
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/">
//                   Home
//                   <span className="sr-only">(current)</span>
//                 </NavLink>
//               </li>
//               {/* <li className="nav-item">
//                 <NavLink className="nav-link" to="/blog">
//                   Blog
//                 </NavLink>
//               </li> */}
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/group">
//                   Group 
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/about">
//                   About
//                 </NavLink>
//               </li>
//               {/* <li className="nav-item">
//                 <NavLink className="nav-link" to="/contact">
//                   Contact
//                 </NavLink>
//               </li> */}
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/Login">
//                   Login
//                 </NavLink>
//               </li>
              
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navigation;


























// import React from "react";
// import Home from "./components/Home"
// import About from "./components/About"
// import Contact from "./components/Contact"
// import Footer from "./components/Footer"
// import {Route ,Link } from "react-router-dom"
// import Navbar from "./Navbar";

// function App(){
//     return(
//         <div className="App">
//         <Navbar/>
        
//          <Route exact path="/" component={Home}/>
//          <Route exact path ="/about" component={About}/>
//          <Route exact path="/footer" component={Footer}/>
//          <Route exact path="/Contact" component={Contact}/>

//          {/* <Home/>
//          <About/>
//          <Contact/>
//          <Footer/> */}

//         </div>
//     );
// }
// export default App;






















// import React from 'react';
// import Post from './components/Home';

// function App(){
//     return(
//         <div className='app'>
//             <div className='app__headerImage'>
//                 <img
//                     className='app_headerImage'
//                     src=""
//                     alt=""
//                 />
//             </div>
        
//             <Post username="Prince" caption ="this is insane" imagerUrl="https://www.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_11342065.htm#&position=21&from_view=popular"/>
//             <Post username="Sachin" caption="this is awesome" imageUrl="https://www.freepik.com/free-photo/house-isolated-field_10025444.htm#&position=42&from_view=popular"/>
//         </div>
//     );
// }
// export default App;