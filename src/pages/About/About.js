import React from 'react';
import image1 from '../../images/about1.jpg';
import image2 from '../../images/about2.jpg';

const About = () => {
    return (
        <div>
            <div className="about-container">
                <h2>Welcome to Doctor Chamber</h2>
                <h5>Use Doctor Chamber when you or an eligible dependent:</h5>
                <img className="img-fluid" src={image1} alt="" />
            </div>
            <h2 className="my-4">Let's Check up Today</h2>
            <div className="d-flex container">

                <div className="p-4">
                    <h3>How it works</h3>
                    <p>Our specialists’ top priority is you. Which means you get the answers and assurance you deserve with accuracy you can trust.</p>
                </div>
                <div className="ms-4">
                    <img className="img-fluid w-75" src={image2} alt="" />
                </div>
            </div>

        </div>
    );
};

export default About;