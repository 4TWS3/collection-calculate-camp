'use strict';

function get_union(collection_a, collection_b) {
  let ret =  collection_a;
  collection_b.forEach(it_b => {
    if(ret.indexOf(it_b)=== -1)
      ret.push(it_b);
  });
  return ret;
}

module.exports = get_union;

