'use strict';

var get_letter_interval = require('./get_letter_interval.js');
var get_integer_interval = require('./get_integer_interval.js');
function get_letter_interval_2(number_a, number_b) {
  let intArry = get_integer_interval(number_a, number_b);
  let baseCode = 'a'.charCodeAt();

  return intArry.map(item => {
    if(item <= 26 )
         return String.fromCharCode(item + baseCode -1);
     return String.fromCharCode(item %26 === 0? 'a'.charCodeAt() : item/26+ baseCode -1) +
            String.fromCharCode(item %26 === 0? 'z'.charCodeAt() : item%26+ baseCode -1)
  });
}

module.exports = get_letter_interval_2;

