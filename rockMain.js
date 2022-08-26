const prompt = require('prompt-sync')({sigint: true});
/*
  const name = prompt('Welcome to ROCK, PAPPER, SISSORS /n Enter you');
  console.log(`Hey there ${name}`);
*/

const choices = {
  ROCK: 'rock',
  PAPER: 'paper',
  SCISSORS: 'scissors',
};

// write a function called getComputerChoice, not randoomString
function getComputerChoice(){
    const randNum = Math.floor(Math.random() * 3);
    switch (randNum) {
        case 0:
            return choices.ROCK;
        case 1:
            return choices.SCISSORS;
        case 2:
            return choices.PAPER;
    }
}

// Write a function that plays a single round of Rock Paper Scissors. 
// The function should take two parameters - the playerSelection and computerSelection - 
// and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
// Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).


console.log(getComputerChoice());
