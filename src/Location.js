import React from "react";
import "./Location.css";

const Location = () => {
    return (
        <div className="location-container">
            <div className="location-card">
                {/* Google Maps Embed on the left */}
                <div className="map-container">
                    <iframe
                        title="Google Maps"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.7262695395265!2d-74.00601528459324!3d40.71277627933174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a317fe4a241%3A0x8b6db0cead3c3e6!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1633221907164!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                {/* Location details on the right */}
                <div className="location-info">
                    <h2>Our Location</h2>
                    <p><strong>Address:</strong> 123 Byward Street, Ottawa, K1S 9B8</p>
                    <p><strong>Phone:</strong> (613) 456-7890</p>
                    <p><strong>Email:</strong> contact@bywardphotography.com</p>
                    <p><strong>Hours:</strong> Mon-Fri: 9 AM - 6 PM, Sat-Sun: 10 AM - 4 PM</p>

                    {/* "We Serve" Section */}
                    <div className="we-serve">
                        <h3>We Serve</h3>
                        <ul>
                            <li>Downtown Ottawa</li>
                            <li>Gloucester</li>
                            <li>Nepean</li>
                            <li>Kanata</li>
                            <li>And More!</li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Location;
