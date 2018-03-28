'use strict';
var get_intersection = require('../collectionOperator/get_intersection');
function choose_common_elements(collection_a, collection_b) {
  return collection_a.filter(it => {
    return (collection_b.indexOf(it) > -1)
  })

}

module.exports = choose_common_elements;
