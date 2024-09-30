const prompt = require("prompt-sync")();

let wins = 0;
let losses = 0;
let ties = 0;

while (true) {
    const choice = prompt("Enter rock, paper, or scissors (q to quit) ").toLowerCase();
    if (choice === "q") {
        break;
    }

    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        const choices = ["rock", "paper", "scissors"];
        const random = Math.round(Math.random() * 2);
        const cpu_choice = choices[random];

        console.log("The computer chose", cpu_choice);

        if (cpu_choice === choice) {
            console.log("draw");
            ties += 1
        }
        else if ((choice === "paper" && cpu_choice === "rock") || 
                (choice === "rock" && cpu_choice === "scissors") || 
                (choice === "scissors" && cpu_choice === "paper")) {
            console.log("won");
            wins += 1;
        }
        else {
            console.log("loss");
            losses -= 1;
        }
    }
    else {
        console.log("Please enter a valid choice. ");
    }
}
console.log("Wins:", wins, "Losses", losses, "Ties", ties);