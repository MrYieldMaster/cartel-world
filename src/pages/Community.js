import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Community.css'; // Assuming you have a separate CSS file for custom styles

const Community = () => {
    return (
        <Container className="my-5">
            <h1 className="text-center">Join the CryptoCartel Community</h1>

            {/* Telegram Group Section */}
            <Row className="my-4">
                <Col>
                    <h2>Telegram Group</h2>
                    <p>Connect with fellow players and get the latest updates.</p>
                    <Button href="YOUR_TELEGRAM_GROUP_LINK" target="_blank" variant="primary">Join Our Group</Button>
                </Col>
            </Row>

            {/* Telegram Bot Game Section */}
            <Row className="my-4">
                <Col>
                    <h2>Play with Our Telegram Bot</h2>
                    <p>Engage with our game directly on Telegram. Challenge, compete, and enjoy!</p>
                    <Button href="YOUR_TELEGRAM_BOT_LINK" target="_blank" variant="success">Start Playing</Button>
                </Col>
            </Row>

            {/* Twitter Feed Section */}
            <Row className="my-4">
                <Col>
                    <h2>Follow Us on Twitter</h2>
                    {/* Twitter feed integration or link */}
                    <Button href="YOUR_TWITTER_LINK" target="_blank" variant="info">Follow on Twitter</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Community;
