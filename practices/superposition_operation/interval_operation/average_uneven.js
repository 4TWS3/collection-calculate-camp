'use strict';

function average_uneven(collection) {
  let count = 0;
  return collection.reduce((ret,curr,index,arr) => {
    if(curr > 10 && curr < 1) return ret;
    if(index === arr.length-1)  return (count === 0) ? 0:ret/count;
    if(curr % 2 !== 0) {
      count ++;
      return ret +=curr;
    }
    return ret;
  },0)

}

module.exports = average_uneven;
