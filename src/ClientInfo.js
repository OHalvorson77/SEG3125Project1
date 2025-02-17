import React, { useState } from "react";
import "./ClientInfo.css";

const faqsData = [
    { question: "What types of photography services do you offer?", answer: "We specialize in weddings, portraits, corporate events, branding, and lifestyle photography." },
    { question: "How can I book a session?", answer: "Request a quota on our website and fill in the required details, we will contact you back in a timely manner with pricing and logistics." },
    { question: "What is your turnaround time for edited photos?", answer: "Our standard turnaround time is 7-14 days, depending on the project size." },
    { question: "Do you offer prints and albums?", answer: "Yes! We provide high-quality prints, albums, and digital downloads." },
    { question: "Can you travel for photoshoots?", answer: "Absolutely! We are available for travel within our service locations." }
];

const ClientInfo = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="client-info-container">
            <div className="client-info-card">
                
                <div className="company-intro">
                    <h2>About Byward Photography</h2>
                    <p>
                        At Byward Photography, we capture more than just images—we capture emotions, stories, and timeless moments. 
                        Founded with a passion for storytelling through the lens, our team of experienced photographers specializes 
                        in weddings, portraits, corporate events, and lifestyle photography. With years of experience and a keen 
                        eye for detail, we bring creativity and professionalism to every shoot.
                    </p>
                    <p>
                        Our goal is to provide high-quality images that reflect the essence of your special moments. Whether you’re 
                        celebrating a milestone, building your personal brand, or preserving family memories, we ensure that every 
                        shot is meaningful and stunning. We take pride in offering personalized services tailored to meet the unique 
                        needs of our clients.
                    </p>
                    <p>
                        From consultation to final edits, we work closely with you to bring your vision to life. With a commitment 
                        to excellence and a love for storytelling, Byward Photography is your trusted partner in capturing life’s 
                        most precious moments.
                    </p>
                </div>

                
                <div className="faq-section">
                    <h3>Frequently Asked Questions</h3>
                    <ul>
                        {faqsData.map((faq, index) => (
                            <li key={index} className="faq-item">
                                <button className="faq-question" onClick={() => toggleFAQ(index)}>
                                    {faq.question}
                                    <span className={`arrow ${openIndex === index ? "open" : ""}`}>&#9660;</span>
                                </button>
                                <div className={`faq-answer ${openIndex === index ? "visible" : ""}`}>
                                    {faq.answer}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ClientInfo;
