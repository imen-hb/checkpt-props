import React from 'react'
import { Card } from 'react-bootstrap'


const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
        return (
// fifa-card
    <Card style={{ width: "18rem", margin:'10px',marginTop:'70px',borderColor:'gold',borderStyle:'solid'}}>
        <Card.Img style={{borderRadius:'4px',border:'1px solid #ddd', width: '200px',padding:'5px',display:'block',marginLeft:'auto',marginRight:'auto'}} variant="top" src={imageUrl} />
        <Card.Body>
            <Card.Title  style={{ textShadow: '2px 2px 5px red',textAlign:"center" }}>{name}</Card.Title>
            <Card.Text style={{fontStyle:'italic'}}>
            Team: {team}
            <br />
            Nationality: {nationality}
            <br />
            Jersey Number: {jerseyNumber}
            <br />
            Age: {age}
            </Card.Text>
        </Card.Body>
    </Card>
    );
};

Player.defaultProps = {
    name: "Unknown",
    team: "Unknown",
    nationality: "Unknown",
    jerseyNumber: "Unknown",
    age: "Unknown",
    imageUrl: "https://example.com/default.jpg",
};

export default Player;