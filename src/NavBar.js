import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#8B4513" }}> {/* Brown color */}
            <div className="container-fluid">
                {/* Logo & Brand */}
                <Link className="navbar-brand text-white" to="/">
                    <img src={logo} alt="Logo" style={{ height: "60px", width: "auto", marginRight: "10px", borderRadius: "10px" }} />
                </Link>

                {/* Toggler Button for Mobile View */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse">
                    {/* Centering the Nav Links */}
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

                    {/* Book Now Button on the Right */}
                    <div className="ms-auto">
                        <Link className="btn btn-warning" to="/contact">Book Now</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
