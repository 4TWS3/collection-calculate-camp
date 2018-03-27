'use strict';
var get_integer_interval = require('./get_integer_interval.js');

function get_letter_interval(number_a, number_b) {
  let intArry = get_integer_interval(number_a, number_b);
  let baseCode = 'a'.charCodeAt();
  return intArry.map(item => {
     return String.fromCharCode(baseCode+item-1);
  });
}

module.exports = get_letter_interval;
