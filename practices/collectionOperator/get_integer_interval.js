'use strict';

function get_integer_interval(number_a, number_b) {
  function createArrayForRange(number_a, number_b) {
    let ret = [];
    let step = number_b === number_a ?
      1 : ((number_b - number_a) / (Math.abs(number_b - number_a)));
    for (let i = number_a; i !== (number_b + step); i += step) {
      ret.push(i);
    }
    return ret;
  }

  return createArrayForRange(number_a, number_b)
}

module.exports = get_integer_interval;

