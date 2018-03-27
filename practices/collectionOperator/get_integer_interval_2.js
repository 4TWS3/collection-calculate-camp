'use strict';
var get_integer_interval = require('./get_integer_interval.js');
var collect_all_even = require('./collect_all_even.js');
function get_integer_interval_2(number_a, number_b) {

  let ret = get_integer_interval(number_a, number_b);
  return collect_all_even(ret);
}

module.exports = get_integer_interval_2;
