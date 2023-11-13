import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-dark text-light">
            <Container>
                <Row>
                    <Col md={4}>
                        <h5>About CryptoCartel</h5>
                        <p>Engaging and innovative crypto-based game experience.</p>
                    </Col>
                    <Col md={4}>
                        <h5>Quick Links</h5>
                        <ul>
                            <li><a href="#home" className="text-light">Home</a></li>
                            <li><a href="#leaderboard" className="text-light">Leaderboard</a></li>
                            <li><a href="#community" className="text-light">Community</a></li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h5>Contact Us</h5>
                        <p>Email: support@cryptocartel.world</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
