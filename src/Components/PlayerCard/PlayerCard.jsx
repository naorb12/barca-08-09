import React from "react";
import './PlayerCard.css'
import { useSortable } from "@dnd-kit/sortable"
import {CSS} from "@dnd-kit/utilities";
import { useDraggable } from "@dnd-kit/core";

export default function PlayerCard({ id, player, isStarting }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({id: id});

  const style = transform ? { transform: `translate(${transform.x}px, ${transform.y}px)`} : undefined;
  
  const imageStyle = isStarting
    ? { width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%"}
    : { width: "100%", height: "100%", objectFit: "cover", borderBottom: "1px solid #eee" };

  return (
    <div ref={setNodeRef} {...attributes} {...listeners} style={style}>
    {isStarting && <img
        src={player.image}
        alt={player.name}
        style={imageStyle}
      />}
    {!isStarting && <div className="player-card">
      <img
        src={player.image}
        alt={player.name}
        style={imageStyle}
      />
      <div style={{ padding: "8px" }}>
        <h4 style={{ margin: "6px 0", fontSize: 12 }}>{player.name}</h4>
        {player.tags && player.tags.length > 0 && player.tags[0] !== "" && (
          <span
            style={{
              display: "inline-block",
              marginTop: 4,
              padding: "2px 6px",
              fontSize: 12,
              borderRadius: 6,
              background: "#5682b0ff",
              color: "white",
            }}
          >
            {player.tags.join(", ")}
          </span>
        )}
      </div>
    </div>}
    </div>
    
  );
}