const prompt = require("prompt-sync")();

console.log("Welcome to the TWICE quiz!");

let correct_answers = 0;
const total_questions = 3;

const answer1 = prompt("Who is the oldest Twice member? ");
const correct_answer1 = "nayeon";

if (answer1.toLowerCase() === correct_answer1) 
{
    console.log("Correct!");
    correct_answers += 1;
}
else 
{
    console.log("Sorry, that is wrong.");
}

const answer2 = prompt("Who is the youngest Twice member? ");
const correct_answer2 = "tzuyu";

if (answer2.toLowerCase() === correct_answer2) 
{
    console.log("Correct!");
    correct_answers += 1;
}
else 
{
    console.log("Sorry, that is wrong.");
}

const answer3 = prompt("Which member was born in March? ");
const correct_answer3 = "mina";

if (answer3.toLowerCase() === correct_answer3) 
{
    console.log("Correct!");
    correct_answers += 1;
}
else 
{
    console.log("Sorry, that is wrong.");
}

console.log("You got", correct_answers, "questions correct!");
console.log("You scored", Math.round((correct_answers / total_questions) * 100).toString() + "%");