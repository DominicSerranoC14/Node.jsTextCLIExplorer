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
    Exit: exit()\n
    \n`
  );
};
printGameMenu();


const exit = () => {
  console.log("Goodbye!");
  // app.close();
  process.exit();
};


process.stdin.on('data', (result) => {

  if (result = 'exit()') {
    exit();
  }
  console.log("Test result", result);
});
