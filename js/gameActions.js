'use strict';

const { getRandomWord } = require('./randomWord.js');
const { createLine } = require('./utils');
let currentWord;

module.exports = {

  // Prints start menu
  printGameMenu: () => {
    process.stdout.write(
      `Welcome to the Node CLI Game!\n
      To begin, enter one of the following commands.\n
      Start game: start\n
      Quit: exit\n\n`);
  },

  // Initiate the game
  gamePlay: () => {
    createLine();
    getRandomWord()
    .then(word => word.split(''))
    .then(wordArray => currentWord = wordArray)
    .then(array => ' __ '.repeat(array.length))
    .then(console.log)
  },

  // This will end the game
  exit: () => {
    console.log("Goodbye!");
    process.exit();
  }

};
