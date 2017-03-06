#!/usr/bin/env node

'use strict';

const { printGameMenu, gamePlay } = require('../js/gameActions');
const { createPrompt, setUsername, currentGuessPrompt } = require('../js/prompt');

// Print start menu
// printGameMenu();
// Create a prompt for user input
// createPrompt();

// Testing
gamePlay()
.then(() => currentGuessPrompt());
