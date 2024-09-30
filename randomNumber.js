const prompt = require("prompt-sync")();

const target = 10 + Math.round(Math.random() * 100);

let guesses = 0;

while (true) {
    const guess = Number(prompt("Guess the number (0 - 100) "));
    guesses += 1;
    if (guess === target) {
        console.log("Correct!");
        break
    }
    else if (guess > target) {
        console.log("Your guess is too high");
    }
    else {
        console.log("Your guess is too low");
    }
}

console.log("You guessed the number in " + guesses.toString() + " tries");

