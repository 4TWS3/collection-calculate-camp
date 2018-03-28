'use strict';

var removeDuplicate = require('../util/removeDuplicate');

function choose_no_repeat_number(collection) {
  return removeDuplicate(collection);

}

module.exports = choose_no_repeat_number;
