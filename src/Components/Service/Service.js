import Button from '@restart/ui/esm/Button';
import { Card, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

// Code For Service section
const Service = () => {
    const { serviceId } = useParams();
    const { services } = useAuth();
    const selectedService = services?.find((service) => service.id === Number(serviceId));

    const { picture, title, price, Description } = selectedService;


    return (
        <div>
            <Container>
                <div className="my-5">
                    <Row className="d-flex justify-content-center align-content-center" >
                        <Card style={{ width: '30rem' }}>
                            <Card.Img variant="top" src={picture} />
                            <Card.Body>
                                <Card.Title>{title}</Card.Title>
                                <h5 className="fw-regular">Price:${price}</h5>
                                <Card.Text>
                                    {Description}
                                </Card.Text>
                                <Button className="btn btn-success">Confirm Booking</Button>
                            </Card.Body>
                        </Card>
                    </Row>
                </div>

            </Container>
        </div>
    );
};

export default Service;