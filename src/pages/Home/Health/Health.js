import Button from '@restart/ui/esm/Button';
import React from 'react';
import img from '../../../images/emergency.png'

const Health = () => {
    return (
        <>
            <h2>Health Care for Emergency</h2>
            <div className="d-flex justify-content-around">

                <div>
                    <ul>
                        <li>Ambulance Service</li>
                        <li>Nearest Service</li>
                        <li>E-Care Service</li>
                        <li>Report Send Service</li>
                        <li>Testimonial Service</li>
                    </ul>
                </div>
                <div>
                    <Button className="bg-danger text-white border rounded p-3">Call Now</Button>
                </div>
                <div>
                    <img width={'75%'} src={img} alt="health service"></img>
                </div>

            </div>
        </>
    );
};

export default Health;