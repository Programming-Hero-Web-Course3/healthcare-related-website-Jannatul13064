import React, { } from 'react';
import useDoctor from '../../../hooks/useDoctor';
import Doctor from '../Doctor/Doctor';
import './Doctors.css';

const Doctors = () => {
    const { services } = useDoctor();
    return (
        <div className="my-5">
            <h2 className="my-3">Our Reputed Doctors</h2>
            <div className="">
                <div className="doctors-container container">
                    {
                        services.map(doctor => <Doctor
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