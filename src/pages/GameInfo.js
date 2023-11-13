import React from 'react';
import { Container, Tab, Row, Col, Nav, Accordion } from 'react-bootstrap';
import './GameInfo.css'; // Assuming you have a separate CSS file for custom styles

const GameInfo = () => {
    return (
        <Container className="my-5">
            <h1 className="text-center">Everything You Need to Know About CryptoCartel</h1>
            
            {/* Tabs for different sections */}
            <Tab.Container id="game-info-tabs" defaultActiveKey="overview">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="overview">Overview</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="rules">Rules</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="strategies">Strategies</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="faq">FAQ</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="overview">
                                <p>Game overview and introduction...</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="rules">
                                <p>Details about game rules...</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="strategies">
                                <p>Strategies to excel in the game...</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="faq">
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>FAQ Question 1</Accordion.Header>
                                        <Accordion.Body>
                                            Answer to FAQ Question 1...
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    {/* More FAQ items */}
                                </Accordion>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>

            {/* Quotes Section */}
            <div className="quotes-section">
                <blockquote className="blockquote">
                    <p className="mb-0">"An exciting quote about the game..."</p>
                    <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Game World</cite></footer>
                </blockquote>
                {/* More quotes as needed */}
            </div>
        </Container>
    );
};

export default GameInfo;
