'use strict';

function find_first_even(collection) {
  let ret;
  for(let i = 0; i< collection.length; i++) {
    if(collection[i] % 2 === 0){
      ret = collection[i];
      break;
    }
  }
  return ret;
}

module.exports = find_first_even;

