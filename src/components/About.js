import React from 'react';
import './About.css';

const About = React.forwardRef((props, ref) => {
    return (
        <section ref={ref} className="about">
            <div className="container">
                <h2>About SkritCreations</h2>
                <div className="sections">
                    <div className="section">
                        <h3>Our Vision</h3>
                        <p>At SkritCreations, we aspire to be the premier Telecommunication , IT and ITeS service provider. SkritCreations envisions a world seamlessly connected, where businesses and individuals have access to cutting-edge telecommunications solutions that transcend borders. Our vision is to be the catalyst for innovation, fostering a digital era of limitless possibilities.</p>
                    </div>
                    <div className="section">
                        <h3>Our Values</h3>
                        <p>Here we believe in honesty, integrity, and accountability. We understand the importance of trust in business relationships and strive to build long-lasting partnerships with our clients. We also value innovation and continuous improvement, and are always looking for ways to improve our services and stay ahead of the competition.</p>
                    </div>
                    <div className="section">
                        <h3>Our Services</h3>
                        <p>SkritCreations offers voice and messaging services to carriers and retail operators Voice Termination. For many years, the priorities of skrit creations to provide our partners with high quality voice and sms termination. Quality is key Point to any outbound or inbound call and agents love having a clear and stable line. Based on this we had creating different routing table as below. </p>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default About;
