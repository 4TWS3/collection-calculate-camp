'use strict';
const removeDuplicate = require('../util/removeDuplicate');

function get_union(collection_a, collection_b) {
  let union = collection_a.concat(collection_b);
  return removeDuplicate(union);
}

module.exports = get_union;

