import React from 'react';
import { Link } from 'react-router-dom';
import './Doctor.css';

const Doctor = (props) => {
    const { id, name, img, title, description, fee } = props.doctor;
    return (

        <div className="doctor">
            <img className="img-fluid single-img" src={img} alt="" />
            <h2>{title}</h2>
            <h4>{name}</h4>
            <p>{description}</p>
            <Link to={`/booking/${id}/${name}/${title}/${fee}`}>
                <button className="btn btn-warning">Book Now</button>
            </Link>
        </div>
    );
};

export default Doctor;