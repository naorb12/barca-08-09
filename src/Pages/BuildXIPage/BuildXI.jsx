import React, {useState} from "react";
import { createPortal } from "react-dom";
import './BuildXI.css'
import { getPlayers, getPlayersAllTime, POSITION } from "../../controllers/squadController";
import { closestCorners, DndContext, DragOverlay } from "@dnd-kit/core"
import BenchSection from "../../Components/BenchSection/BenchSection.jsx";
import PlayerCard from "../../Components/PlayerCard/PlayerCard.jsx";
import FormationSection from "../../Components/FormationSection/FormationSection.jsx";

export default function BuildXI(){
    const [era, setEra] = useState("2008-2009");
    const [players, setPlayers] = useState(() => getPlayers().map(player => ({
        ...player,
        position: POSITION.BENCH
    })));

    const [activeId, setActiveId] = useState(null);

    function handleDragStart(event) {
    setActiveId(event.active.id);
    }

    function handleDragEnd(event){
        const {active, over} = event;

        if (!over) return;

        const draggedId = active.id;
        const targetPosition = over.id;

        setPlayers(prevPlayers =>{
            if(targetPosition === POSITION.BENCH){
                return prevPlayers.map(player => player.id === draggedId ? {...player, position: targetPosition} : player);
            } 

            if(targetPosition !== POSITION.BENCH){
                const isOccupied = prevPlayers.find(player => player.position === targetPosition);
                if(!isOccupied){
                    return prevPlayers.map(player => player.id === draggedId ? {...player, position: targetPosition} : player);
                } else{
                    return prevPlayers;
                }
            }

           return (players.map(player => player.id === draggedId ? {
            ...player,
            position: targetPosition
        }: player));
        });
    }

    function handleDragCancel() {
        setActiveId(null);
    }

    function handleReset(){
        setPlayers((prevPlayers) => {
            return prevPlayers.map(player => ({
                ...player,
                position: POSITION.BENCH
            }));
        })
    }

    function handleChangeEra(event){
        const value = event.target.value;
        if(era === value){
            return;
        }
        setEra(value);

        if(value === "2008-2009"){
            setPlayers(prevPlayers => {
                return getPlayers().map(player => ({...player, position: POSITION.BENCH}));
            });
        } else {
            setPlayers(prevPlayers => {
                return getPlayersAllTime().map(player => ({...player, position: POSITION.BENCH}));
            });
        }
    }

    const activePlayer = players.find(p => p.id === activeId) || null;


    return <div className="page">
        <h1>Build Your Best XI!</h1>
        <select name="XIType" id="" value={era} onChange={handleChangeEra}>
            <option value="2008-2009">2008-2009</option>
            <option value="all-time">All Time</option>
        </select>
        <div className="wrapper">
        <DndContext onDragStart={handleDragStart} onDragCancel={handleDragCancel} onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
            <div className="bench-wrapper">  
                <h2>Bench</h2>
         <BenchSection position={POSITION.BENCH} players={players.filter(player => player.position === POSITION.BENCH)}/>
    <button className="reset-btn" onClick={handleReset}>Reset</button>
        </div>
        <div className="formation-wrapper">
            <h2>Starting XI</h2>
            <FormationSection players={players}/>
        </div>

        {/* for when a card is dragged out of the box when there is a scroll */}
        {createPortal(
          <DragOverlay>
            {activePlayer ? <PlayerCard player={activePlayer} /> : null}
          </DragOverlay>,
          document.body
        )}
        </DndContext>
        </div>
    </div>
}