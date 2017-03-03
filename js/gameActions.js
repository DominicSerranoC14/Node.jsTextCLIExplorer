'use strict';

const gameActions = require('./gameActions.js');

module.exports = {

  // Prints start menu
  printGameMenu: () => {
    process.stdout.write(
      `Welcome to JsTextAdventure!\n
      To begin, enter one of the following commands.\n
      Start game: startGame\n
      Quit: exit\n\n`
    );
  },

  // Initiate the game
  startGame: (username) => {
    process.stdin.write(`Welcome ${username}. Get ready to play.\n`);
    [3,2,1].forEach((each) => setTimeout(() =>
      console.log(`${each}...`), each * 1000));
  },

  // This will end the game
  exit: () => {
    console.log("Goodbye!");
    process.exit();
  }

};
