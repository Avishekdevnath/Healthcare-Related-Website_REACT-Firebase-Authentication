import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import './Services.css'


// Code for Services
const Services = () => {


    const { services } = useAuth();


    return (
        <div className="py-5">
            <Container>
                <h2 className="text-regular fw-bold">Our Services
                </h2>
                <Row xs={1} md={4} className="g-4 container mx-auto py-5">
                    {
                        services
                            .map(service => {

                                const { picture, title, price, id, Description } = service;
                                return (<Col key={id}>
                                    <Card className="card">
                                        <div className="img-container">
                                            <Card.Img variant="top" src={picture} className='image' />
                                        </div>
                                        <Card.Body >
                                            <div className="text-start">
                                                <h4 className="fw-bold">{title}</h4>
                                                <h5>Price: ${price} </h5>
                                                <p>{Description}</p>
                                            </div>
                                            <div>

                                                <Link to={`/service/${id}`}> <button className="btn btn-success">Book Now</button> </Link>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>)
                            })
                    }
                </Row>
            </Container>
        </div >
    );
};

export default Services;

