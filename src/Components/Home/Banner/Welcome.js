import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Welcome.css';

// Code for Welcome Section
const Welcome = () => {
    return (
        <div className="welcome-style Home-title">
            <Container>
                <div >
                    <h1 className="text-center  fw-bolder welcome-title py-0">Welcome To The Worlds Best Telemedicine Website</h1>
                    <h3 className="text-center fw-bolder text-black py-2">We know what your heart needs</h3>
                    <Link to="/course"><button className="btn btn-primary  fw-bold welcome-btn px-3 py-2" >Get Started</button> </Link>
                </div>
            </Container>


        </div>
    );
};

export default Welcome;