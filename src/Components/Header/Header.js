import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import './Header.css';

// Code for header section
const Header = () => {
    const { allContexts } = useAuth();
    const { user, logOut } = allContexts;
    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand href="#home"> <Link className="brand-text" to="/home"><h4 className="m-logo" > Heart Line </h4></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto nav-text mt-auto mb-auto" >
                        <Link className="nav-text ms-3" to='/home'>Home</Link>
                        <Link className="nav-text ms-3" to='/services'>Services</Link>
                        <Link className="nav-text ms-3" to='/doctors'>Doctors</Link>
                        <Link className="nav-text ms-3" to='/about'>About us</Link>
                        <Link className="nav-text ms-3" to='/contact'>Contact us</Link>


                        {user?.email && <h6 className="text-white my-auto ms-2">{user.displayName}</h6>}
                        {user?.email ?
                            <Button onClick={logOut} className="btn btn-primary mx-2 py-0" variant="light">Logout</Button> :
                            <>
                                <Link className="nav-text ms-3" to="/login">Login</Link>
                                <Link className="nav-text ms-3" to="/signup">Sign up</Link>
                            </>
                        }


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;

