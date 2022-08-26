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

const getWinConditionString = (winner, loser, didUserWin) => 
  `You ${didUserWin ? 'win' : 'lose'}  ${winner} beats ${loser}.`;





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





function singleRound(playerSelection, computerSelection){
    if (
      playerSelection === choices.ROCK  && computerSelection === choices.SCISSORS ||
      playerSelection === choices.SCISSORS && computerSelection === choices.PAPER ||
      playerSelection === choices.PAPER && computerSelection === choices.ROCK
      ){ 
        return getWinConditionString(playerSelection, computerSelection, true);
      }
        return getWinConditionString(computerSelection, playerSelection, false);
}

const computerChoice = getComputerChoice() 

const playerChoice = prompt('Pick Rock, Paper or Sciccors: ')

const result = singleRound(playerChoice, computerChoice)

console.log(result);
