import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact">
            <div className="container-contact">
                <h2>Contact Us</h2>
                <h1>Why Choose Us?</h1>
                <div className="centered-text-container">
                    <p className="centered-text">We are helping customers cut costs and boost productivity with a flexible and scalable business phone solution that lets you connect anywhere, anytime. Never miss a call again!</p>
                </div>
                <div className="contact-content">
                    <div className="contact-details">
                        <p>Skrit Creations Pte Ltd
                            6 Battery Road, #17‑06
                            Singapore</p>
                        <a href="https://maps.app.goo.gl/CBKqoK444PFe3hEE9" target="_blank" rel="noopener noreferrer">Get Directions</a>
                        <p>
                            Email us at: <a href="mailto:info@skritcreation.com">info@skritcreation.com</a>
                        </p>
                    </div>
                    <div className="map-container">
                        <iframe
                            title="Map" 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.813952382903!2d103.85178300000001!3d1.2856317999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da190941cfe9b1%3A0xdb583dd689b93b9!2s6%20Battery%20Rd%2C%20Six%20Battery%20Road%2C%20Singapore%20049909!5e0!3m2!1sen!2sin!4v1725581044431!5m2!1sen!2sin"
                            width="600"
                            height="450"
                            style={{ border: '0' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
