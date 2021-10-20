import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Header.css';

// Code for header section
const Header = () => {

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"> <h4 className="m-logo" > Heart Line </h4></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto nav-text mt-auto mb-auto" >
                            <Link className="nav-text ms-3" to='/'>Home</Link>
                            <Link className="nav-text ms-3" to='/services'>Services</Link>
                            <Link className="nav-text ms-3" to='/doctors'>Doctors</Link>
                            <Link className="nav-text ms-3" to='/about'>About us</Link>
                            <Link className="nav-text ms-3" to='/contact'>Contact us</Link>
                            <Link className="nav-text ms-3" to='/Login'>Login</Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;

