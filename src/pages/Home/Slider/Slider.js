import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.css';

import banner1 from '../../../images/Slider/1.png';
import banner2 from '../../../images/Slider/2.png';
import banner3 from '../../../images/Slider/3.png';

const Slider = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>WELCOME TO DOCTOR CHAMBER</h1>
                        <p>Here you can find so many specialist about human disorder</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h1>COME TODAY OR BOOK YOURSELF</h1>
                        <p>We will provide world largest service.Physical or online check up</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h1>WE SERVE ALWAYS BEST</h1>
                        <p>Check our website to know details.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </>
    );
};

export default Slider;