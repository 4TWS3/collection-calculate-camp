'use strict';
function get_intersection(collection_a, collection_b) {
  return collection_b.filter(it => collection_a.indexOf(it) > -1)
}

module.exports = get_intersection;
