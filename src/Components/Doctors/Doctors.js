import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Doctors.css'

// Code for doctors section
const Doctors = () => {

    const { doctors } = useAuth();
    return (
        <div className="doctor">
            <Container>

                <div className="py-5">
                    <h2 className="fw-bold">Our Top Doctors</h2>
                    <Row xs={1} md={4} className="g-4 container mx-auto py-5">
                        {
                            doctors.map(doctor => {
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
                                                </div>
                                                <div>
                                                    <Link to={`/doctor/${id}`}> <button className="btn btn-style">Book Appointment</button> </Link>

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