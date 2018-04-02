'use strict';
var get_integer_interval = require('./get_integer_interval.js');
var fromCodeToChar = require('../util/fromCodeToChar');

function get_letter_interval(number_a, number_b) {
  let intArry = get_integer_interval(number_a, number_b);
  return intArry.map(item => {
     return fromCodeToChar(item);
  });
}

module.exports = get_letter_interval;
