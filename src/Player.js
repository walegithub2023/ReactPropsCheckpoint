//import React, Card, App.css and PropTypes
import React from "react";
import Card from "react-bootstrap/Card";
import './App.css';
import PropTypes from "prop-types";


//The Player component rendering a react-bootstrap card. The card displays all attributes for each player defined in the players.js.
const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
    return (
        <Card id='playerCard' style={{width:"120px", margin:"5px auto", borderRadius:"0px", textAlign: "center", paddingTop:"20px" }}>
            <img src={imageUrl} alt={name} id='jersey' style={{ width:"60px", height:"50px", margin:"0px auto"}}/>

                <p id='playerDetails' style={{fontSize:"10px"}}><span id="label">No: </span>{jerseyNumber}<br />
                <span id="label">Name: </span>{name}<br />
                <span id="label">Team: </span>{team}<br />
                <span id="label">Nationality: </span>{nationality}<br />
                <span id="label">Age: </span>{age}
                </p>
        </Card>
    );
    };

    //declare default props
    Player.defaultProps = {
        name: PropTypes.string,
        team: PropTypes.string,
        nationality: PropTypes.string,
        jerseyNumber: PropTypes.number,
        age: PropTypes.number,
        imageUrl: PropTypes.string,
    };

export default Player;


