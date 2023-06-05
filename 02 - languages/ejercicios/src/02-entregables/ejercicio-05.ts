console.log("************** DELIVERABLE 05 *********************");
//Slot machine

class SlotMachine {
    
    coins: number;

    constructor() {
        this.coins = 0;
    }

    play() {
        this.coins++;
        const random1 = Math.random() >= 0.5;
        const random2 = Math.random() >= 0.5;
        const random3 = Math.random() >= 0.5;

        if (random1 && random2 && random3) {
            console.log("Congratulations!!!. You won " + this.coins +" coins!!");
            this.coins = 0;
        } else {
            console.log("Good luck next time" + " --> Monedas acumuladas: " + this.coins)
        }
    }
}
const machine1 = new SlotMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();