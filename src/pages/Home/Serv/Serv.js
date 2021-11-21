import React from 'react';

const Serv = (props) => {
    const { name, title, fee, img } = props.serv;
    return (
        <div className="cols col-md-6 col-lg-4 col-12 mb-4">
            <h2>{title}</h2>
            <img className="img-fluid w-50" src={img} alt="" />
            <h5>This is serve {name}</h5>
            <p>Visiting Fees: {fee}</p>
            <button className="btn btn-warning">Appointment</button>
        </div>
    );
};

export default Serv;