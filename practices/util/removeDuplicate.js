'use strict';
function removeDuplicate(collection) {
  var hash = {};
  return collection.filter(it => {
    if (!hash[it]) {
      hash[it] = true;
      return true;
    }
    else
      return false;
  });
}
module.exports = removeDuplicate;
