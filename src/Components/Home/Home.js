import React from 'react';
import './Home.css'
import Welcome from './Banner/Welcome';
import TopServices from './TopServices/TopServices';
import TopDoctors from './TopDoctors/TopDoctors';
import HappyClients from './HappyClients/HappyClients';

// Code for home page
const Home = () => {
    return (
        <div>
            <Welcome></Welcome>
            <TopServices></TopServices>
            <TopDoctors></TopDoctors>
            <HappyClients></HappyClients>
        </div>
    );
};

export default Home;