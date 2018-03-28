'use strict';

function grouping_count(collection) {
  let ret = { }
  collection.forEach(it => {
    ret[it]? ret[it] = ret[it]+1 : ret[it] = 1
  });
  return ret;
}

module.exports = grouping_count;
