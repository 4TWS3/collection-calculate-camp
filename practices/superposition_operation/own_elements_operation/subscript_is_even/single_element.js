'use strict';
require('./subArray');
var single_element = function(collection){
  let arr = collection.getSubArrayOnEvenPosition().sort((a,b) => {
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
  });
  for(let it of arr) {
    let idx1 = arr.indexOf(it);
    let idx2 = arr.lastIndexOf(it);
    if(idx2 - idx1 > 0) {
      arr = arr.slice(idx2+1);
    }
  }
  return arr;
};


module.exports = single_element;
