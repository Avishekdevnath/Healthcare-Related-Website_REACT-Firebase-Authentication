import { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Code for top services
const TopServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./API/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const filteredServices = services.filter(service => service.id <= 6)
    return (
        <div className="container py-5">
            <h1 className="py-5 fw-bold">Top Services</h1>
            <Row xs={1} md={3} className="g-4">
                {
                    filteredServices.map(service => {
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
            <Link to="/services"><button className="btn btn-primary my-5">More</button></Link>
        </div>
    );
};

export default TopServices;