import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Spinner } from 'react-bootstrap';
import './OurTeam.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebookF } from '@fortawesome/free-brands-svg-icons'

// const facebook = <FontAwesomeIcon icon={['fab', 'facebook-f']} />
// const facebook2 = <FontAwesomeIcon icon={faFacebookF} size="4x" className="text-success" />
// const doctor = <FontAwesomeIcon icon={faUserMd} size="4x" className="text-success" />
// const success = <FontAwesomeIcon icon={faHospitalUser} size="4x" className="text-success" />
// const beds = <FontAwesomeIcon icon={faBed} size="4x" className="text-success" />

const OurTeam = () => {
    const [members, setMembers] = useState([]);
    useEffect(() => {
        fetch('./API/members.json')
            .then(res => res.json())
            .then(data => setMembers(data))
    }, [])
    return (
        <div>
            <h1 className="fw-bold">Meet Our Team</h1>
            {members.length === 0 ?
                // loader
                <Spinner animation="grow" variant="primary" />
                :
                <Row xs={1} md={4} className="g-4 container mx-auto py-5">
                    {
                        members.map(member => {
                            // destructuring member object
                            const { id, picture, name, designation } = member;
                            return (<Col key={id}>
                                <Card>
                                    <div className="card-image">
                                        <Card.Img variant="top" src={picture} style={{ height: '300px' }} />
                                        <Card.ImgOverlay className="overlay">
                                            {/* <div>{facebook}</div> */}
                                        </Card.ImgOverlay>
                                    </div>
                                    <Card.Body>
                                        <Card.Title>{name}</Card.Title>
                                        <Card.Text className="text-primary fw-bold">{designation}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            )
                        })
                    }
                </Row>}
        </div>
    );
};

export default OurTeam;