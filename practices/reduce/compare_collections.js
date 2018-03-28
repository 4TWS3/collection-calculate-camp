'use strict';

function compare_collections(collection_a, collection_b) {
  return collection_a.reduce((pre,curr,index,arr) => {

    if(curr == collection_b[index])
      return true && pre;
    else return false && pre;
  },true)
}

module.exports = compare_collections;


