import { useDroppable } from "@dnd-kit/core";
import React from "react";

export default function PositionSpot({playerCard, spot, playerInSpot}){
    const {setNodeRef, isOver} = useDroppable({ id: spot.id});

    const style = { position: "absolute",
        top: spot.top,
        left: spot.left,
        transform: "translate(-50%, -50%)",
        width: 80,
        height: 80,
        borderRadius: "50%",
        border: "2px dashed white",
        background: isOver ? "rgba(0,255,0,0.3)" : "rgba(0,0,0,0.3)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"};

    return <div style={style} ref={setNodeRef} className="position-spot">
        {playerInSpot ? React.cloneElement(playerCard, { isStarting: true }) : <span style={{ color: "white", fontSize: 12 }}>{spot.id}</span>}
    </div>

}