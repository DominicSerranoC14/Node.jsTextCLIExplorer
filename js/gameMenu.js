'use strict';

const { argv: [,, ...args] } = process;
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

const exit = () => {
  console.log("Test exit");
  app.close();
};




app.listen(3000, () => printGameMenu());
