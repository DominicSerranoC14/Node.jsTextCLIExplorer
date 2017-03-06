'use strict';

const { getRandomWord } = require('./randomWord.js');
const { createLine } = require('./utils');
let currentWord;
let guessCount = 10;
let correctGuess = [];

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
    console.log(`You have ${guessCount} guesses.`);
    createLine();
    return getRandomWord()
    .then(word => word.split(''))
    .then(wordArray => currentWord = wordArray)
    .then(array => ' __ '.repeat(array.length))
    .then(console.log)
    .then(() => console.log(currentWord))
  },

  // Evaluate Guess
  evalGuess: (guess) => {
    if (currentWord.includes(guess)) {
      console.log(currentWord.indexOf(guess));
      console.log(currentWord.charAt(guess));
      createLine();
      correctGuess.push(guess);
      console.log(`Nice guess!`);
      console.log("guess", guess);
      console.log("currentWord", currentWord);
      console.log(
      `${currentWord.map(each => (each === guess) ?` ${guess} `:' __ ').join('')}`
      )
      // // currentWord.map(each => {
      // //   if (each === guess) {
      // //
      // //     // ` ${guess} `;
      // //
      // //   } else {
      // //     // ' __ ';
      // //   }
      // });
      return true;
    };
  },

  // This will end the game
  exit: () => {
    console.log("Goodbye!");
    process.exit();
  }

};
