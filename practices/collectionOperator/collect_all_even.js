'use strict';

function collect_all_even(collection) {
  var ret = [];
  collection.forEach((item) => {
    if(item %2 == 0){
      ret.push(item);
  }
  });
  return ret;
}

module.exports = collect_all_even;
