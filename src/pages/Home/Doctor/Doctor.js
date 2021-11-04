import React from 'react';
import './Doctor.css';

const Doctor = (props) => {
    const { name, img, title, description } = props.doctor;
    return (

        <div className="doctor">
            <img className="img-fluid single-img" src={img} alt="" />
            <h2>{title}</h2>
            <h4>{name}</h4>
            <p>{description}</p>
        </div>
    );
};

export default Doctor;