'use strict';

const prompt = require('prompt');
const gameActions = require('./gameActions.js');
const { createLine } = require('./utils');

module.exports = {

  createPrompt: () => {
    createLine();
    prompt.get(['$'], function (err, { $ }) {
      // If there is not an existing command, create a new prompt.
      if (!Object.keys(gameActions).includes($)) {
        process.stdout.write('No command found, try again.\n');
        return createPrompt();
      };
      // If command exists, execute function
      gameActions[$]();
      process.stdin.resume();
    })
  }

};
