class SlotMachine {
    constructor() {
        this.coins = 0;
    }

    getRandom() {
        return Boolean(Math.round(Math.random()))
    }

    play() {
        this.coins += 1;

        if(this.getRandom() && this.getRandom() && this.getRandom()) {
            console.log("Congratulations!! You won " + 
            (this.coins > 1 ? this.coins + " coins!" : this.coins + " coin!" ));
            this.coins = 0;
        } else {
            console.log("Good luck next time!");
        }
        console.log(this.coins);
    }
}

const machine = new SlotMachine();
machine.play();
machine.play();
machine.play();