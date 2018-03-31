'use strict';
var even_asc_odd_desc = function (collection) {
  collection.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });

  let retArray = new Array(collection.length);
  let evenCount = 0;
  let oddCount = 0;

  return collection.reduce((ret, curr, index, arr) => {
    (curr % 2 === 0) ? ret[evenCount++] = curr :
      ret[collection.length - 1 - oddCount++] = curr;
    return ret;
  }, retArray);

};
module.exports = even_asc_odd_desc;
