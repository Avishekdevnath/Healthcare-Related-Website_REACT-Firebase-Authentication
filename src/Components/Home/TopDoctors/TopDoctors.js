import { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Code for top courses
const TopDoctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('./API/doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])

    const filteredDoctors = doctors.filter(doctor => doctor.id <= 6)
    return (
        <div className="container py-5">
            <h1 className="py-5 fw-bold">Top Doctors</h1>
            <Row xs={1} md={3} className="g-4">
                {
                    filteredDoctors.map(doctor => {
                        const { id, picture, name, designation, Speciality, Fee } = doctor;
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

                                            <Link to={`/doctor/${id}`}> <button className="btn btn-style">Book Appointment</button></Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>
            <Link to="/doctors"><button className="btn btn-primary my-5">More</button></Link>
        </div>
    );
};

export default TopDoctors;