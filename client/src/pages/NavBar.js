import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
const NavBar = ({togglenav}) => {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();             
        navigate("/login");
    }
  return (
    <nav className="navbar navbar-expand-sm navbar-white bg-white px-3">
        <i className="navbar-brand bi bi-justify-left fs-4" onClick={togglenav}></i>
        <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
                <i className="bi bi-justify"></i>
            </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                <li className="nav-item dropdown pull-right" >
                    <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Piyush</a>
                    <div className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownId">
                        <Link className="dropdown-item" to="/profile">Profile</Link>
                        <a className="dropdown-item" onClick={logout}>Logout</a>
                    </div>
                </li>
            </ul>           
        </div>
    </nav>
  )
}

export default NavBar