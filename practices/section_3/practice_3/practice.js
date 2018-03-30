var countSameElements = require('../../section_2/countSameElements').countSameElement;
var helpFunction = require('../util/help');

function create_updated_collection(collection_a, object_b) {
  let colection_c = countSameElements(collection_a);
  let cb = it => it -Math.floor(it/3);
  return helpFunction(colection_c,object_b,cb);
}

module.exports = create_updated_collection;
