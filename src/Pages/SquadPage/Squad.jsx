import React from "react";
import './squad.css'
import { getPlayers, getPlayersAllTime, getStaff } from "../../controllers/squadController";

const players = getPlayers();
const staff = getStaff();

function Squad(){

    return (
    <div>
    <h1>The 2008/2009 Squad</h1>
    <div className="club-members">
        <h2>Staff</h2>
        <div className="staff">
            {staff.map((staffMember, idx) => (
                <div className="staff-card" key={idx}>
                    <img src={staffMember.image} alt={staffMember.name} />
                    <h3 className="name">{staffMember.name}</h3>
                </div>
            ))}
        </div>

        <h2>Players</h2>
        <div className="players">
            {players.map((player, idx) => (
                <div className="player" key={idx}>
                    <img src={player.image} alt={player.name} />
                    <h3 className="name">{player.name}</h3>
                    <p className="tag">{player.tag}</p>
                </div>
            ))}
        </div>
    </div>
    </div>
    );
}

export default Squad;