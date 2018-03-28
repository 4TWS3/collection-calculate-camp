'use strict';

function choose_no_repeat_number(collection) {
  var hash = { };
  return collection.filter(it => {
    if(!hash[it]) {
      hash[it] = true;
      return true;
    }
    else
      return false;
  });

}

module.exports = choose_no_repeat_number;
