import React from "react";
import { NavLink } from "react-router-dom";


function Navigation() {
    const styles={
        fontSize:"28px",
        padding : "0 0px"
    }
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" style={styles} to="/">
            Konekt
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/blog">
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;


























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