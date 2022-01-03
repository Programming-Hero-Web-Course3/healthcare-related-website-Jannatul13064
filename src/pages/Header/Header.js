import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Login from '../Login/Login';




import './Header.css';

const Header = () => {
    const { user, handleLogOut } = useAuth();
    const { name } = Login()
    console.log(user)

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

                            </div>
                            <div className="mt-2">
                                {
                                    user.email ?
                                        <button className="btn btn-warning" onClick={handleLogOut}>Logout</button>
                                        :
                                        <Link to='/login'>Login</Link>
                                }

                            </div>
                        </Nav>
                        <Nav>
                            <Nav.Link >User : {user.displayName || name}</Nav.Link>
                            <div>
                                <img height='40px' width='50px' src={user.photoURL} alt="UserPhoto" />
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;