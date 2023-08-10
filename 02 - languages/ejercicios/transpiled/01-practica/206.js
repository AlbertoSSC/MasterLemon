var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
var getPlayersOrder = function (players, turns) {
    var playersNotPlayed = players;
    var playersPlayed = [];
    //i=0;
    //while (i<turns){};
    while (turns > 0) {
        var currentPlayer = playersNotPlayed[0], restPlayers = playersNotPlayed.slice(1);
        playersNotPlayed = restPlayers;
        playersPlayed = __spreadArray(__spreadArray([], playersPlayed, true), [currentPlayer], false);
        turns--;
    }
    return __spreadArray(__spreadArray([], playersNotPlayed, true), playersPlayed, true);
};
// Un ejemplo:
var newOrderIn2Turns = getPlayersOrder(["Ana", "Juan", "Pablo", "Lucia"], 2);
console.log(newOrderIn2Turns); // ["Pablo", "Lucia", "Ana", "Juan"]
