import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import './Header.css';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container >
                <Navbar.Brand href="#" className='fs-5 fw-bold'>Professional Advancement</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto me-auto my-2 my-lg-0 nav-link"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <ActiveLink to="/">Home</ActiveLink>
                        <ActiveLink to="statistics">Statistics</ActiveLink>
                        <ActiveLink to="appliedjobs">Applied Jobs</ActiveLink>
                        <ActiveLink to="blog">Blog</ActiveLink>


                    </Nav>

                    <Button className='navbar-btn' variant="outline-success">Star Applying</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;