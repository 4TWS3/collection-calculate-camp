'use strict';

function get_intersection(collection_a, collection_b) {
  let ret = [];
 collection_b.forEach(it_b => {
   let item = collection_a.find(it_a => {
     return it_a === it_b;
   });
   if(item) ret.push(item);
 });
 return ret;
}

module.exports = get_intersection;
