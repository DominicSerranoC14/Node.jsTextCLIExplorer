'use strict';

const { argv: [,, ...args] } = process;
process.stdin.setEncoding('utf8');
const express = require('express');
const app = express();
/////////////////////////////////////////

const printGameMenu = () => {
  process.stdout
  .write(
    `Welcome!\n
    Start game: startNewGame()\n
    Quit: exit()\n
    \n`
  );
};
printGameMenu();


const startNewGame = () => {
  console.log("Starting game...");
};


const exit = () => {
  console.log("Goodbye!");
  process.exit();
};


process.stdin.on('data', (result) => {

  if (result === 'exit()') {
    exit();
  }

  if (result === 'startNewGame()') {
    startNewGame();
  }
  console.log("Test result:", result);
});
