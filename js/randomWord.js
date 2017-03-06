'use strict';

const fetch = require('node-fetch');
const URL = 'http://www.setgetgo.com/randomword/get.php';

module.exports = {

  // Returns a random word from the setgetgo api
  getRandomWord: () => {
    return fetch(URL)
    .then(res => res.text())
    .catch(console.log)
  }

}
