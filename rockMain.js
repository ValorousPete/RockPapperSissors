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

console.log(getComputerChoice());