import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#8B4513" }}> 
            <div className="container-fluid">
               
                <Link className="navbar-brand text-white" to="/">
                    <img src={logo} alt="Logo" style={{ height: "60px", width: "auto", marginRight: "10px", borderRadius: "10px" }} />
                </Link>

                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse">
                   
                    <ul className="navbar-nav mx-auto">  
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/services">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/gallary">Gallery</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/clientInfo">Client Info</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/photographer">Photographers</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/location">Location & Contact</Link>
                        </li>
                    

                    </ul>

                    
                    <div className="ms-auto">
                        <Link className="btn btn-warning" to="/contact">Request Quota</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
