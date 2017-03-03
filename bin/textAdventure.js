#!/usr/bin/env node

'use strict';

const { printGameMenu } = require('../js/gameActions');
const { createPrompt } = require('../js/prompt');

// Print start menu
printGameMenu();
// Open prompt for user input
createPrompt();
