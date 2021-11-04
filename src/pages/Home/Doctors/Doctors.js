import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import './Doctors.css';

const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => {
                setDoctors(data)
            })
    })
    return (
        <div className="my-5">
            <h2 className="my-3">Our Reputed Doctors</h2>
            <div className="">
                <div className="doctors-container container">
                    {
                        doctors.map(doctor => <Doctor
                            key={doctor.id}
                            doctor={doctor}
                        ></Doctor>)
                    }

                </div>

            </div>

        </div>
    );
};

export default Doctors;