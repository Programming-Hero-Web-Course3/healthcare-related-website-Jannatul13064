import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId, serviceName, serviceTitle, serviceFee } = useParams();

    return (
        <>
            <div className="doctor">
                <h2>Doctor ID : {serviceId}</h2>
                <h4>Title: {serviceTitle}</h4>
                <h4>Doctor Name: {serviceName}</h4>
                <p>Service Charge : {serviceFee}</p>
                <button className="btn btn-warning">Add service Now</button>

            </div>
        </>
    );
};

export default Booking;