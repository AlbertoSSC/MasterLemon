console.log("********************************  106 - Dices");

function dices() {
    let dice01Result = undefined;
    let dice02Result = undefined;

    function rollTheDice() {
        dice01Result = Math.ceil(Math.random() * 6);
        dice02Result = Math.ceil(Math.random() * 6);
        result();
    }

    function result() {
        if (dice01Result === undefined || dice02Result === undefined) {
            console.log("Primero debes tirar los dados.");
        } else {
            console.log("Dado 1: ", dice01Result);
            console.log("Dado 2: ", dice02Result);

            if (dice01Result === 6 && dice02Result === 6) {
                console.log("PREMIO ===> ¡¡ Doble 6 !!");
            }

            dice01Result = undefined;
            dice02Result = undefined;
            console.log("--> Puede volver a tirar los dados");
        }
    }

    return {
        rollTheDice: rollTheDice,
        result: result,
    };
}

const dice = dices();

dice.result();
//dice.rollTheDice();

