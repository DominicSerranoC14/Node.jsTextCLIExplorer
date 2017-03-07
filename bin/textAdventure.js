#!/usr/bin/env node

'use strict';

const { printGameMenu } = require('../js/gameActions');
const { createPrompt, setUsername } = require('../js/prompt');

// Print start menu
printGameMenu();
// Create a prompt for user input
createPrompt();
