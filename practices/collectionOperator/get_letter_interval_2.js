'use strict';


var get_integer_interval = require('./get_integer_interval.js');
function get_letter_interval_2(number_a, number_b) {
  let intArry = get_integer_interval(number_a, number_b);
  let fromCodeToChar = require('../util/fromCodeToChar');
  return intArry.map(item => {
    return  fromCodeToChar(item);
  });
}

module.exports = get_letter_interval_2;

