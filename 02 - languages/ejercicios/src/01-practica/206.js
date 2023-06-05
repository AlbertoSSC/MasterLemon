console.log("******************************** 206 - Payers Order");

// Players Order
// En una gran cantidad de juegos el sistema de turnos es sencillo,
// una vez el jugador actual ha consumido su turno, pasa al final de la cola
// y le toca al siguiente. Dada una lista inicial de jugadores,
// implementa una función que devuelva la nueva lista de jugadores,
// en el orden correcto, después de X turnos.

// TIP: Aunque se puede resolver con el operador %,
//    intenta idear una solución usando spread/rest y destructuring.

// const getPlayersOrder = (players, turns) => {
//     let playersArr = players;
//     for (let i = 0; i < turns; i++) {
//         let firstPlayer = playersArr.shift();
//         playersArr.push(firstPlayer);
//     }
//     return playersArr;
// };


const getPlayersOrder = (players, turns) => {
    let playersNotPlayed = players;
    let playersPlayed = [];

    //i=0;
    //while (i<turns){};
    while (turns > 0) {
        const [currentPlayer, ...restPlayers] = playersNotPlayed;
        playersNotPlayed = restPlayers;
        playersPlayed = [...playersPlayed, currentPlayer];
        
        turns--;
    }

    return [...playersNotPlayed, ...playersPlayed];
};

// Un ejemplo:
const newOrderIn2Turns = getPlayersOrder(["Ana", "Juan", "Pablo", "Lucia"], 2);
console.log(newOrderIn2Turns); // ["Pablo", "Lucia", "Ana", "Juan"]