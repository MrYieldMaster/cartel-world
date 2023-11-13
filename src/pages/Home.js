import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './Home.css'; // Assuming you have a separate CSS file for custom styles

const Home = () => {
    return (
        <div className="home-page">
            <Container>
                {/* Hero Section */}
                <Row className="align-items-center my-5">
                    <Col lg={7}>
                        <h1 className="display-3 text-white">Welcome to CryptoCartel</h1>
                        <p className="lead text-muted">Embark on an adventurous journey in the world of crypto and cartels.</p>
                        <Button variant="danger" size="lg">Join the Game</Button>
                    </Col>
                    <Col lg={5}>
                        {/* Add an engaging image here */}
                    </Col>
                </Row>

                {/* Game Introduction Section */}
                <Row className="my-5">
                    <Col>
                        <h2>About the Game</h2>
                        <p>Dive into the underground world of crypto and cartels. Trade, strategize, and rise to the top of the underworld!</p>
                    </Col>
                </Row>

                {/* Other Sections as needed */}
            </Container>
        </div>
    );
};

export default Home;
