import React from "react";
import './BenchSection.css'
import { SortableContext, verticalListSortingStrategy} from "@dnd-kit/sortable";
import PlayerCard from "../PlayerCard/PlayerCard";
import { useDroppable } from "@dnd-kit/core";

export default function BenchSection({ position, players }){
    const { setNodeRef } = useDroppable({
        id: position,
    });

    return <div>
    <div ref={setNodeRef} className="bench-section">
            {players.map((player => {
                return <PlayerCard key={player.id} id={player.id} player={player}  />
            }))}
    </div>
    </div>
}