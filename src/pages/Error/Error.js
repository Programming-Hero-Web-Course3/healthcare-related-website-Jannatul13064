import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../images/404/error.jpg';

const Error = () => {
    return (
        <div>
            <img className="img-fluid" src={image} alt="" />
            <Link to="/home">Go back</Link>
        </div>
    );
};

export default Error;