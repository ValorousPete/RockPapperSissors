const prompt = require('prompt-sync')({sigint: true});
/*
const name = prompt('Welcome to ROCK, PAPPER, SISSORS /n Enter you');
console.log(`Hey there ${name}`);
*/

// write a function called getComputerChoice, not randoomString
function getComputerChoice(){
    const randNum = Math.floor(Math.random() * 3);
    switch (randNum) {
        case 0:
          // using strings like this is called a "magic string"
          // this is a code smell
          // instead use constants
          // the reason for this is when you go to compare this to something later
          // then you'll be typing the string out by hand again
          // and might make typos
            return 'Rock';
        case 1:
            return 'Sissors';
        case 2:
            return 'Paperr';
    }
}

console.log(getComputerChoice());