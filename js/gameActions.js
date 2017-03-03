'use strict';

const gameActions = require('./gameActions.js');

module.exports = {

  // Prints start menu
  printGameMenu: () => {
    process.stdout.write(
      `Welcome!\n
      To begin, enter one of the following commands.\n
      Start game: startGame\n
      Quit: exit\n`
    );
  },

  // Initiate the game
  startGame: () => {
    prompt.get(['username'], function (err, { username }) {
      gameActions.userName = username;
      process.stdin.write(`Welcome ${username}. Get ready to play.\n`);
      [3,2,1].forEach((each) => setTimeout(() =>
        console.log(`${each}...`), each * 1000));
      // To keep process.stdin open
      process.stdin.resume();
    });

  },

  // This will end the game
  exit: () => {
    console.log("Goodbye!");
    process.exit();
  }

};
