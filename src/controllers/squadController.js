export const POSITION = {
    BENCH: "bench",
    GK: "GK",
    RB: "RB",
    RCB: "RCB",
    LCB: "LCB",
    LB: "LB",
    RAM: "RAM",
    CDM: "CDM",
    LAM: "LAM",
    RW: "RW",
    LW: "LW",
    CF: "CF"
}

const players = [
    // Goalkeepers
    { id: 1, name: "Victor Valdes", position: POSITION.GK, image: "squad-images/goalkeepers/victor-valdes.png", tags: [""] },
    { id: 2, name: "José Manuel Pinto", position: POSITION.GK, image: "squad-images/goalkeepers/pinto.png", tags: [""] },
    { id: 3, name: "Albert Jorquera", position: POSITION.GK, image: "squad-images/goalkeepers/jorquera.jpg", tags: [""] },
    { id: 4, name: "Oier Olazábal", position: POSITION.GK, image: "squad-images/goalkeepers/oier.jpg", tags: [""] },

    // Defenders
    { id: 5, name: "Carles Puyol", position: POSITION.RCB, image: "squad-images/defenders/puyol.jpg", tags: ["Captain"] },
    { id: 6, name: "Gerard Piqué", position: POSITION.LCB, image: "squad-images/defenders/pique.jpg", tags: [""] },
    { id: 7, name: "Gabriel Milito", position: POSITION.RCB, image: "squad-images/defenders/milito.jpg", tags: [""] },    
    { id: 8, name: "Rafael Márquez", position: POSITION.LCB, image: "squad-images/defenders/marquez.jpg", tags: [""] },
    { id: 9, name: "Marc Muniesa", position: POSITION.LCB, image: "squad-images/defenders/muniesa.jpg", tags: [""] },    
    { id: 10, name: "Andreu Fontas`", position: POSITION.RCB, image: "squad-images/defenders/fontas.jpg", tags: [""] },
    { id: 11, name: "Alberto Boti`a", position: POSITION.RCB, image: "squad-images/defenders/botia.jpg", tags: [""] },
    { id: 12, name: "Dani Alves", position: POSITION.RB, image: "squad-images/defenders/alves.jpg", tags: [""] },
    { id: 13, name: "Eric Abidal", position: POSITION.LB, image: "squad-images/defenders/abidal.jpg", tags: [""] },
    { id: 14, name: "Sylvinho", position: POSITION.LB, image: "squad-images/defenders/sylvinho.jpg", tags: [""] },
    { id: 15, name: "Martín Cáceres", position: POSITION.RCB, image: "squad-images/defenders/caceres.jpg", tags: [""] },

    // Midfielders 
    { id: 16, name: "Sergio Busquets", position: POSITION.CDM, image: "squad-images/midfielders/busquetes.jpg", tags: [""] }, 
    { id: 17, name: "Yaya Touré", position: POSITION.CDM, image: "squad-images/midfielders/toure.jpg", tags: [""] },
    { id: 18, name: "Xavi Hernandez", position: POSITION.RAM, image: "squad-images/midfielders/xavi.jpg", tags: ["Top Assister"] },
    { id: 19, name: "Andres Iniesta", position: POSITION.LAM, image: "squad-images/midfielders/iniesta.jpg", tags: [""] },
    { id: 20, name: "Seydou Keita", position: POSITION.RAM, image: "squad-images/midfielders/keita.jpg", tags: [""] },
    { id: 21, name: "Alexander Hleb", position: POSITION.LAM, image: "squad-images/midfielders/hleb.jpg", tags: [""] },
    { id: 22, name: "Abraham Gonzalez", position: POSITION.RAM, image: "squad-images/midfielders/abraham.jpg", tags: [""] },
    { id: 23, name: "Thiago Alcantara", position: POSITION.RAM, image: "squad-images/midfielders/thiago.jpg", tags: [""] },
    { id: 24, name: "Xavi Torres", position: POSITION.RAM, image: "squad-images/midfielders/xavi_torres.jpg", tags: [""] },
    { id: 25, name: "Victor Sanchez", position: POSITION.RAM, image: "squad-images/midfielders/victor_sanchez.jpg", tags: [""] },
    { id: 26, name: "Victor Vazquez", position: POSITION.LAM, image: "squad-images/midfielders/victor_vazquez.jpg", tags: [""] },

    // Forwards
    { id: 27, name: "Lionel Messi", position: POSITION.RW, image: "squad-images/forwards/messi.jpg", tags: ["Top Goal Scorer"] },
    { id: 28, name: "Samuel Eto'o", position: POSITION.CF, image: "squad-images/forwards/etoo.jpg", tags: [""] },
    { id: 29, name: "Thierry Henry", position: POSITION.LW, image: "squad-images/forwards/henry.jpg", tags: [""] },
    { id: 30, name: "Bojan Krkic", position: POSITION.CF, image: "squad-images/forwards/bojan.jpg", tags: [""] },
    { id: 31, name: "Pedro", position: POSITION.RW, image: "squad-images/forwards/pedro.jpg", tags: [""] },
    { id: 32, name: "Jeffren Suarez", position: POSITION.LW, image: "squad-images/forwards/jeffren.jpg", tags: [""] },
    { id: 33, name: "Eidur Gudjohnsen", position: POSITION.CF, image: "squad-images/forwards/gudjohnsen.jpg", tags: [""] },
];

