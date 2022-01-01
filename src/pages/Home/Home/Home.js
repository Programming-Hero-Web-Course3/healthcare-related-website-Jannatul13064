import React from 'react';
import Doctors from '../Doctors/Doctors';
import Health from '../Health/Health';
import Problem from '../Problem/Problem';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Doctors></Doctors>
            <Health></Health>
            <Problem></Problem>
        </div>
    );
};

export default Home;