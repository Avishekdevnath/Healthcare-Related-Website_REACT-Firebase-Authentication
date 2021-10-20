import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Doctors.css'

// Code for about section
const Doctors = () => {
    const [members, setMembers] = useState([])
    useEffect(() => {
        fetch('./API/doctors.json')
            .then(res => res.json())
            .then(data => setMembers(data))
    }, [])

    return (
        <div className="about">
            <Container>

                <div className="py-5">
                    <h2 className="fw-bold">Our Top Doctors</h2>
                    <Row xs={1} md={4} className="g-4 container mx-auto py-5">
                        {
                            members.map(member => {
                                const { id, picture, name, designation, Speciality, Fee } = member;
                                return (
                                    <Col key={id}>
                                        <Card className="card">
                                            <div className="img-container">
                                                <Card.Img variant="top" src={picture} className='image' />
                                            </div>
                                            <Card.Body >
                                                <div className="text-start">
                                                    <div className="text-center">
                                                        <h4 className="fw-bold">{name}</h4>
                                                        <p className="mb-3">{designation}</p>
                                                    </div>
                                                    <h6>Speciality: {Speciality}</h6>
                                                    <h6>Price: ${Fee} </h6>
                                                    <p>{designation}</p>
                                                </div>
                                                <div>
                                                    <button className="btn btn-style">Book Appointment</button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Doctors;