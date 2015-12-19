'use strict';
require('dotenv').load();
let sqs = require('sqs');
let queue = sqs();

queue.pull('Kiwi_messenger', (msg, callback) => {
  console.log('someone pushed', msg);
  callback();
});
