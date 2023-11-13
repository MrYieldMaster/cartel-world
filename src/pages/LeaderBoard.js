import React, { useState, useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';

const Leaderboard = () => {
    const [leaderboardData, setLeaderboardData] = useState([]);

    useEffect(() => {
        // Replace with your API endpoint
        fetch('https://api.example.com/leaderboard')
            .then(response => response.json())
            .then(data => setLeaderboardData(data))
            .catch(error => console.error('Error fetching data: ', error));
    }, []);

    return (
        <Container>
            <h1>Leaderboard</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Player</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {leaderboardData.map((player, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{player.name}</td>
                            <td>{player.score}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default Leaderboard;
