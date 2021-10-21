import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Doctor = () => {

    const { doctorId } = useParams();
    const { doctors } = useAuth();
    const selectedDoctor = doctors?.find((doctor) => doctor.id === Number(doctorId));

    const { picture, name, designation, Speciality, Fee, description, Experience, Education } = selectedDoctor;
    return (
        <div>
            <Container>
                <div className="my-5">
                    <Row className="d-flex justify-content-center align-content-center" >
                        <Col>
                            <div className="img-container ">
                                <Card.Img variant="top" src={picture} className='image ' />
                            </div>
                        </Col>
                        <Col>
                            <div className="text-start">
                                <div className="mb-3">
                                    <h4 className="fw-bold">{name}</h4>
                                    <p className="mb-3">{designation}</p>
                                </div>
                                <hr />
                                <h6>Speciality: <span className="fw-normal">{Speciality}</span></h6>
                                <hr />
                                <h6>Education: <span className="fw-normal">{Education}</span></h6>
                                <hr />
                                <h6>Experience: <span className="fw-normal">{Experience}</span></h6>
                                <hr />
                                <h6>Fee: <span className="fw-normal">${Fee}</span> </h6>
                                <hr />
                                <h6>Description: <br /> <br />
                                    <p className="fw-normal"> {description}</p>
                                </h6>


                            </div>
                            <div>
                                <button className="btn btn-style">Book Appointment</button>
                            </div>
                        </Col>

                    </Row>
                </div>

            </Container>
        </div>
    );
};

export default Doctor;