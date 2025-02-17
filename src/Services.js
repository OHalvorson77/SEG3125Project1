import React from "react";
import { useNavigate } from "react-router-dom";
import wedding from "./wedding.jpg";
import portrait from "./portrait.jpg";
import edit from "./editing.jpg";
import commercial from "./commercial.jpg";
import "./Services.css";

const services = [
    { id: 1, title: "Event Photography", image: wedding, description: "Photography for weddings, birthday, school events, etc.", filter: "Weddings" },
    { id: 2, title: "Portrait Photography", image: portrait, description: "Professional portraits for headshots, families, couples and more.", filter: "Portraits" },
    { id: 3, title: "Commercial Photography", image: commercial, description: "Photography for commercial purposes such as product, real estate, or food.", filter: "Commercial" },
    { id: 4, title: "Professional Photo Editing", image: edit, description: "Access to our professionals' top-notch photo editing.", filter: "Photo Editing" }
];

const Services = () => {
    const navigate = useNavigate();

    
    const handleServiceClick = (service) => {
        navigate(`/gallary`);
    };

    return (
        <div className="services-container">
            <div className="services-grid">
                {services.map((service) => (
                    <div 
                        key={service.id} 
                        className="service-card" 
                        onClick={() => handleServiceClick(service)} // Click event added
                        style={{ cursor: "pointer" }} // Make it clear it's clickable
                    >
                        <div className="service-text">
                            <h2>{service.title}</h2>
                            <p>{service.description}</p>
                        </div>
                        <img src={service.image} alt={service.title} className="service-image" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
