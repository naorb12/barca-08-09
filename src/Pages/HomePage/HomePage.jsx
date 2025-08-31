import React from "react";
import './home.css';

function Home(){
    return <div>
         <h1>Welcome To Barcelona Fan Page, 2008/2009 Season!</h1>
    <nav className="navigation">
    <ul className="information">
        <li><a href="/squad">The Squad</a></li>
        <li><a href="/iconic-games">Iconic Games and Moments</a></li> 
    </ul>
    
    <ul className="interactive">
        <p>Become Pep Guardiola!</p>
        <li><a href="/buildxi">Build Your Best XI</a></li>
    </ul>
    </nav>
    </div>
}

export default Home;