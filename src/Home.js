import React from "react";
import "./Home.css";

import Services from "./Services";
import Contact from "./Contact.js";
import Location from "./Location.js";
import ClientInfo from "./ClientInfo";

import PhotographerList from "./PhotographerList.js";


const Home = () => {
    return (
        <div className="home-container">
            {/* Hero Section */}
            <section id="hero" className="full-screen">
                <div className="overlay">
                    <h1>Byward Photography</h1>
                    <p className="lead">For all of your occasions</p>
                    
                </div>
            </section>

            <section id="services" className="full-screen"><Services /></section>

            <section id="clientInfo" className="full-screen"><ClientInfo /></section>
            
            <section id="photographers" className="full-screen"><PhotographerList /></section>
            <section id="location" className="full-screen"><Location /></section>
            
        </div>
    );
};

export default Home;
