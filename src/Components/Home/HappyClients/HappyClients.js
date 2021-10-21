import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const HappyClients = () => {
    const [clients, setClients] = useState([]);
    useEffect(() => {
        fetch('./API/HappyClients.json')
            .then(res => res.json())
            .then(data => setClients(data))
    }, [])
    return (
        <div className="container">
            <h1 className="my-5 fw-bold">Our Happy Clients</h1>
            <Row xs={1} md={3} className="g-4 mb-5">
                {
                    clients.map(client => {
                        const { picture, name, description, id } = client;
                        return (<Col key={id}>
                            <Card className="h-100">
                                <Card.Img variant="top" src={picture} className="rounded-circle mx-auto mt-3" style={{ width: '200px' }} />
                                <Card.Body>
                                    <Card.Title>{name}</Card.Title>
                                    <Card.Text>{description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>)
                    })
                }
            </Row>
        </div>
    );
};

export default HappyClients;