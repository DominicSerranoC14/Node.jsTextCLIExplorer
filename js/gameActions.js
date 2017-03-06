'use strict';

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

  },

  // This will end the game
  exit: () => {
    console.log("Goodbye!");
    process.exit();
  }

};
