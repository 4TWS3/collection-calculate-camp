'use strict';
function rank_by_two_large_one_small(collection){
  collection.sort((a,b) => {
    if(a > b) return 1;
    if(a <b) return -1;
    return 0;
  });

  return rank(collection);
}
function rank(collection) {
  let length = collection.length;
  if(!length) return '';
  if(length < 3) {
    return collection
  }
  else {
    let left = shift_1st_3rd(collection);
    let rest = collection.slice(3);
    return left.concat(rank(rest));
  }

}
function shift_1st_3rd(collection) {
  let first = collection.slice(0,1);
  return collection.slice(1,3).concat(first);
 }

module.exports = rank_by_two_large_one_small;
