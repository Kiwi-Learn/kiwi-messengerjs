'use strict';
require('dotenv').load();
let sqs = require('sqs');

let queue = sqs();

queue.push('Kiwi_messenger', 'Hello, from nodejs', (err) => {
  if (err) throw err;
});
