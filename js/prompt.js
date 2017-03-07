'use strict';

const prompt = require('prompt');
const gameActions = require('./gameActions.js');
const { createLine } = require('./utils');

const createPrompt = () => {
  prompt.get(['$'], function (err, { $ }) {
    const input = $.toLowerCase();
    // If start game if startGame is passed
    if (input === 'start') {
      return setUsername();
    };
    // If there is not an existing command, create a new prompt.
    if (!Object.keys(gameActions).includes(input)) {
      process.stdout.write('No command found, try again.\n');
      return createPrompt();
    };

    // If command exists, execute function
    gameActions[input]();
    createPrompt();
  });
}

// Display username and startGame
const setUsername = () => {
  createLine();
  console.log('Please enter a username.')
  prompt.get(['username'], function (err, { username }) {
    let msg = `Welcome ${username}. Get ready to play.`;
    [msg,3,2,1].forEach((each, i) => setTimeout(() =>
      console.log(`${each}...`), i * 1000));
    // Start game play
    // setTimeout(createPrompt, 4000);
    // To keep process.stdin open
    // process.stdin.resume();
  });
}


module.exports = { setUsername, createPrompt };
