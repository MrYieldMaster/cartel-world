import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavbarComponent = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>CryptoCartel</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/leaderboard">
                            <Nav.Link>Leaderboard</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/community">
                            <Nav.Link>Community</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;
