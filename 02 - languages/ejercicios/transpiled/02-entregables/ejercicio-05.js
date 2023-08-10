console.log("************** DELIVERABLE 05 *********************");
//Slot machine
var SlotMachine = /** @class */ (function () {
    function SlotMachine() {
        this.coins = 0;
    }
    SlotMachine.prototype.play = function () {
        this.coins++;
        var random1 = Math.random() >= 0.5;
        var random2 = Math.random() >= 0.5;
        var random3 = Math.random() >= 0.5;
        if (random1 && random2 && random3) {
            console.log("Congratulations!!!. You won " + this.coins + " coins!!");
            this.coins = 0;
        }
        else {
            console.log("Good luck next time" + " --> Monedas acumuladas: " + this.coins);
        }
    };
    return SlotMachine;
}());
var machine1 = new SlotMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