const playersAllTime = [
    // Goalkeepers
    { id: 1, name: "Victor Valdes", position: POSITION.GK, image: "squad-all-time-images/goalkeepers/victor-valdes.png", tags: [""] },
    { id: 2, name: "Andoni Zubizarreta", position: POSITION.GK, image: "squad-all-time-images/goalkeepers/zubizarreta.jpg", tags: [""] },
    { id: 3, name: "Marc-André ter Stegen", position: POSITION.GK, image: "squad-all-time-images/goalkeepers/ter-stegen.jpg", tags: [""] },

    // Defenders
    { id: 4, name: "Carles Puyol", position: POSITION.RCB, image: "squad-all-time-images/defenders/puyol.jpg", tags: [""] },
    { id: 5, name: "Gerard Piqué", position: POSITION.LCB, image: "squad-all-time-images/defenders/pique.jpg", tags: [""] },
    { id: 6, name: "Migueli", position: POSITION.RCB, image: "squad-all-time-images/defenders/migueli.jpg", tags: [""] },    
    { id: 7, name: "Rafael Márquez", position: POSITION.LCB, image: "squad-all-time-images/defenders/marquez.jpg", tags: [""] },
    { id: 8, name: "Ronald Koeman", position: POSITION.LCB, image: "squad-all-time-images/defenders/koeman.jpg", tags: [""] },    
    { id: 9, name: "Albert Ferrer", position: POSITION.RBB, image: "squad-all-time-images/defenders/ferrer.jpg", tags: [""] },
    { id: 10, name: "Dani Alves", position: POSITION.RB, image: "squad-all-time-images/defenders/alves.jpg", tags: [""] },
    { id: 11, name: "Eric Abidal", position: POSITION.LB, image: "squad-all-time-images/defenders/abidal.jpg", tags: [""] },
    { id: 12, name: "Jordi Alba", position: POSITION.LB, image: "squad-all-time-images/defenders/alba.jpg", tags: [""] },

    // Midfielders 
    { id: 13, name: "Sergio Busquets", position: POSITION.CDM, image: "squad-all-time-images/midfielders/busquetes.jpg", tags: [""] }, 
    { id: 14, name: "Yaya Touré", position: POSITION.CDM, image: "squad-all-time-images/midfielders/toure.jpg", tags: [""] },
    { id: 15, name: "Xavi Hernandez", position: POSITION.RAM, image: "squad-all-time-images/midfielders/xavi.jpg", tags: [""] },
    { id: 16, name: "Andres Iniesta", position: POSITION.LAM, image: "squad-all-time-images/midfielders/iniesta.jpg", tags: [""] },
    { id: 17, name: "Pep Guardiola", position: POSITION.CDM, image: "squad-all-time-images/midfielders/pep.jpg", tags: [""] },
    { id: 18, name: "Luis Enrique", position: POSITION.LAM, image: "squad-all-time-images/midfielders/enrique.jpg", tags: [""] },
    { id: 19, name: "Luis Suárez Miramontes", position: POSITION.LAM, image: "squad-all-time-images/midfielders/luis-suarez.jpg", tags: [""] },
    { id: 20, name: "Michael Laudrup", position: POSITION.RAM, image: "squad-all-time-images/midfielders/laudrup.jpg", tags: [""] },
    { id: 21, name: "Johan Neeskens", position: POSITION.RAM, image: "squad-all-time-images/midfielders/neeskens.jpg", tags: [""] },
    { id: 22, name: "Ladislao Kubala", position: POSITION.LAM, image: "squad-all-time-images/midfielders/kubala.jpg", tags: [""] },

    // Forwards
    { id: 23, name: "Lionel Messi", position: POSITION.RW, image: "squad-all-time-images/forwards/messi.jpg", tags: [""] },
    { id: 24, name: "Thierry Henry", position: POSITION.LW, image: "squad-all-time-images/forwards/henry.jpg", tags: [""] },
    { id: 25, name: "Johan Cruyff", position: POSITION.LW, image: "squad-all-time-images/forwards/cruyff.jpg", tags: [""] },
    { id: 26, name: "Hristo Stoichkov", position: POSITION.LW, image: "squad-all-time-images/forwards/stoichkov.jpg", tags: [""] },
    { id: 27, name: "Rivaldo", position: POSITION.LW, image: "squad-all-time-images/forwards/rivaldo.jpg", tags: [""] },
    { id: 28, name: "Ronaldinho", position: POSITION.LW, image: "squad-all-time-images/forwards/ronaldinho.jpg", tags: [""] },
    { id: 29, name: "Diego Maradona", position: POSITION.RW, image: "squad-all-time-images/forwards/maradona.jpg", tags: [""] },

    //Strikers
    { id: 30, name: "Samuel Eto'o", position: POSITION.CF, image: "squad-all-time-images/forwards/etoo.jpg", tags: [""] },
    { id: 31, name: "César Rodríguez", position: POSITION.CF, image: "squad-all-time-images/forwards/césar-rodríguez.jpg", tags: [""] },
    { id: 32, name: "Romário", position: POSITION.CF, image: "squad-all-time-images/forwards/romario.jpg", tags: [""] },
    { id: 33, name: "Ronaldo Nazário", position: POSITION.CF, image: "squad-all-time-images/forwards/ronaldo.jpg", tags: [""] },
    { id: 34, name: "Patrick Kluivert", position: POSITION.CF, image: "squad-all-time-images/forwards/kluivert.jpg", tags: [""] },
    { id: 35, name: "Zlatan Ibrahimović", position: POSITION.CF, image: "squad-all-time-images/forwards/ibrahimovic.jpg", tags: [""] },
    { id: 36, name: "David Villa", position: POSITION.CF, image: "squad-all-time-images/forwards/villa.jpg", tags: [""] },
    { id: 37, name: "Luis Suárez", position: POSITION.CF, image: "squad-all-time-images/forwards/suarez.jpg", tags: [""] },
    { id: 38, name: "Robert Lewandowski", position: POSITION.CF, image: "squad-all-time-images/forwards/lewandowski.png", tags: [""] },
];

const staff = [
    { name: "Pep Guardiola", image: "staff-images/pep.jpg" },
    { name: "Tito Vilanova", image: "staff-images/tito.jpg" },
    { name: "Juan Carlos Unzué", image: "staff-images/unzue.jpg" },
    { name: "Lorenzo Buenaventura", image: "staff-images/buenaventura.jpg" },
    { name: "Paco Seirul-lo", image: "staff-images/seirul-lo.png" },
    { name: "Aureli Altimira", image: "staff-images/altimira.jpg" }
];

export function getPlayers(){
    return players;
}

export function getPlayersAllTime(){
    return playersAllTime;
}

export function getStaff(){
    return staff;
}
