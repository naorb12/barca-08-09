import React from "react";
import { Navigate, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from "./Pages/HomePage/HomePage.jsx"
import Squad from "./Pages/SquadPage/Squad.jsx";
import IconicGames from "./Pages/IconicGamesPage/IconicGames.jsx";
import BuildXI  from "./Pages/BuildXIPage/BuildXI.jsx";
import Header from "./Components/Partials/Header.jsx";


function App(){
    return (
        <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/squad" element={<Squad />} />
            <Route path="/iconic-games" element={<IconicGames />} />
            <Route path="/buildxi" element={<BuildXI />} />
        </Routes>
        </BrowserRouter>
    )
}

export default App;