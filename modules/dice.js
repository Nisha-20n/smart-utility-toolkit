import crypto from "crypto";

function rollDice() {
    const number = crypto.randomInt(1, 7);
    console.log("Dice Rolled:", number);
}

console.log("Rolling the dice...\n");

for (let i = 1; i <= 5; i++) {
    rollDice();
}