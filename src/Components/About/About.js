import React from 'react';
import { Container } from 'react-bootstrap';
import './About.css'
import Faq from './Faq/Faq';
import OurTeam from './Our Team/OurTeam';

// Code for about section
const About = () => {
    // const [members, setMembers] = useState([])
    // useEffect(() => {
    //     fetch('./API/about.json')
    //         .then(res => res.json())
    //         .then(data => setMembers(data))
    // }, [])

    return (
        <div className="about">
            <Container>
                <div className="py-5">
                    <h2>About us</h2>
                    <h5> <span className="m-logo fw-bold">Heart Line</span> is the worlds best website for heart care.</h5>
                    <h5>Whether you’re a patient looking for medical care, or a doctor who provides it, <span className="m-logo fw-bold">Heart Line</span> keeps us connected.</h5>
                </div>
                <OurTeam></OurTeam>
                <Faq></Faq>

            </Container>
        </div>
    );
};

export default About;