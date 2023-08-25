import React,{useEffect, useState} from "react";
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Dashboard from "./pages/Dashboard"
import Profile from "./pages/Profile"
import {BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom"
import Sidebar from "./pages/Sidebar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import NavBar from "./pages/NavBar";

function App() {
  const [toggle,settoggle] = useState(true)
  const [location,setlocation] = useState("")
 
    const setToggle = () => {
        settoggle(!toggle)
    }

    useEffect(() => {
      setlocation(window.location.pathname);
      console.log(localStorage.getItem('usertoken')); 
    }, [])
    
    
  return (
    <div className="App">
      <Router>
      <div className="container-fluid min-vh-100 bg-secondary">
            <div className="row">
                {toggle && location!='/signup' && location!='/login' &&  <>
                <div className="col-4 col-md-2 bg-white vh-100 position-fixed">
                    <Sidebar/>
                </div>
                <div className="col-4 col-md-2"></div>
                </>
                }

                <div className="col p-0">
                  {location!='/signup' && location!='/login' &&
                    <NavBar togglenav={setToggle}/>
                  }
                          <Routes>
                            <Route exact path='/' element={<Dashboard/>}/>            
                            <Route exact path='/profile' element={<Profile/>}/>            
                            <Route exact path='/signup' element={<Signup/>}/>            
                            <Route exact path='/login' element={<Login/>}/>            
                          </Routes>
                     
                        </div>
            </div>
        </div>
        </Router>
    </div>
  );
}

export default App;
