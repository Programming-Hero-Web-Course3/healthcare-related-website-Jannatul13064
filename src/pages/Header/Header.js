import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Link to="/home">Doctor Chamber</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto mx-5">
                            <div className="d-flex page-nav">
                                <Link to='/home'>Home</Link>
                                <Link to='/about'>About</Link>
                                <Link to='/services'>Services</Link>
                                <Link to='/signin'>Sign UP</Link>
                            </div>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">User : </Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dashboard
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;