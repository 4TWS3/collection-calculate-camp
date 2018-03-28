'use strict';

function find_last_even(collection) {
  let ret;
  for(let i=collection.length - 1; i >= 0 ;i--) {
    if(collection[i] % 2 === 0) {
      ret = collection[i];
      break;
    }
  }
  return ret;
}

module.exports = find_last_even;
