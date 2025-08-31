import React from "react";
import './FormationSection.css';
import { FORMATION_433 } from "../../controllers/position433"
import PositionSpot from "../PositionSpot/PositionSpot";
import PlayerCard from "../PlayerCard/PlayerCard";

export default function FormationSection({ players }){
    const playerAt = (spotId) => {
        return players.find(player => player.position === spotId) || null;
    }

    const style = {
        position: "relative",
        width: "min(800px, 92vw)",
        aspectRatio: "3 / 4.5",  
        margin: "0 auto",
        borderRadius: 24,
        overflow: "hidden",
        boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
        backgroundImage: 'url("/XIformation/433formation.png")',
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
      };

    // spot.id => position ("RB", "ST"....)
    return <div className="formation-container" style={style}>
            {FORMATION_433.map((spot =>{
                return <PositionSpot playerCard={
                  playerAt(spot.id)
                    ? <PlayerCard key={playerAt(spot.id).id} id={playerAt(spot.id).id} player={playerAt(spot.id)} />
                    : null
                } key={spot.id} spot={spot} playerInSpot={playerAt(spot.id)}/>
            }))}
    </div>

}