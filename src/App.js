import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./NavBar";
import Home from "./Home.js";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact.js";
import Location from "./Location.js";
import ClientInfo from "./ClientInfo.js";
import Footer from "./Footer.js";
import PhotographerList from "./PhotographerList.js";
import Gallary from "./Gallary.js";
import ShootPage from "./ShootPage.js";
import Confirmation from "./Confirmation.js";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/location" element={<Location />} />
                <Route path="/gallary/:service?" element={<Gallary />} />
                <Route path="/confirmation" element={<Confirmation />} />
                <Route path="/shoot/:id" element={<ShootPage />} />
                <Route path="/photographer" element={<PhotographerList />} />

                <Route path="/clientInfo" element={<ClientInfo />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
