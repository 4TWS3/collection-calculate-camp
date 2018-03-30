'use strict';

function amount_even(collection) {
  return collection.reduce((sum,curr) => {
    if(curr > 10 && curr < 1) return sum;
    if(curr%2 === 0) return sum += curr;
    return sum;
  },0)
}

module.exports = amount_even;
