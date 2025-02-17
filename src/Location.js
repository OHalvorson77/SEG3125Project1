import React from "react";
import "./Location.css";

const Location = () => {
    return (
        <div className="location-container">
            <div className="location-card">
                
            <div className="map-container">
    <iframe
        title="Google Maps with Pin"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2837.144484131124!2d-75.6981201846904!3d45.429017279101236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce054e4b3b2a69%3A0x95e772af67e94e69!2sByward%20Market%2C%20Ottawa%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sus!4v1633221907164!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
</div>


                
                <div className="location-info">
                    <h2>Our Location</h2>
                    <p><strong>Address:</strong> 123 Byward Street, Ottawa, K1S 9B8</p>
                    <p><strong>Phone:</strong> (613) 456-7890</p>
                    <p><strong>Email:</strong> contact@bywardphotography.com</p>
                    <p><strong>Hours:</strong> Mon-Fri: 9 AM - 6 PM, Sat-Sun: 10 AM - 4 PM</p>

    
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
