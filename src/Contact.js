import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        service: "",
        date: "",
        description: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Your request has been submitted!");
        setFormData({ name: "", phone: "", email: "", service: "", date: "", description: "" });

        // Redirect to confirmation page
        navigate("/confirmation");
    };

    return (
        <div 
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                width: "100%",
            }}
        >
            <div 
                style={{
                    background: "rgba(255, 255, 255, 0.9)",
                    padding: "30px",
                    borderRadius: "10px",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                    maxWidth: "400px",
                    width: "100%",
                    textAlign: "center",
                }}
            >
                <h2>Request a Quote</h2>
                <form onSubmit={handleSubmit} className="contact-form">
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />

                    <label>Phone Number:</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />

                    <label>Service Type:</label>
                    <select name="service" value={formData.service} onChange={handleChange} required>
                        <option value="" disabled>Select a service</option>
                        <option value="wedding">Wedding Photography</option>
                        <option value="portrait">Portrait Photography</option>
                        <option value="commercial">Commercial Photography</option>
                        <option value="editing">Photo Editing</option>
                    </select>

                    <label>Date of Service:</label>
                    <input type="date" name="date" value={formData.date} onChange={handleChange} required />

                    <label>Description:</label>
                    <textarea name="description" value={formData.description} onChange={handleChange} rows="4" required />

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
