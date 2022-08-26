const prompt = require('prompt-sync')({sigint: true});
/*
const name = prompt('Welcome to ROCK, PAPPER, SISSORS /n Enter you');
console.log(`Hey there ${name}`);
*/

function randoomString(){
    const randNum = Math.floor(Math.random() * 3);
    switch (randNum) {
        case 0:
            return 'Rock';
        case 1:
            return 'Sissors';
        case 2:
            return 'Paperr';
    }
}

console.log(randoomString());