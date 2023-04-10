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

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Professional Advancement</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto me-auto my-2 my-lg-0 nav-link"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link to="/">Home</Link>
                        <Link to="statistics">Statistics</Link>
                        <Link to="appliedjobs">Applied Jobs</Link>
                        <Link to="blog">Blog</Link>


                    </Nav>

                    <Button variant="outline-success">Search</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;