const prompt = require('prompt-sync')({sigint: true});
const Math = require('mathjs');

const name = prompt('What is your name? ');
console.log(`Hey there ${name}`);
